import { FC } from 'react';
import { ITicker } from './types.ts';
import { Box } from '@mui/material';
import { usePrevious } from '../../hooks/usePrevious.ts';
import TickerItem from './TickerItem.tsx';

interface TickerInfoProps {
  info: ITicker;
}

const box = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 2fr',
  gap: 2,
  padding: '0 55px 0 0',
  maxWidth: 'fit-content'
};

const TickerInfo: FC<TickerInfoProps> = ({ info }) => {
  const { last_trade, high, low, vol_curr } = info.data;
  const previousLastTrade = usePrevious(last_trade);

  return (
    <Box sx={box}>
      <TickerItem label="Last Price" data={last_trade} color={previousLastTrade < last_trade ? 'green' : 'red'} />
      <TickerItem label="High 24h" data={high} />
      <TickerItem label="Low 24h" data={low} />
      <TickerItem label="24h Volume" data={vol_curr} />
    </Box>
  );
};

export default TickerInfo;
