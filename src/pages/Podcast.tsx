import { RootState } from '@/store/PodcasterStore';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Podcast = () => {
  const { podcastDetailsLoadState, podcastDetails } = useSelector(
    (state: RootState) => state.podcastDetails,
  );

  useEffect(() => {
    console.log(
      '🚀 ~ file: Podcast.tsx:16 ~ Podcast ~ podcastDetailsLoadState:',
      podcastDetailsLoadState,
    );
    console.log(
      '🚀 ~ file: Podcast.tsx:7 ~ Podcast ~ podcastDetails:',
      podcastDetails,
    );
  }, [podcastDetailsLoadState]);
  return (
    <>
      <h1>PODCAST LIST</h1>
    </>
  );
};

export { Podcast };
