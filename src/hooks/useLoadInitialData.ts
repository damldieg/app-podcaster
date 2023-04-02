import {
  addPodcastsList,
  setPodcastsListLoadState,
} from '@/reducers/podcastsListSlice';
import { PodcastList } from '@/types/Podcaster.types';
import { handleGetPodcastsListFromAPI } from '@/useCases/handleGetPodcastsListFromAPI';
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
        await handleGetPodcastsListFromAPI({
          dispatch,
          key: localStorageKey,
          setLocalStorage: false,
        });
      } else {
        dispatch(setPodcastsListLoadState('loading'));
        dispatch(addPodcastsList(localStorageData.info as PodcastList));
        dispatch(setPodcastsListLoadState('completed'));
      }
    } else {
      await handleGetPodcastsListFromAPI({
        dispatch,
        key: localStorageKey,
        setLocalStorage: true,
      });
    }
  };

  return getData;
};
