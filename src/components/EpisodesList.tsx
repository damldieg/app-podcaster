import { PodcastEpisode } from '@/types/Podcaster.types';
import {
  Box,
  Card,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';

const EpisodeList: FC<{ episodes: PodcastEpisode[] }> = ({ episodes }) => {
  const { podcastId } = useParams();
  return (
    <Box width={'75%'} marginTop={'20'}>
      <Card
        padding={'4'}
        boxShadow={'lg'}
        marginBottom={'12'}
        variant={'outline'}
      >
        <Text fontWeight={'semibold'} fontSize={'2xl'}>
          Episodes: {episodes.length}
        </Text>
      </Card>
      <Card
        padding={'4'}
        boxShadow={'lg'}
        overflowY={'auto'}
        maxHeight={'2xl'}
        variant={'outline'}
      >
        <Table variant={'striped'}>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Date</Th>
              <Th>Duration</Th>
            </Tr>
          </Thead>
          <Tbody>
            {episodes.length > 0 ? (
              episodes.map((episode) => (
                <Tr key={episode.id}>
                  <Td>
                    <Link
                      as={RouterLink}
                      color={'blue.500'}
                      to={`/podcast/${podcastId}/episode/${episode.id}`}
                    >
                      {episode.title}
                    </Link>
                  </Td>
                  <Td>{episode.date}</Td>
                  <Td>{episode.duration}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td>No episodes found</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Card>
    </Box>
  );
};

export { EpisodeList };
