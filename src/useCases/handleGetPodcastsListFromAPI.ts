import {
  addPodcastsList,
  setPodcastsListLoadState,
} from '@/reducers/podcastsListSlice';
import { getPodcastsList } from '@/services/getPodcastsList';
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
    dispatch(addPodcastsList(data));
    setLocalStorage && setLocalStorageData({ key, data: data });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setPodcastsListLoadState('completed'));
  }
};
