import { FC } from 'react';
import { TableRow } from '@mui/material';
import { ITradeHistoryItem } from './type.ts';
import TextFormat from '../ui/TextFormat.tsx';

interface TradeHistoryListTableRowProps {
  item: ITradeHistoryItem;
}

const TradeHistoryListTableRow: FC<TradeHistoryListTableRowProps> = ({ item }) => {
  const { price, quantity, date, type } = item;
  const currentDate = new Date(date * 1000);
  const formattedDate = currentDate.toDateString();

  return (
    <TableRow sx={{ 'td, th': { border: 0, padding: '2px 10px 2px 10px' } }}>
      <TextFormat data={price} component="th" align="left" type="money" color={type === 'sell' ? 'red' : 'green'} />
      <TextFormat data={quantity} component="th" align="left" />
      <TextFormat data={formattedDate} component="th" align="left" />
    </TableRow>
  );
};

export default TradeHistoryListTableRow;
