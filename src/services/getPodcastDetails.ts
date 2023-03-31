import { AllOriginResponse, PodcastDetails } from '@/types/APIResponse.types';
import axios from 'axios';

const CORS_URL = 'https://api.allorigins.win/get?url=';

export const getPodcastDetails = async (
  podcastId: string,
): Promise<PodcastDetails> => {
  const path = `${CORS_URL}${encodeURIComponent(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast%20&entity=podcastEpisode&limit=20`,
  )}`;
  const { data } = await axios.get<AllOriginResponse>(path);
  return JSON.parse(data.contents);
};
