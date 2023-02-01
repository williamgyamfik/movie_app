import tmbdApi from "../api/tmdbApi";
import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getList = async () => {
      let params = { page };
      let response;

      try {
        if (props.category === "tv") {
          response = await tmbdApi.getTvList(props.type, { params });
        } else {
          response = await tmbdApi.getMovielist(props.type, { params });
        }
        setMovieList(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, [props.category, props.type, page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const columns = 6;
  const totalPages = Math.ceil(movieList.length / columns);
  const startIndex = (page - 1) * columns;
  const currentMovies = movieList.slice(startIndex, startIndex + columns);

  return (
    <div className="container-fluid d-flex justify-content-center p-5">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center ">
              {currentMovies.map((item, i) => {
                return <MovieCard key={i} item={item} />;
              })}
            </div>
          </div>
        </div>
        {page > 1 && (
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePreviousPage}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
        )}
        {page < totalPages && (
          <button
            className="carousel-control-next "
            type="button"
            onClick={handleNextPage}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Next</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
