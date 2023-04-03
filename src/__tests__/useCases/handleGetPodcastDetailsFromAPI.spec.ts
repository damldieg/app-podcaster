import { handleGetPodcastDetailsFromAPI } from '@/useCases/handleGetPodcastDetailsFromAPI';
import { DummyPodcastDetails } from '../__mocks__/PodcasterMocks/PodcastDetails.mock';

const dispatchMock = vi.fn();
const keyMock = 'mockedKey';
const setLocalStorageMock = false;
const podcastMock = DummyPodcastDetails;

describe('handleGetPodcastDetailsFromAPI', () => {
  const spy = vi.fn(handleGetPodcastDetailsFromAPI);
  test('Should get podcast details from API', () => {
    spy({
      dispatch: dispatchMock,
      key: keyMock,
      setLocalStorage: setLocalStorageMock,
      podcast: podcastMock,
    });

    expect(spy).toHaveBeenCalledWith({
      dispatch: dispatchMock,
      key: keyMock,
      setLocalStorage: setLocalStorageMock,
      podcast: podcastMock,
    });
  });
});
