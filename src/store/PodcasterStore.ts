import { configureStore } from '@reduxjs/toolkit';
import podcastsListReducer from '@/reducers/podcastsListSlice';
import podcastDetailsReducer from '@/reducers/podcastDetailsSlice';

const store = configureStore({
  reducer: {
    podcastsList: podcastsListReducer,
    podcastDetails: podcastDetailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
