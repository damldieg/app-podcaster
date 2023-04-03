import { handleGetPodcastsListFromAPI } from '@/useCases/handleGetPodcastsListFromAPI';

const dispatchMock = vi.fn();
const keyMock = 'mockedKey';
const setLocalStorageMock = false;

describe('handleGetPodcastsListFromAPI', () => {
  const spy = vi.fn(handleGetPodcastsListFromAPI);
  test('Should get podcast list from API', () => {
    spy({
      dispatch: dispatchMock,
      key: keyMock,
      setLocalStorage: setLocalStorageMock,
    });

    expect(spy).toHaveBeenCalledWith({
      dispatch: dispatchMock,
      key: keyMock,
      setLocalStorage: setLocalStorageMock,
    });
  });
});
