import { PodcastDetailsResponse } from '@/types/APIResponse.types';
import {
  PodcastDetails,
  PodcastEpisode,
  PodcastInfo,
} from '@/types/Podcaster.types';

interface Params {
  apiData: PodcastDetailsResponse;
  podcastInfo: PodcastInfo;
}

export const cleanPodcastDetailsResponse = ({
  apiData,
  podcastInfo,
}: Params): PodcastDetails => {
  const episodes: PodcastEpisode[] = apiData.results.slice(1).map((episode) => {
    return {
      title: episode.trackName,
      description: episode.description,
      date: new Date(episode.releaseDate).toLocaleDateString('en-GB'),
      duration: new Date(episode.trackTimeMillis).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      track: episode.previewUrl,
      id: episode.trackId.toString(),
    };
  });

  return {
    ...podcastInfo,
    episodes,
  };
};
