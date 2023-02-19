import axiosTmdbApi from "./axiosTmdbApi";
import { api_key } from "./axiosTmdbApi";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const type = {
  top_rated: "top_rated",
  popular: "popular",
};

const tmdbApi = {
  getTvList: (tvType, params) => {
    const url = "tv/" + type[tvType];
    return axiosTmdbApi.get(url, params);
  },
  getMovielist: (movieType, params) => {
    const url = "movie/" + type[movieType];
    return axiosTmdbApi.get(url, params);
  },

  getDetails: (cat, id) => {
    const url = category[cat] + "/" + id + "?api_key=" + api_key;
    return axiosTmdbApi.get(url);
  },
  getCastList: (cat, id) => {
    const url = category[cat] + "/" + id + "/credits?" + "api_key=" + api_key;
    return axiosTmdbApi.get(url);
  },
  getGallery: (cat, id) => {
    const url = category[cat] + "/" + id + "/images?" + "api_key=" + api_key;
    return axiosTmdbApi.get(url);
  },
  getMovies: (cat, id) => {
    const url = category[cat] + id + "videos";
    return axiosTmdbApi.get(url);
  },
};

export default tmdbApi;
