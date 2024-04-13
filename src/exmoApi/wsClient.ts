const EXMO_WS_BASE_URL = 'wss://ws-api.exmo.me:443/v1';
const EXMO_WS_PUBLIC_URL = `${EXMO_WS_BASE_URL}/public/`;

interface SocketHandlers {
  onMessage: (e: MessageEvent) => void;
  onOpen?: (e: Event) => void;
  onClose?: (e: CloseEvent) => void;
  onError?: (e: Event) => void;
}

interface ICreateExmoWSConnection extends SocketHandlers {
  url: string;
  messages: string[];
}

const createExmoWSConnection = ({ url, messages, onMessage, onError, onClose, onOpen }: ICreateExmoWSConnection) => {
  const socket = new WebSocket(url);

  socket.onmessage = e => {
    onMessage(e);
  };

  socket.onclose = e => {
    if (!onClose) {
      console.log('Connection closed', e);
      return;
    }

    onClose(e);
  };

  socket.onerror = (e: Event) => {
    if (!onError) {
      console.log('Connection error', e);
      return;
    }

    onError(e);
  };

  socket.onopen = (e: Event) => {
    for (const message of messages) {
      socket.send(message);
    }

    if (!onOpen) {
      console.log('Connection opened', e);
      return;
    }

    onOpen(e);
  };

  return socket;
};

export const connectExmoWSPublicApi = (messages: string[], handlers: SocketHandlers) => {
  const socket = createExmoWSConnection({ url: EXMO_WS_PUBLIC_URL, messages, ...handlers });

  return (messages: string[]) => {
    for (const message of messages) {
      socket.send(message);
    }
  };
};
