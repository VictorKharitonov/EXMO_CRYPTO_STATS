import { FC } from 'react';
import { Alert, Backdrop, CircularProgress } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { config } from './config.ts';
import { ICandleInterval } from '../../../../utils/type.ts';
import { useQueryGetCandlesHistory } from '../../../../exmoApi/service/hooks/useQueryGetCnadlesHistory.ts';

interface CandlesChartProps {
  pair: string;
  interval: ICandleInterval;
}

const CandlesChart: FC<CandlesChartProps> = ({ pair, interval }) => {
  const { data, isLoading, error } = useQueryGetCandlesHistory(pair, interval);

  if (error) {
    return <Alert color="error">{error.message}</Alert>;
  }

  return (
    <>
      {isLoading ? (
        <Backdrop open={true}>
          <CircularProgress color="primary" />
        </Backdrop>
      ) : (
        <ReactApexChart options={config} series={data?.series} type="candlestick" height={350} width={860} />
      )}
    </>
  );
};

export default CandlesChart;
