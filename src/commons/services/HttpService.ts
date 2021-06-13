import axios from "axios";

export default class HttpService {
  async get<T>(resource: string): Promise<T> {
    const response = await axios.get(resource);
    return response.data;
  }
}
