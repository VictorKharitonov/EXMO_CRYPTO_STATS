export type TInterval = 'min' | 'hour' | 'day' | 'week' | 'month' | 'year';
export type TTimeTable = Record<TInterval, number>;
export type TTResolutionTable = Record<TInterval, number | string>;

export interface ICandleInterval {
  value: number;
  type: TInterval;
  id: number;
}
