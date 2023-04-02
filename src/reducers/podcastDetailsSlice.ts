import { PodcastDetails } from '@/types/Podcaster.types';
import { RequestState } from '@/types/RequestState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const podcastDetailsSlice = createSlice({
  name: 'podcastDetails',
  initialState: {
    podcastDetailsLoadState: 'idle' as RequestState,
    podcastDetails: {} as PodcastDetails,
  },
  reducers: {
    addPodcastDetails: (state, action: PayloadAction<PodcastDetails>) => {
      return { ...state, podcastDetails: action.payload };
    },
    setPodcastDetailsLoadState: (
      state,
      action: PayloadAction<RequestState>,
    ) => {
      return { ...state, podcastDetailsLoadState: action.payload };
    },
  },
});

export const { addPodcastDetails, setPodcastDetailsLoadState } =
  podcastDetailsSlice.actions;

export default podcastDetailsSlice.reducer;
