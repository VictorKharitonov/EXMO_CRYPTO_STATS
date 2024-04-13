import { useEffect, useState } from 'react';
import { ITradeHistory, ITradeHistoryItem } from '../components/tradeHistory/type.ts';
import { useExmoWSConnection } from './useExmoConnection.ts';
import { useMutationTradeHistory } from '../exmoApi/service/hooks/useMutationTradeHistory.ts';

export const useTradeHistory = (pair: string) => {
  const topics = [`spot/trades:${pair}`];
  const [data, setData] = useState<ITradeHistoryItem[]>([]);
  const { data: tradeHistory, mutate: getTradeHistory, error, isPending } = useMutationTradeHistory();
  const [tradeHistoryWs, isLoading, wsError] = useExmoWSConnection<ITradeHistory>(topics, pair);

  useEffect(() => {
    getTradeHistory({ pair });
  }, [getTradeHistory, pair]);

  useEffect(() => {
    if (tradeHistory) {
      setData(tradeHistory);
    }
  }, [tradeHistory]);

  useEffect(() => {
    if (!tradeHistoryWs) {
      return;
    }

    setData(prev => [...tradeHistoryWs.data, ...prev]);
  }, [tradeHistoryWs]);

  if (wsError) {
    throw new Error(`Error: ${wsError}`);
  }

  if (error) {
    throw new Error(`Error: ${error.message}`);
  }

  return { data, isPending: isPending && isLoading, error: error || wsError };
};
