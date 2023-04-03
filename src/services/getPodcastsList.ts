import { AllOriginResponse } from '@/types/APIResponse.types';
import { PodcastList } from '@/types/Podcaster.types';
import { cleanPodcastsListResponse } from '@/utils/cleanPodcastsListResponse';
import axios from 'axios';

const CORS_URL = 'https://api.allorigins.win/get?url=';

export const getPodcastsList = async (): Promise<PodcastList> => {
  const path = `${CORS_URL}${encodeURIComponent(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  )}`;
  const { data } = await axios.get<AllOriginResponse>(path);
  const cleanedData = cleanPodcastsListResponse(JSON.parse(data.contents));
  return cleanedData;
};
