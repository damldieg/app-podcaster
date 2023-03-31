import { Box, Heading, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

const Header: FC<{ isLoading: boolean }> = ({ isLoading }) => (
  <Box
    display={'flex'}
    justifyContent={'space-between'}
    padding={'4'}
    boxShadow={'md'}
    width={'100%'}
  >
    <Heading size={'lg'} color={'blue.400'}>
      Podcaster
    </Heading>
    {isLoading && <Spinner size={'lg'} />}
  </Box>
);

export { Header };
