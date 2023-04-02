export type PodcastInfo = {
  title: string;
  author: string;
  id: string;
  img: string;
  description: string;
};

export type PodcastList = PodcastInfo[];

export type LocalStorageData = {
  date: Date;
  info: PodcastList | PodcastDetails;
};

export type PodcastDetails = PodcastInfo & {
  episodes: PodcastEpisode[];
};

export type PodcastEpisode = {
  title: string;
  description: string;
  date: Date;
  duration: number;
  track: string;
  id: number;
};
