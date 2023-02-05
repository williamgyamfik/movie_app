import { useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import { type } from "../../api/tmdbApi";

import AllMovieList from "../../components/allMovieList";

const Movies = ({ movieLists }) => {
  const [movies, setMovies] = useState(movieLists);
  const [page, setPage] = useState(2);

  const fetchMovies = async () => {
    let params = { page };
    let response;

    try {
      response = await tmdbApi.getMovielist(type.popular, { params });
      console.log(response);
      setMovies([...movies, ...response.data.results]);

      setPage((previousPage) => previousPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mb-5">
      <h1 className="text-center text-light pt-5">Movies</h1>
      <div className="row mt-5 p-3 ">
        {movies.map((movieList) => {
          return <AllMovieList key={movieList.id} movieList={movieList} />;
        })}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-success" onClick={fetchMovies}>
          View more...
        </button>
      </div>
    </div>
  );
};

export default Movies;

export async function getStaticProps() {
  let params = {};
  let response;

  response = await tmdbApi.getMovielist(type.popular, {
    params,
  });

  const data = response.data.results;

  return {
    props: { movieLists: data },
  };
}
