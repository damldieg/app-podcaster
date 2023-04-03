import {
  addPodcastDetails,
  setPodcastDetailsLoadState,
} from '@/reducers/podcastDetailsSlice';
import { PodcastDetails, PodcastInfo } from '@/types/Podcaster.types';
import { handleGetPodcastDetailsFromAPI } from '@/useCases/handleGetPodcastDetailsFromAPI';
import { getLocalStorageData } from '@/utils/handleLocalStorage';
import { isDataOutdated } from '@/utils/isDataOutdated';
import { useDispatch } from 'react-redux';

type Output = { getData: (podcast: PodcastInfo) => void };

export const useLoadPodcastDetails = (): Output => {
  const dispatch = useDispatch();

  const getData = async (podcast: PodcastInfo) => {
    const localStorageKey = 'podcastDetails/id:' + podcast.id;
    const localStorageData = getLocalStorageData({ key: localStorageKey });
    if (localStorageData) {
      if (isDataOutdated(localStorageData.date)) {
        await handleGetPodcastDetailsFromAPI({
          dispatch,
          key: localStorageKey,
          setLocalStorage: false,
          podcast,
        });
      } else {
        dispatch(setPodcastDetailsLoadState('loading'));
        dispatch(addPodcastDetails(localStorageData.info as PodcastDetails));
        dispatch(setPodcastDetailsLoadState('completed'));
      }
    } else {
      await handleGetPodcastDetailsFromAPI({
        dispatch,
        key: localStorageKey,
        setLocalStorage: true,
        podcast,
      });
    }
  };

  return { getData };
};
