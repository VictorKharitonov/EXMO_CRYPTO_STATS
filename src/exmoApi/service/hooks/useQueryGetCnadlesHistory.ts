import { useQuery } from '@tanstack/react-query';
import { getCandlesHistory } from '../../api.ts';
import { ICandleInterval } from '../../../utils/type.ts';
import { calcDatesForInterval } from '../../../utils/interval.ts';

export const useQueryGetCandlesHistory = (pair: string, interval: ICandleInterval) => {
  const [to, from, resolution] = calcDatesForInterval(interval);

  return useQuery({
    queryKey: ['candlesHistory', pair, resolution, from, to],
    queryFn: async () => await getCandlesHistory(pair, resolution, from, to)
  });
};
