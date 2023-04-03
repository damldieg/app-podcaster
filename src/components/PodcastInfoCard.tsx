import { useLoadPodcastDetails } from '@/hooks/useLoadPodcastDetails';
import { PodcastInfo } from '@/types/Podcaster.types';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  podcast: PodcastInfo;
};

const PodcastInfoCard: FC<Props> = ({ podcast }) => {
  const { author, id, img, title } = podcast;
  const getData = useLoadPodcastDetails();

  const handleClick = () => {
    getData(podcast);
  };

  return (
    <Card
      variant={'outline'}
      width={'20%'}
      marginBottom={'36'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      position={'relative'}
      boxShadow={'lg'}
      _hover={{
        cursor: 'pointer',
        boxShadow: '2xl',
      }}
    >
      <Link
        as={RouterLink}
        to={`/podcast/${id}`}
        onClick={handleClick}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <CardHeader>
          <Image
            position={'absolute'}
            top={'-20'}
            right={'0'}
            left={'0'}
            margin={'auto'}
            borderRadius="full"
            boxSize="150px"
            src={img}
            alt="Dan Abramov"
          />
        </CardHeader>
        <CardBody textAlign={'center'} paddingTop={'8'}>
          <Box textAlign={'center'} paddingTop={'8'}>
            <Heading size={'md'}>{title}</Heading>
            <Text marginTop={'4'} color={'gray.500'} fontSize={'lg'}>
              Author: {author}
            </Text>
          </Box>
        </CardBody>
      </Link>
    </Card>
  );
};

export { PodcastInfoCard };
