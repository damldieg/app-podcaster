import axios from 'axios';
interface HttpRequester {
  get: <T>(path: RequestHost) => Promise<AxiosClient<T>>;
}

export type RequestConfig = Record<string, unknown> & {
  headers: RequestHeaders;
};

export type RequestHeaders = Record<string, never>;

interface AxiosClient<T> {
  data: T;
}

export type RequestHost = string;

const client = axios.create({});

const get: HttpRequester['get'] = <T>(path: string): Promise<AxiosClient<T>> =>
  client.get(path);

export const httpService = () => ({
  get,
});
