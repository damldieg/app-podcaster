import { PodcastList } from '@/types/Podcaster.types';
import { RequestState } from '@/types/RequestState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const podcastsListSlice = createSlice({
  name: 'podcastsList',
  initialState: {
    podcastsList: [],
    podcastsListLoadState: 'idle' as RequestState,
  },
  reducers: {
    addPodcastsList: (state, action: PayloadAction<PodcastList>) => {
      return { ...state, podcastsList: action.payload };
    },
    setPodcastsListLoadState: (state, action: PayloadAction<RequestState>) => {
      return { ...state, podcastsListLoadState: action.payload };
    },
  },
});

export const { addPodcastsList, setPodcastsListLoadState } =
  podcastsListSlice.actions;

export default podcastsListSlice.reducer;
