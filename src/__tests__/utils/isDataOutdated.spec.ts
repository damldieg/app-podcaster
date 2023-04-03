import { isDataOutdated } from '../../utils/isDataOutdated';

describe('isDataOutdated', () => {
  test('Should return true if the data is outdated', () => {
    const date = new Date('10/25/2022');
    const response = isDataOutdated(date);

    expect(response).toBeTruthy();
  });

  test('Should return false if the data is updated', () => {
    const date = new Date();
    const response = isDataOutdated(date);

    expect(response).toBeFalsy();
  });
});
