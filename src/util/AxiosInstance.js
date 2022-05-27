import axios from 'axios';
import { API_BASE_URL } from '../config/config';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/josn';

export const AxiosInstance = axios.create({ baseURL: API_BASE_URL, });