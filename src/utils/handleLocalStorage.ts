import {
  LocalStorageData,
  PodcastDetails,
  PodcastList,
} from '@/types/Podcaster.types';

interface GetLocalStorageDataParams {
  key: string;
}

interface SetLocalStorageDataParams extends GetLocalStorageDataParams {
  data: PodcastList | PodcastDetails;
}

export const getLocalStorageData = ({
  key,
}: GetLocalStorageDataParams): LocalStorageData => {
  const data = localStorage.getItem(key);
  const parsedData = JSON.parse(data) as LocalStorageData;
  return parsedData;
};

export const setLocalStorageData = ({
  key,
  data,
}: SetLocalStorageDataParams) => {
  const requestDate = new Date();
  const localStorageData: LocalStorageData = {
    date: requestDate,
    info: data,
  };
  localStorage.setItem(key, JSON.stringify(localStorageData));
};
