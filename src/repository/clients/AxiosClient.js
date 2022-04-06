import axios from 'axios';

export default class AxiosClient {
  constructor(url) {
    const baseURL = url || 'https://static.msscdn.net/musinsaUI/homework/data/';
    this.instance = axios.create({
      baseURL,
    });
  }
}
