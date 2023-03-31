import {
  AllOriginResponse,
  ItunesPodcastResponse,
} from '@/types/APIResponse.types';
import axios from 'axios';

const CORS_URL = 'https://api.allorigins.win/get?url=';

export const getPodcastsList = async (): Promise<ItunesPodcastResponse> => {
  const path = `${CORS_URL}${encodeURIComponent(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  )}`;
  const { data } = await axios.get<AllOriginResponse>(path);
  return JSON.parse(data.contents);
};
