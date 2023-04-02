export type PodcastInfo = {
  title: string;
  author: string;
  id: string;
  img: string;
};

export type PodcastList = PodcastInfo[];

export type LocalStoragePodcastList = {
  date: Date;
  info: PodcastList;
};
