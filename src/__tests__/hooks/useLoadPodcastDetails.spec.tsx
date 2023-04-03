import { useLoadPodcastDetails } from '@/hooks/useLoadPodcastDetails';
import { store } from '@/store/PodcasterStore';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { DummyPodcastsList } from '../__mocks__/PodcasterMocks/PodcastsList.mock';

const mockGetData = vi.fn();
const mockPodcast = DummyPodcastsList[0];
const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
vi.mock('@/hooks/useLoadPodcastDetails', () => ({
  useLoadPodcastDetails: () => {
    return { getData: mockGetData };
  },
}));

describe('useLoadPodcastDetails', () => {
  test('Should load the initial data of the application', () => {
    const { result } = renderHook(() => useLoadPodcastDetails(), { wrapper });
    result.current.getData(mockPodcast);
    expect(mockGetData).toHaveBeenCalledWith(mockPodcast);
  });
});
