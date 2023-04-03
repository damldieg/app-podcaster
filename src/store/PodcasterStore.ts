import { combineReducers, configureStore } from '@reduxjs/toolkit';
import podcastsListReducer from '@/reducers/podcastsListSlice';
import podcastDetailsReducer from '@/reducers/podcastDetailsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  podcastsList: podcastsListReducer,
  podcastDetails: podcastDetailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
