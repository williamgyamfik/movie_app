import axiosTmdbApi from "./axiosTmdbApi";

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
};

export default tmdbApi;
