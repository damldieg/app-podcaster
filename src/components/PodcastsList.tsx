import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { PodcastInfoCard } from './PodcastInfoCard';
import { SearchBar } from './SearchBar';
import { PodcastList } from '@/types/Podcaster.types';

const PodcastsList: FC<{ podcastsList: PodcastList }> = ({ podcastsList }) => (
  <Box marginTop={'20'}>
    <SearchBar listLength={podcastsList.length} />
    <Box
      display={'flex'}
      width={'90%'}
      flexWrap={'wrap'}
      padding={'2'}
      margin={'auto'}
      gap={'12'}
      marginTop={'24'}
      justifyContent={'center'}
    >
      {podcastsList.length > 0 ? (
        podcastsList?.map((podcast) => (
          <PodcastInfoCard key={podcast.id} podcast={podcast} />
        ))
      ) : (
        <Box
          width={'50%'}
          height={'100%'}
          margin={'auto'}
          display={'flex'}
          flexDirection={'column'}
          gap={'4'}
          textAlign={'center'}
        >
          <Image
            width={'28'}
            margin={'auto'}
            src="../../public/assets/no-results.png"
            alt={'No results icon'}
          />
          <Text fontWeight={'bold'} fontSize={'2xl'}>
            Not podcasts found
          </Text>
          <Text color={'gray.400'} fontSize={'lg'}>
            Please try again
          </Text>
        </Box>
      )}
    </Box>
  </Box>
);

export { PodcastsList };
