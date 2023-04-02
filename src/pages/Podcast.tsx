import { EpisodeList } from '@/components/EpisodesList';
import { SideInfoCard } from '@/components/SideInfoCard';
import { RootState } from '@/store/PodcasterStore';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Podcast = () => {
  const { podcastDetailsLoadState, podcastDetails } = useSelector(
    (state: RootState) => state.podcastDetails,
  );

  return (
    <Box padding={'4'} display={'flex'} gap={'20'}>
      {podcastDetailsLoadState === 'completed' && (
        <>
          <SideInfoCard podcastDetails={podcastDetails} />
          <EpisodeList episodes={podcastDetails.episodes} />
        </>
      )}
    </Box>
  );
};

export { Podcast };
