import apisauce from "apisauce";
import axios from 'axios'
import axiosRetry from "axios-retry";

import { fetchMock } from "./mockData/mockData";



const create = (baseURL = "") => {
  const customAxiosInstance = axios.create({ baseURL: baseURL })
  const api = apisauce.create({
    axiosInstance: customAxiosInstance,
    // baseURL: baseURL,
    timeout: 30000,
  });

  api.addRequestTransform((request) => {
    if (request.method === "get") {
      request.params = request.params || {};
      request.params.timestamp = Date.now();
    }
  });

  const setAuthorization = (token) => {
    api.setHeader("Authorization", `Bearer ${token}`);
  };

  const removeAuthorization = () => {
    delete api.headers.Authorization;
  };

  return {
    ...api,
    ...fetchMock(api),
    setAuthorization,
    removeAuthorization
  };
};

export const API = {
  create
};
