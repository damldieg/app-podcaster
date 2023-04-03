import { PodcastDetails } from '@/types/Podcaster.types';
import { Card, CardBody, Divider, Image, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const SideInfoCard: FC<{
  podcastDetails: PodcastDetails;
}> = ({ podcastDetails }) => {
  const { author, description, img, title, id } = podcastDetails;
  return (
    <Card
      width={'sm'}
      boxShadow={'lg'}
      height={'fit-content'}
      variant={'outline'}
      marginTop={'20'}
    >
      <CardBody>
        <Link as={RouterLink} to={`/podcast/${id}`}>
          <Image src={img} margin={'auto'} />
        </Link>
        <Divider marginY={'4'} />
        <Link as={RouterLink} to={`/podcast/${id}`}>
          <Text fontSize={'lg'} fontWeight={'semibold'}>
            {title}
          </Text>
        </Link>
        <Link as={RouterLink} to={`/podcast/${id}`}>
          <Text color={'gray.500'} fontStyle={'italic'}>
            by {author}
          </Text>
        </Link>
        {description && (
          <>
            <Divider marginY={'4'} />
            <Text fontWeight={'semibold'}>Description:</Text>
            <Text color={'gray.500'}>{description}</Text>{' '}
          </>
        )}
      </CardBody>
    </Card>
  );
};

export { SideInfoCard };
