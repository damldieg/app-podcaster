import { PodcastEpisode } from '@/types/Podcaster.types';
import { Card, CardBody, Divider, Text } from '@chakra-ui/react';
import { FC } from 'react';

const EpisodeCard: FC<{ episode: PodcastEpisode }> = ({ episode }) => {
  return (
    <Card width={'75%'} boxShadow={'lg'}>
      <CardBody>
        <Text fontWeight={'bold'} fontSize={'2xl'} marginBottom={'4'}>
          {episode.title}
        </Text>
        <Text>{episode.description}</Text>
        <Divider marginY={'8'} />
        <audio controls src={episode.track} />
      </CardBody>
    </Card>
  );
};

export { EpisodeCard };
