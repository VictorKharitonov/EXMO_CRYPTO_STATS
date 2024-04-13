import { FC } from 'react';
import TradeHistoryList from './TradeHistoryList.tsx';
import { Box, CircularProgress } from '@mui/material';
import { useTradeHistory } from '../../hooks/useTradeHistory.ts';

interface TradeHistoryContainerProps {
  pair: string;
}

const TradeHistoryContainer: FC<TradeHistoryContainerProps> = ({ pair }) => {
  const { data, isPending } = useTradeHistory(pair);

  return (
    <>
      {!isPending ? (
        <TradeHistoryList data={data} pair={pair} />
      ) : (
        <Box mb={2}>
          <CircularProgress color="secondary" />
        </Box>
      )}
    </>
  );
};

export default TradeHistoryContainer;
