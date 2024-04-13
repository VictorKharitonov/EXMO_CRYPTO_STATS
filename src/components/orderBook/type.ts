export type TOrder = [price: number, quatity: number, amount: number];

export interface IOrderBookItem {
  ask: TOrder[];
  bid: TOrder[];
}

export interface IOrderBook {
  ts: number;
  event: string;
  topic: 'string';
  data: IOrderBookItem;
}
