import { Header } from '@/components/Header';
import { PodcastsList } from '@/components/PodcastsList';
import { useLoadInitialData } from '@/hooks/useLoadInitialData';
import { RootState } from '@/store/PodcasterStore';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Podcast } from './Podcast';

export const Home = () => {
  const { podcastsList, podcastsListLoadState } = useSelector(
    (state: RootState) => state.podcastsList,
  );
  const getData = useLoadInitialData();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header isLoading={podcastsListLoadState === 'loading'} />
      <Routes>
        <Route
          path="/"
          element={
            podcastsListLoadState === 'completed' ? (
              <PodcastsList podcastsList={podcastsList} />
            ) : null
          }
        />
        <Route path="/podcast/:podcastId" Component={Podcast} />
      </Routes>
    </>
  );
};