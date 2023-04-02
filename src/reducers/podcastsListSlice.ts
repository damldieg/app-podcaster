import { PodcastInfo, PodcastList } from '@/types/Podcaster.types';
import { RequestState } from '@/types/RequestState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const podcastsListSlice = createSlice({
  name: 'podcastsList',
  initialState: {
    podcastsListLoadState: 'idle' as RequestState,
    podcastsList: [] as PodcastList,
    filteredPodcastsList: [] as PodcastList,
  },
  reducers: {
    addPodcastsList: (state, action: PayloadAction<PodcastList>) => {
      return {
        ...state,
        podcastsList: action.payload,
        filteredPodcastsList: action.payload,
      };
    },
    setPodcastsListLoadState: (state, action: PayloadAction<RequestState>) => {
      return { ...state, podcastsListLoadState: action.payload };
    },
    filterPodcastsList: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        filteredPodcastsList: state.podcastsList.filter(
          (podcast: PodcastInfo) => {
            return (
              podcast.title
                .toLocaleLowerCase()
                .includes(action.payload.toLocaleLowerCase()) ||
              podcast.author
                .toLocaleLowerCase()
                .includes(action.payload.toLocaleLowerCase())
            );
          },
        ),
      };
    },
  },
});

export const { addPodcastsList, setPodcastsListLoadState, filterPodcastsList } =
  podcastsListSlice.actions;

export default podcastsListSlice.reducer;
