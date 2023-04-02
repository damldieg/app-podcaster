import { filterPodcastsList } from '@/reducers/podcastsListSlice';
import { Badge, Box, Input } from '@chakra-ui/react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

const SearchBar: FC<{ listLength: number }> = ({ listLength }) => {
  const dispatch = useDispatch();

  const handleOnChange = (value: string) => {
    dispatch(filterPodcastsList(value));
  };

  return (
    <Box
      display={'flex'}
      gap={'4'}
      alignItems={'center'}
      padding={'8'}
      justifyContent={'flex-end'}
    >
      <Badge color={'white'} backgroundColor={'blue.400'}>
        {listLength}
      </Badge>
      <Input
        type="search"
        onChange={(e) => handleOnChange(e.target.value)}
        placeholder="Filter podcasts..."
        size={'sm'}
        width={'72'}
      />
    </Box>
  );
};

export { SearchBar };
