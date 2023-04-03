import {
  addPodcastDetails,
  setPodcastDetailsLoadState,
} from '@/reducers/podcastDetailsSlice';
import { getPodcastDetails } from '@/services/getPodcastDetails';
import { PodcastDetails, PodcastInfo } from '@/types/Podcaster.types';
import { RequestState } from '@/types/RequestState';
import { setLocalStorageData } from '@/utils/handleLocalStorage';
import { Dispatch, PayloadAction } from '@reduxjs/toolkit';

interface Params {
  dispatch: Dispatch<PayloadAction<RequestState | PodcastDetails>>;
  key: string;
  setLocalStorage: boolean;
  podcast: PodcastInfo;
}

export const handleGetPodcastDetailsFromAPI = async ({
  dispatch,
  key,
  setLocalStorage,
  podcast,
}: Params) => {
  dispatch(setPodcastDetailsLoadState('loading'));
  try {
    const data = await getPodcastDetails(podcast.id);
    const podcastDetails: PodcastDetails = {
      ...podcast,
      episodes: data,
    };
    dispatch(addPodcastDetails(podcastDetails));
    setLocalStorage && setLocalStorageData({ key, data: podcastDetails });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setPodcastDetailsLoadState('completed'));
  }
};
