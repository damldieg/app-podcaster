import { Box, Heading, Link, Spinner } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Header: FC<{ isLoading: boolean }> = ({ isLoading }) => (
  <Box
    display={'flex'}
    justifyContent={'space-between'}
    padding={'4'}
    boxShadow={'md'}
    width={'100%'}
    position={'fixed'}
    top={0}
    zIndex={'popover'}
    backgroundColor={'white'}
  >
    <Link
      as={RouterLink}
      to={'/'}
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Heading size={'lg'} color={'blue.400'}>
        Podcaster
      </Heading>
    </Link>
    {isLoading && (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    )}
  </Box>
);

export { Header };
