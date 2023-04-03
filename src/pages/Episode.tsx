import { EpisodeCard } from '@/components/EpisodeCard';
import { Loading } from '@/components/Loading';
import { SideInfoCard } from '@/components/SideInfoCard';
import { RootState } from '@/store/PodcasterStore';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Episode = () => {
  const { podcastDetailsLoadState, podcastDetails } = useSelector(
    (state: RootState) => state.podcastDetails,
  );
  const { episodeId } = useParams();
  const episode = podcastDetails.episodes.filter(
    (episode) => episodeId === episode.id,
  );

  return (
    <Box padding={'4'} display={'flex'} gap={'20'}>
      {podcastDetailsLoadState === 'loading' ? (
        <Loading />
      ) : (
        <>
          <SideInfoCard podcastDetails={podcastDetails} />
          <EpisodeCard episode={episode[0]} />
        </>
      )}
    </Box>
  );
};

export { Episode };
