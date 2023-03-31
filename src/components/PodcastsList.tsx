import { PodcastList } from '@/types/Podcaster.types';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { PodcastInfoCard } from './PodcastInfoCard';

const PodcastsList: FC<{ podcastsList: PodcastList }> = ({ podcastsList }) => (
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
      <PodcastInfoCard
        key={podcast.id}
        author={podcast.author}
        title={podcast.title}
        id={podcast.id}
        img={podcast.img}
      />
    ))}
  </Box>
);

export { PodcastsList };
