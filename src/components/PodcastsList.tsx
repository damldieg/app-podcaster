import { PodcastList } from '@/types/Podcaster.types';
import { Badge, Box, Input } from '@chakra-ui/react';
import { FC } from 'react';
import { PodcastInfoCard } from './PodcastInfoCard';
import { useDispatch } from 'react-redux';
import { filterPodcastsList } from '@/reducers/podcastsListSlice';

const PodcastsList: FC<{ podcastsList: PodcastList }> = ({ podcastsList }) => {
  const dispatch = useDispatch();

  const handleOnChange = (value: string) => {
    dispatch(filterPodcastsList(value));
  };
  return (
    <Box>
      <Box
        display={'flex'}
        gap={'4'}
        alignItems={'center'}
        padding={'8'}
        justifyContent={'flex-end'}
      >
        <Badge color={'white'} backgroundColor={'blue.400'}>
          {podcastsList.length}
        </Badge>
        <Input
          type="search"
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder="Filter podcasts..."
          size={'sm'}
          width={'72'}
        />
      </Box>
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
};

export { PodcastsList };
