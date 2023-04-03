import { useLoadInitialData } from '@/hooks/useLoadInitialData';
import { store } from '@/store/PodcasterStore';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';

const mockGetData = vi.fn();
const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
vi.mock('@/hooks/useLoadInitialData', () => ({
  useLoadInitialData: () => {
    return { getData: mockGetData };
  },
}));

describe('useLoadInitialData', () => {
  test('Should load the initial data of the application', () => {
    const { result } = renderHook(() => useLoadInitialData(), { wrapper });
    result.current.getData();
    expect(mockGetData).toHaveBeenCalledOnce();
  });
});
