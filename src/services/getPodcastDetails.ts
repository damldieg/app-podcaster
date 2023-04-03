import { AllOriginResponse } from '@/types/APIResponse.types';
import { PodcastEpisode } from '@/types/Podcaster.types';
import { cleanPodcastDetailsResponse } from '@/utils/cleanPodcastDetailsResponse';
import axios from 'axios';

const CORS_URL = 'https://api.allorigins.win/get?url=';

export const getPodcastDetails = async (
  podcastId: string,
): Promise<PodcastEpisode[]> => {
  const path = `${CORS_URL}${encodeURIComponent(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast%20&entity=podcastEpisode&limit=20`,
  )}`;
  const { data } = await axios.get<AllOriginResponse>(path);
  const cleanedData = cleanPodcastDetailsResponse(JSON.parse(data.contents));
  return cleanedData;
};
