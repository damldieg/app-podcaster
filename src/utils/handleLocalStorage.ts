import { LocalStoragePodcastList, PodcastList } from '@/types/Podcaster.types';

interface GetLocalStorageDataParams {
  key: string;
}

interface SetLocalStorageDataParams extends GetLocalStorageDataParams {
  data: PodcastList;
}

export const getLocalStorageData = ({
  key,
}: GetLocalStorageDataParams): LocalStoragePodcastList => {
  const data = localStorage.getItem(key);
  const parsedData = JSON.parse(data) as LocalStoragePodcastList;
  return parsedData;
};

export const setLocalStorageData = ({
  key,
  data,
}: SetLocalStorageDataParams) => {
  const requestDate = new Date();
  const localStorageData: LocalStoragePodcastList = {
    date: requestDate,
    info: data,
  };
  localStorage.setItem(key, JSON.stringify(localStorageData));
};
