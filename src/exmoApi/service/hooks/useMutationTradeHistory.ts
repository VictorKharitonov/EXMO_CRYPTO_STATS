import { useMutation } from '@tanstack/react-query';
import { getTradeHistory } from '../../api.ts';

export const useMutationTradeHistory = () => {
  return useMutation({
    mutationFn: getTradeHistory
  });
};
