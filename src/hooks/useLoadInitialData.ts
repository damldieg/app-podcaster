import {
  addPodcastsList,
  setPodcastsListLoadState,
} from '@/reducers/podcastsListSlice';
import { getPodcastsList } from '@/services/getPodcastsList';
import { cleanPodcastsListResponse } from '@/utils/cleanPodcastsListResponse';
import { useDispatch } from 'react-redux';

export const useLoadInitialData = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    dispatch(setPodcastsListLoadState('loading'));
    try {
      const data = await getPodcastsList();
      const cleanedData = cleanPodcastsListResponse(data);
      dispatch(addPodcastsList(cleanedData));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setPodcastsListLoadState('completed'));
    }
  };

  return getData;
};
