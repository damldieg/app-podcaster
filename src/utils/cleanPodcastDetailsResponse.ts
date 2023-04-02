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
  const episodes: PodcastEpisode[] = apiData.results.map((episode) => {
    return {
      title: episode.trackName,
      description: episode.description,
      date: new Date(episode.releaseDate),
      duration: episode.trackTimeMillis,
      track: episode.previewUrl,
      id: episode.trackId,
    };
  });

  return {
    ...podcastInfo,
    episodes,
  };
};
