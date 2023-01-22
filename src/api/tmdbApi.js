import axiosClient from "./axiosClient";

export const categoryType = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (category, id) => {
    const url = categoryType[category] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (category, params) => {
    const url = "search/" + categoryType[category];
    return axiosClient.get(url, params);
  },
  detail: (category, id, params) => {
    const url = categoryType[category] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (category, id) => {
    const url = categoryType[category] + `/${id}/credits`;
    return axiosClient.get(url, { params: {} });
  },
  similar: (category, id) => {
    const url = categoryType[category] + `/${id}/similar`;
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
