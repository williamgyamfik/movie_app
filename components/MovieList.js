import tmbdApi, { category } from "../api/tmdbApi";
import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const params = {};
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
  }, [props.category, props.type]);

  return (
    <div>
      {movieList?.map((item) => {
        return <MovieCard item={item} category={props.category} />;
      })}
    </div>
  );
};

export default MovieList;
