import { ItunesPodcastResponse } from '@/types/APIResponse.types';
import { PodcastList } from '@/types/Podcaster.types';

export const cleanPodcastsListResponse = (
  data: ItunesPodcastResponse,
): PodcastList => {
  const podcastList = data.feed.entry.map((podcast) => {
    return {
      title: podcast['im:name'].label,
      author: podcast['im:artist'].label,
      id: podcast.id.attributes['im:id'],
      img: podcast['im:image'][2].label,
    };
  });

  return podcastList;
};
