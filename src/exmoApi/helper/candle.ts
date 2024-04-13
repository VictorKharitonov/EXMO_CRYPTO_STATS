import { ICandle, IChartSeriesItem } from '../../components/ticker/types.ts';

export const candleChartFormat = (candle: ICandle): IChartSeriesItem => {
  const { t: timestamp, o: open, c: close, h: high, l: low }: ICandle = candle;
  return {
    x: timestamp,
    y: [open, high, low, close],
    tooltip: {
      open: `Open: ${open}`,
      close: `Close: ${close}`,
      high: `High: ${high}`,
      low: `Low: ${low}`
    }
  };
};
