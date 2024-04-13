import { ApexOptions } from 'apexcharts';

export const config: ApexOptions = {
  chart: {
    type: 'candlestick',
    height: 350,
    toolbar: {
      autoSelected: 'pan',
      show: false
    }
  },
  tooltip: {
    followCursor: true,
    theme: 'dark'
  },
  xaxis: {
    type: 'datetime',
    crosshairs: {
      show: true
    },
    labels: {
      show: true,
      style: {
        colors: '#ffffff'
      }
    }
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: '#ffffff'
      },
      formatter(val: number) {
        return String(val.toFixed(2));
      }
    }
  }
};
