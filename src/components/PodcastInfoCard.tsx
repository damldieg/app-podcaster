import { useLoadPodcastDetails } from '@/hooks/useLoadPodcastDetails';
import { PodcastInfo } from '@/types/Podcaster.types';
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  podcast: PodcastInfo;
};

const StyledLink = styled(Link)`
  all: unset;
`;

const PodcastInfoCard: FC<Props> = ({ podcast }) => {
  const { author, id, img, title } = podcast;
  const getData = useLoadPodcastDetails();

  const handleClick = () => {
    getData(podcast);
  };

  return (
    <Card
      width={'20%'}
      marginBottom={'36'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      position={'relative'}
      boxShadow={'lg'}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <StyledLink to={`/podcast/${id}`} onClick={handleClick}>
        <CardHeader>
          <Image
            position={'absolute'}
            top={'-24'}
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
          <Heading size={'md'}>{title}</Heading>
          <Text marginTop={'4'} color={'gray.500'} fontSize={'lg'}>
            Author: {author}
          </Text>
        </CardBody>
      </StyledLink>
    </Card>
  );
};

export { PodcastInfoCard };
