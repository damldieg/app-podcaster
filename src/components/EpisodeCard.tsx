import { PodcastEpisode } from '@/types/Podcaster.types';
import { Card, CardBody, Divider, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Paragraph from './Paragraph';
import styled from 'styled-components';

const StyledAudio = styled.audio`
  width: 100%;
`;

const EpisodeCard: FC<{ episode: PodcastEpisode }> = ({ episode }) => {
  return (
    <Card
      width={'75%'}
      boxShadow={'lg'}
      variant={'outline'}
      height={'fit-content'}
      marginTop={'20'}
    >
      <CardBody>
        <Text fontWeight={'bold'} fontSize={'2xl'} marginBottom={'4'}>
          {episode.title}
        </Text>

        <Paragraph text={episode.description} />

        <Divider marginY={'8'} />

        <StyledAudio controls src={episode.track} />
      </CardBody>
    </Card>
  );
};

export { EpisodeCard };
