import { FC } from 'react';
import { IOrderBook } from './type.ts';
import OrderList from './table/OrderList.tsx';
import { CircularProgress } from '@mui/material';
import { useExmoWSConnection } from '../../hooks/useExmoConnection.ts';

interface OrderBookContainerProps {
  pair: string;
}

const OrderBookContainer: FC<OrderBookContainerProps> = ({ pair }) => {
  const topics = [`spot/order_book_snapshots:${pair}`];
  const [orderBook, isLoading, error] = useExmoWSConnection<IOrderBook>(topics, pair);

  if (error) {
    throw new Error(`Ошибка соединения по WebSocket: ${error}`);
  }

  return (
    <>
      {orderBook && !isLoading ? (
        <OrderList ask={orderBook.data.ask} bid={orderBook.data.bid} pair={pair} />
      ) : (
        <CircularProgress color="primary" />
      )}
    </>
  );
};

export default OrderBookContainer;
