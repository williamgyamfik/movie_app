const movieBackDrop = {
  baseUrl: "https://image.tmdb.org/t/p/",
  imageW300: (imagePath) => `https://image.tmdb.org/t/p/w300/${imagePath}`,
  imageW500: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
  imageW185: (imagePath) => `https://image.tmdb.org/t/p/w185/${imagePath}`,
  originalImage: (imagePath) =>
    `https://image.tmdb.org/t/p/original/${imagePath}`,
};

export default movieBackDrop;
