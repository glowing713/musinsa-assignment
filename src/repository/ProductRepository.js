import AxiosClient from 'repository/clients/AxiosClient';

export default class ProductRepository {
  constructor(instance) {
    this.client = instance || new AxiosClient().instance;
  }

  getNthList(id) {
    return this.client.get(`/goods${id}.json`);
  }
}
