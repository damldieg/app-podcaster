import {
  addPodcastsList,
  setPodcastsListLoadState,
} from '@/reducers/podcastsListSlice';
import { getDataAndSetStoreFromAPI } from '@/utils/getDataAndSetStoreFromAPI';
import { getLocalStorageData } from '@/utils/handleLocalStorage';
import { isDataOutdated } from '@/utils/isDataOutdated';
import { useDispatch } from 'react-redux';

const localStorageKey = 'podcastsList';

export const useLoadInitialData = () => {
  const dispatch = useDispatch();
  const localStorageData = getLocalStorageData({ key: localStorageKey });

  const getData = async () => {
    if (localStorageData) {
      if (isDataOutdated(localStorageData.date)) {
        await getDataAndSetStoreFromAPI({
          dispatch,
          key: localStorageKey,
          setLocalStorage: false,
        });
      } else {
        dispatch(setPodcastsListLoadState('loading'));
        dispatch(addPodcastsList(localStorageData.info));
        dispatch(setPodcastsListLoadState('completed'));
      }
    } else {
      await getDataAndSetStoreFromAPI({
        dispatch,
        key: localStorageKey,
        setLocalStorage: true,
      });
    }
  };

  return getData;
};
