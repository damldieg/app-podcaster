import { PodcastDetailsResponse } from '@/types/APIResponse.types';
import { PodcastEpisode } from '@/types/Podcaster.types';

interface Params {
  apiData: PodcastDetailsResponse;
}

export const cleanPodcastDetailsResponse = ({
  apiData,
}: Params): PodcastEpisode[] => {
  const episodes: PodcastEpisode[] = apiData.results
    ?.slice(1)
    .map((episode) => {
      return {
        title: episode.trackName,
        description: episode.description,
        date: new Date(episode.releaseDate).toLocaleDateString('en-GB'),
        duration: new Date(episode.trackTimeMillis).toLocaleTimeString(
          'en-GB',
          {
            hour: '2-digit',
            minute: '2-digit',
          },
        ),
        track: episode.previewUrl,
        id: episode.trackId.toString(),
      };
    });

  return episodes;
};
