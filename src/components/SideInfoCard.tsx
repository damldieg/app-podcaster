import { PodcastDetails } from '@/types/Podcaster.types';
import { Card, CardBody, Divider, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

const SideInfoCard: FC<{ podcastDetails: PodcastDetails }> = ({
  podcastDetails,
}) => {
  const { author, description, img, title } = podcastDetails;
  return (
    <Card width={'sm'} boxShadow={'lg'} height={'fit-content'}>
      <CardBody>
        <Image src={img} margin={'auto'} />
        <Divider marginY={'4'} />
        <Text fontSize={'lg'} fontWeight={'semibold'}>
          {title}
        </Text>
        <Text color={'gray.500'} fontStyle={'italic'}>
          by {author}
        </Text>
        {description && (
          <>
            <Divider marginY={'4'} />
            <Text fontWeight={'semibold'} marginBottom={'2'}>
              Description:
            </Text>
            <Text color={'gray.500'}>{description}</Text>{' '}
          </>
        )}
      </CardBody>
    </Card>
  );
};

export { SideInfoCard };
