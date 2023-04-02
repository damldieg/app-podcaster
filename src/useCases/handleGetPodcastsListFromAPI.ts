import {
  addPodcastsList,
  setPodcastsListLoadState,
} from '@/reducers/podcastsListSlice';
import { getPodcastsList } from '@/services/getPodcastsList';
import { cleanPodcastsListResponse } from '../utils/cleanPodcastsListResponse';
import { setLocalStorageData } from '../utils/handleLocalStorage';
import { Dispatch } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { RequestState } from '@/types/RequestState';
import { PodcastList } from '@/types/Podcaster.types';

interface Params {
  dispatch: Dispatch<PayloadAction<RequestState | PodcastList>>;
  key: string;
  setLocalStorage: boolean;
}

export const handleGetPodcastsListFromAPI = async ({
  dispatch,
  key,
  setLocalStorage,
}: Params) => {
  dispatch(setPodcastsListLoadState('loading'));
  try {
    const data = await getPodcastsList();
    const cleanedData = cleanPodcastsListResponse(data);
    dispatch(addPodcastsList(cleanedData as PodcastList));
    setLocalStorage && setLocalStorageData({ key, data: cleanedData });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setPodcastsListLoadState('completed'));
  }
};
