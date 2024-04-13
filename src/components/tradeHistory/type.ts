export interface ITradeHistory {
  ts: number;
  event: string;
  topic: string;
  data: ITradeHistoryItem[];
}

export interface ITradeHistoryItem {
  trade_id: number;
  type: 'buy' | 'sell';
  price: number;
  quantity: number;
  amount: number;
  date: number;
}

export interface IMappedTradeHistory {
  buy: ITradeHistoryItem[];
  sell: ITradeHistoryItem[];
}
