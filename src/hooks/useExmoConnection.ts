import { useEffect, useState } from 'react';
import { connectExmoWSPublicApi } from '../exmoApi/wsClient.ts';

export const useExmoWSConnection = <T>(topics: string[], pair: string): [T | null, boolean, string] => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const jsonTopics = JSON.stringify(topics);

  const onMessage = (e: MessageEvent) => {
    const message = JSON.parse(e.data);

    if (message.event === 'error') {
      setError(message.message);
      return;
    }

    if (!message.data) {
      return;
    }
    setData(message);
  };

  const onOpen = (e: Event) => {
    setIsLoading(false);
  };

  useEffect(() => {
    const subscribe = [`{"id":1,"method":"subscribe","topics":${jsonTopics}}`];
    const disconnect = connectExmoWSPublicApi(subscribe, { onMessage, onOpen });
    return () => {
      const unsubscribe = [`{"id":1,"method":"unsubscribe","topics":${jsonTopics}}`];
      disconnect(unsubscribe);
      setIsLoading(false);
      setError('');
    };
  }, [jsonTopics, pair]);

  return [data, isLoading, error];
};
