import { FC, useMemo } from 'react';
import { ITradeHistoryItem } from './type.ts';
import { Table, TableBody, TableContainer } from '@mui/material';
import { OrderListTableHead } from '../orderBook/table';
import TradeHisotryListTableRow from './TradeHisotryListTableRow.tsx';

interface TradeHistoryListProps {
  data: ITradeHistoryItem[];
  pair: string;
}

const TradeHistoryList: FC<TradeHistoryListProps> = ({ data, pair }) => {
  const [firstPair, secondPair] = pair.split('_');
  const listTitles = useMemo(() => [`Price ${secondPair}`, `Amount ${firstPair}`, `Date`], [firstPair, secondPair]);

  const mappedTradeHistoryList = (trade: ITradeHistoryItem, i: number) => {
    return i < 30 ? <TradeHisotryListTableRow item={trade} key={trade.trade_id} /> : null;
  };

  return (
    <TableContainer
      sx={{
        maxWidth: 390,
        background: '#464646',
        borderRadius: '10px',
        maxHeight: '420px',
        overflowY: 'scroll',
        scrollbarColor: 'white grey'
      }}
    >
      <Table size="small">
        <OrderListTableHead titles={listTitles} />
        <TableBody>{data.map(mappedTradeHistoryList)}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TradeHistoryList;
