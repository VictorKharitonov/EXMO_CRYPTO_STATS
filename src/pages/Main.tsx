import { FC, SyntheticEvent, useState } from 'react';
import TickerContainer from '../components/ticker/TickerContainer.tsx';
import SelectPairs from '../components/ticker/SelectPairs.tsx';
import { Grid, SelectChangeEvent, Tab, Tabs } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import OrderBookContainer from '../components/orderBook/OrderBookContainer.tsx';
import { TabContext } from '@mui/lab';
import TradeHistoryContainer from '../components/tradeHistory/TradeHistoryContainer.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../components/ui/Error.tsx';

const ORDER_BOOK = 'orderBook';
const TRADE_HISTORY = 'tradeHistory';

const Main: FC = () => {
  const [pair, setPair] = useState('BTC_USDT');
  const [tab, setTab] = useState(ORDER_BOOK);

  const changeTab = (e: SyntheticEvent, tab: string) => {
    setTab(tab);
  };

  const selectPair = (e: SelectChangeEvent) => {
    setPair(e.target.value);
  };

  return (
    <>
      <SelectPairs pair={pair} onChange={selectPair} />
      <Grid container>
        <Grid item xs={8}>
          <ErrorBoundary FallbackComponent={Error}>
            <TickerContainer pair={pair} />
          </ErrorBoundary>
        </Grid>
        <Grid item xs={4}>
          <TabContext value={tab}>
            <Tabs textColor="inherit" indicatorColor="secondary" value={tab} onChange={changeTab}>
              <Tab label="Order Book" value={ORDER_BOOK} color="white" sx={{ color: 'white' }} />
              <Tab label="Trade History" value={TRADE_HISTORY} sx={{ color: 'white' }} />
            </Tabs>
            <TabPanel value={ORDER_BOOK} sx={{ padding: '10px 0 10px 0' }}>
              <ErrorBoundary FallbackComponent={Error}>
                <OrderBookContainer pair={pair} />
              </ErrorBoundary>
            </TabPanel>
            <TabPanel value={TRADE_HISTORY} sx={{ padding: '10px 0 10px 0' }}>
              <ErrorBoundary FallbackComponent={Error}>
                <TradeHistoryContainer pair={pair} />
              </ErrorBoundary>
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
