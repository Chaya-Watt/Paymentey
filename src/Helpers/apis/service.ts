import Config from 'react-native-config';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

axios.defaults.baseURL = Config.BASE_API_URL;

const service = async <T, D>({
  method,
  url,
  headers,
  data,
}: AxiosRequestConfig<D>): Promise<AxiosResponse<T, D>> => {
  const response = await axios({
    method,
    url,
    headers,
    data,
  });

  return response;
};

export default service;
