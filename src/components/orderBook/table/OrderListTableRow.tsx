import { FC } from 'react';
import { TOrder } from '../type.ts';
import { TableRow } from '@mui/material';
import TextFormat from '../../ui/TextFormat.tsx';

interface OrderListTableRowProps {
  order: TOrder;
  type: 'ask' | 'bid';
}

const OrderListTableRow: FC<OrderListTableRowProps> = ({ order, type }) => {
  const [price, amount, total] = order;

  return (
    <TableRow sx={{ 'td, th': { border: 0, padding: '2px 10px 2px 10px' } }}>
      <TextFormat data={price} component="th" align="left" type="money" color={type === 'ask' ? 'red' : 'green'} />
      <TextFormat data={amount} component="th" align="left" />
      <TextFormat data={total} component="th" align="left" type="money" />
    </TableRow>
  );
};

export default OrderListTableRow;
