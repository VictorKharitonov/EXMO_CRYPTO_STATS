import { ICandleInterval, TTimeTable, TTResolutionTable } from './type.ts';

const startTimestamp = Date.now();

const timestamp: TTimeTable = {
  min: 60000,
  hour: 3600000,
  day: 86400000,
  week: 604800000,
  month: getDateInMonth(new Date()) * 86400000,
  year: isLongYear(new Date()) ? 365 * 86400000 : 364 * 86400000
};

const resolutionTable: TTResolutionTable = {
  min: 1,
  hour: 5,
  day: 60,
  week: 180,
  month: 'D',
  year: 'W'
};

function isLongYear(date: Date) {
  return date.getFullYear() % 4;
}

function getDateInMonth(date: Date) {
  return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
}

function calcResolution({ value, type }: ICandleInterval) {
  if (type === 'min') {
    return resolutionTable[type];
  }

  if (typeof resolutionTable[type] === 'number') {
    return (resolutionTable[type] as number) * value;
  }

  return resolutionTable[type];
}

export const calcDatesForInterval = ({ value, type }: ICandleInterval): [number, number, string | number] => {
  const endTimestamp = startTimestamp - timestamp[type] * value;
  const resolution = calcResolution({ value, type });
  const to = Number((startTimestamp / 1000).toFixed()); // to | from жрет только до 10 цифр в числе
  const from = Number((endTimestamp / 1000).toFixed());

  return [to, from, resolution];
};
