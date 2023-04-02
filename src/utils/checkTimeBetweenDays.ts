import { differenceInDays } from 'date-fns';

export const checkTimeBetweenDays = (date: Date): number => {
  const today = new Date();
  const requestDate = new Date(date);
  const timeBetweenDays = differenceInDays(today, requestDate);
  return timeBetweenDays;
};
