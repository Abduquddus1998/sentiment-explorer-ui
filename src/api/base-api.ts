import axios from "axios";

export class BaseApi {
  instance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    withCredentials: true,
  });

  defaultHeaders = {
    "Content-Type": "application/json",
  };

  getHeader(withAuth: boolean): Object | any {
    const token = localStorage.getItem("token");

    return {
      ...this.defaultHeaders,
      ...(withAuth && { Authorization: `Bearer ${token}` }),
    };
  }

  async request(
    url: string,
    method: string,
    data: Object,
    withAuth: boolean = false
  ): Promise<any> {
    const response = await this.instance
      .request({
        url,
        method,
        data,
        headers: this.getHeader(withAuth),
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    return response.data;
  }
}

const baseApi = new BaseApi();

export default baseApi;
