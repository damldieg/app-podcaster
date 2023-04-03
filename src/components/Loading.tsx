import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Loading: FC = () => (
  <Box
    height={'70%'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    marginTop={'80'}
  >
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="#4299e1"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  </Box>
);
