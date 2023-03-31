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
  title: string;
  id: string;
  author: string;
  img: string;
};

const StyledLink = styled(Link)`
  all: unset;
`;

const PodcastInfoCard: FC<Props> = ({ title, id, author, img }) => {
  const handleClick = () => {
    console.log('handleClick');
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
