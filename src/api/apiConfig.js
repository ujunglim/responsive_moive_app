const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "c783ac1769120ad640327530ba6d4ccf",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
