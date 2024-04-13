import { FC, useMemo } from 'react';
import { TOrder } from '../type.ts';
import { Table, TableBody, TableContainer } from '@mui/material';
import { OrderListTableHead, OrderListTableRow } from './index.tsx';

interface OrderListProps {
  ask: TOrder[];
  bid: TOrder[];
  pair: string;
}

const OrderList: FC<OrderListProps> = ({ ask, bid, pair }) => {
  const [firstPair, secondPair] = pair.split('_');
  const listTitles = useMemo(
    () => [`Price ${secondPair}`, `Amount ${firstPair}`, `Total ${secondPair}`],
    [firstPair, secondPair]
  );

  const sortByTotalPrice = (prev: TOrder, next: TOrder) => {
    return next[2] - prev[2];
  };

  const mapOrderListByType = (type: 'ask' | 'bid') => {
    return (order: TOrder, i: number) => {
      return i >= 7 ? null : <OrderListTableRow key={order[2]} order={order} type={type} />;
    };
  };

  const mapOrderListAsk = mapOrderListByType('ask');
  const mapOrderListBid = mapOrderListByType('bid');

  return (
    <TableContainer sx={{ maxWidth: 390, background: '#464646', borderRadius: '10px' }}>
      <Table aria-label="simple table" size="small">
        <OrderListTableHead titles={listTitles} />
        <TableBody>{[...ask].sort(sortByTotalPrice).map(mapOrderListAsk)}</TableBody>
        <TableBody>{[...bid].sort(sortByTotalPrice).map(mapOrderListBid)}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;
