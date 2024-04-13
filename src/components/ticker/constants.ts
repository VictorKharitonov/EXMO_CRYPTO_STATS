import { ICryptoPairs } from './types.ts';
import { ICandleInterval } from '../../utils/type.ts';

export const CRYPTO_PAIRS: ICryptoPairs = {
  BTC_USDT: 'BTC/USDT',
  BTC_RUB: 'BTC/RUB',
  ETH_USDT: 'ETH/USDT',
  ETH_RUB: 'ETH/RUB',
  USDT_RUB: 'USDT/RUB'
};

export const CANDLE_CHART_INTERVALS: ICandleInterval[] = [
  { value: 1, type: 'hour', id: 1 },
  { value: 6, type: 'hour', id: 2 },
  { value: 12, type: 'hour', id: 3 },
  { value: 1, type: 'day', id: 4 },
  { value: 1, type: 'week', id: 5 },
  { value: 1, type: 'month', id: 6 },
  { value: 1, type: 'year', id: 7 },
  { value: 5, type: 'year', id: 8 }
];
