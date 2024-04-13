import { FC, memo, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ICandleInterval } from '../../../utils/type.ts';
import { CANDLE_CHART_INTERVALS } from '../constants.ts';

interface CandleIntervalProps {
  interval: ICandleInterval;
  setInterval: (interval: ICandleInterval) => void;
}

const CandleInterval: FC<CandleIntervalProps> = ({ interval, setInterval }) => {
  const [intervals, setIntervals] = useState<ICandleInterval[]>(CANDLE_CHART_INTERVALS);

  const handleChangeInterval = (e: MouseEvent<HTMLElement>, newInterval: ICandleInterval) => {
    if (newInterval !== null) {
      setInterval(newInterval);
    }
  };

  const isSelected = (item: ICandleInterval) => item.id === interval.id;

  return (
    <ToggleButtonGroup
      color="error"
      sx={{ background: '#ffffff' }}
      value={interval}
      exclusive
      onChange={handleChangeInterval}
    >
      {intervals.map(item => {
        const selected = isSelected(item);
        return (
          <ToggleButton value={item} key={item.id} selected={selected}>
            {item.value + item.type}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default memo(CandleInterval);
