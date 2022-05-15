import Config from 'react-native-config';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

axios.defaults.baseURL = Config.BASE_API_URL;

const service = async <T, D>({
  method,
  url,
  headers,
  data,
}: AxiosRequestConfig<D>): Promise<
  AxiosResponse<T | unknown, D> | undefined
> => {
  try {
    const response = await axios({
      method,
      url,
      headers,
      data,
    });

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      return error as undefined;
    }
  }
};

export default service;
