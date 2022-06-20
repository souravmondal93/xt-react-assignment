import axios from 'axios';

import { CONFIG } from '../config';

export const appAxiosInstance = axios.create({
  baseURL: CONFIG.BASE_API_URL,
  withCredentials: true,
});
