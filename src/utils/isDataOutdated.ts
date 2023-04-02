import { checkTimeBetweenDays } from './checkTimeBetweenDays';

export const isDataOutdated = (date: Date): boolean => {
  return checkTimeBetweenDays(date) > 0;
};
