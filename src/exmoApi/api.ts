import { HttpClient } from './httpClient.ts';
import { ICandlesHistory, IChartSeries } from '../components/ticker/types.ts';
import { candleChartFormat } from './helper/candle.ts';
import { ITradeHistoryItem } from '../components/tradeHistory/type.ts';

const client = new HttpClient('https://api.exmo.com/v1.1/');

export const getCandlesHistory = async (symbol: string, resolution: number | string, from: number, to: number) => {
  try {
    const data: ICandlesHistory = await client.get(
      `candles_history?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}`
    );

    const mappedData: IChartSeries = {
      series: [
        {
          data: data.candles.map(candleChartFormat)
        }
      ]
    };

    return mappedData;
  } catch (e) {
    return null;
  }
};

export const getTradeHistory = async (body: { pair: string }) => {
  try {
    const data = await client.post('trades', body);
    const trades: ITradeHistoryItem[] = data[body.pair];

    return trades;
  } catch (e) {
    return [];
  }
};
