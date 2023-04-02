import { PodcastList } from '@/types/Podcaster.types';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { PodcastInfoCard } from './PodcastInfoCard';
import { SearchBar } from './SearchBar';

const PodcastsList: FC<{ podcastsList: PodcastList }> = ({ podcastsList }) => (
  <Box>
    <SearchBar listLength={podcastsList.length} />
    <Box
      display={'flex'}
      width={'90%'}
      flexWrap={'wrap'}
      padding={'2'}
      margin={'auto'}
      gap={'12'}
      marginTop={'32'}
      justifyContent={'center'}
    >
      {podcastsList?.map((podcast) => (
        <PodcastInfoCard key={podcast.id} podcast={podcast} />
      ))}
    </Box>
  </Box>
);

export { PodcastsList };
