export interface TickerItem {
  buy_price: number;
  sell_price: number;
  last_trade: number;
  high: number;
  low: number;
  avg: number;
  vol: number;
  vol_curr: number;
  updated: number;
}

export interface ITicker {
  ts: number;
  event: string;
  topic: string;
  data: TickerItem;
}

export interface ICryptoPairs {
  [key: string]: string;
}

export interface ICandle {
  t: number;
  o: number;
  c: number;
  h: number;
  l: number;
  v: number;
}

export interface ICandlesHistory {
  candles: ICandle[];
}

export interface IChartSeriesItem {
  x: number;
  y: [number, number, number, number];
  tooltip?: {
    open: string;
    high: string;
    close: string;
    low: string;
  };
}

export interface IChartSeries {
  series: [
    {
      data: IChartSeriesItem[];
    }
  ];
}
