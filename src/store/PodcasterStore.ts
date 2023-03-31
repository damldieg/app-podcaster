import { configureStore } from '@reduxjs/toolkit';
import podcastsListReducer from '@/reducers/podcastsListSlice';

const store = configureStore({
  reducer: {
    podcastsList: podcastsListReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
