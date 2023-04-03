import { Header } from '@/components/Header';
import { PodcastsList } from '@/components/PodcastsList';
import { useLoadInitialData } from '@/hooks/useLoadInitialData';
import { RootState } from '@/store/PodcasterStore';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Podcast } from './Podcast';
import { Episode } from './Episode';
import { Loading } from '@/components/Loading';

export const Home = () => {
  const { filteredPodcastsList, podcastsListLoadState } = useSelector(
    (state: RootState) => state.podcastsList,
  );
  const { podcastDetailsLoadState } = useSelector(
    (state: RootState) => state.podcastDetails,
  );
  const isLoading = [podcastsListLoadState, podcastDetailsLoadState].some(
    (value) => value === 'loading',
  );

  const getData = useLoadInitialData();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header isLoading={isLoading} />
      <Routes>
        <Route
          path="/"
          element={
            podcastsListLoadState === 'loading' ? (
              <Loading />
            ) : (
              <PodcastsList podcastsList={filteredPodcastsList} />
            )
          }
        />
        <Route path="/podcast/:podcastId" Component={Podcast} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          Component={Episode}
        />
      </Routes>
    </>
  );
};
