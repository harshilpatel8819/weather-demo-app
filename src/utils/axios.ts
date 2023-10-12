import axios from "axios";
import { API_KEY } from "../constants";

const instance = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  timeout: 5000,
});

export const getCall = async (url: string, days?: number, city?: string) => {
  return await instance.get(url, {
    params: { key: API_KEY, q: city, days: days },
  });
};
