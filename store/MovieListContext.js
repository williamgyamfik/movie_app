import { useReducer } from "react";
import React from "react";
import { type } from "../api/tmdbApi";
import tmdbApi from "../api/tmdbApi";

export const MovieListContext = React.createContext({
  movieListArray: [],
  viewMore: () => {},
});

const initialMovieState = {
  movieList: [],
};

const movieReducer = (state, action) => {
  let response;
  return async () => {
    if (action.type === "view_more") {
      response = await tmdbApi.getMovielist(type.popular);
    } else {
      response = await tmdbApi.getTvList(type.popular);
    }
    state.initialMovieState.push(response);
    const updatedMovieList = [
      ...state.initialMovieState,
      ...action.initialMovieState.results,
    ];
    return {
      movieListArray: updatedMovieList,
    };
  };
};

const FetchMovies = (props) => {
  const [movieItem, dispatch] = useReducer(movieReducer, initialMovieState);

  const viewMorehandler = () => {
    console.log("clicked");
    dispatch({ type: "view_more" });
  };

  const movieContext = {
    movieList: movieItem.movieListArray,
    viewMore: viewMorehandler,
  };

  return (
    <MovieListContext.Provider value={movieContext}>
      {props.children}
    </MovieListContext.Provider>
  );
};

export default FetchMovies;
