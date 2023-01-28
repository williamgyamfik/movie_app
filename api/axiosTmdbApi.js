import axios from "axios";
import Qs from "qs";

const apiKey = "2563582b1f5a10c6a86c15ea975da109"; //use process.env here

const axiosTmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { "content-Type": "application/json/" },
  paramsSerializer: {
    serialize: (params) =>
      Qs.stringify({ ...params, api_key: apiKey }, { arrayFormat: "brackets" }),
  },
});

export default axiosTmdbApi;
