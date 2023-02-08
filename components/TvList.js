import tmbdApi, { category } from "../api/tmdbApi";
import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

const TvList = (props) => {
  const [tvList, setTvList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getTvList = async () => {
      let params = { page };
      let response;

      try {
        response = await tmbdApi.getTvList(props.type, { params });

        setTvList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getTvList();
  }, [props.type, props.type, page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const columns = 6;
  const totalPages = Math.ceil(tvList.length / columns);

  const startIndex = (page - 1) * columns;
  const currentMovies = tvList.slice(startIndex, startIndex + columns);

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
                return <MovieCard key={item.id} item={item} />;
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

export default TvList;
