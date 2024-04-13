import { FC, useState } from 'react';
import { ITicker } from './types.ts';
import { Box, CircularProgress } from '@mui/material';
import TickerInfo from './TickerInfo.tsx';
import CandleInterval from './candles/CandleInterval.tsx';
import { ICandleInterval } from '../../utils/type.ts';
import { useExmoWSConnection } from '../../hooks/useExmoConnection.ts';
import CandlesChart from './candles/candlesChart/CandlesChart.tsx';

interface TickerContainerProps {
  pair: string;
}

const TickerContainer: FC<TickerContainerProps> = ({ pair }) => {
  const topics = [`spot/ticker:${pair}`];
  const [ticker, isLoading, error] = useExmoWSConnection<ITicker>(topics, pair);
  const [interval, setInterval] = useState<ICandleInterval>({ value: 1, type: 'day', id: 4 });

  if (error) {
    throw new Error(`Error: ${error}`);
  }

  return (
    <>
      {!isLoading && ticker ? (
        <TickerInfo info={ticker} />
      ) : (
        <Box mb={2}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      <CandleInterval interval={interval} setInterval={setInterval} />
      <CandlesChart pair={pair} interval={interval} />
    </>
  );
};

export default TickerContainer;
