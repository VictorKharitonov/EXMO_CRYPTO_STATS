import { FC, memo } from 'react';
import { Box, Typography } from '@mui/material';
import TextFormat from '../ui/TextFormat.tsx';

interface TickerItemProps {
  label: string;
  data: number;
  color?: string;
}

const item = { p: 1.5, borderRadius: 2, backgroundColor: '#383838', marginBottom: 3 };

const TickerItem: FC<TickerItemProps> = ({ label, data, color = '#ffffff' }) => {
  return (
    <Box sx={item}>
      <Typography variant="body1">{label}</Typography>
      <TextFormat data={data} color={color} type="money" />
    </Box>
  );
};

export default memo(TickerItem);
