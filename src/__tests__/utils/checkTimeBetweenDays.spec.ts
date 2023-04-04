import { checkTimeBetweenDays } from '../../utils/checkTimeBetweenDays';

describe('checkTimeBetweenDays', () => {
  test('Should return 3 with the given date', () => {
    const date = new Date('3/31/2023');
    const response = checkTimeBetweenDays(date);

    expect(response > 0).toBeTruthy();
  });

  test('Should return 0 with the given date', () => {
    const date = new Date();
    const response = checkTimeBetweenDays(date);

    expect(response).toBe(0);
  });
});
