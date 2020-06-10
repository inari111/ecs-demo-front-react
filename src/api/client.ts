// AxiosInstance, AxiosResponse はAxiosライブラリで使用する型情報
import axios, { AxiosInstance, AxiosResponse } from 'axios';
// jsonデータのキー名をスネークケースからキャメルケースに変換
// 今回のサンプル実装では使用していない
import camelCaseKeys from 'camelcase-keys';

let client: AxiosInstance;

export default client = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  }
});

client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const data = camelCaseKeys(response.data);
    return { ...response.data, data };
  }
);