import { useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import { type } from "../../api/tmdbApi";
import AllMovieList from "../../components/AllMovieList";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Movies = ({ movieLists }) => {
  const [movies, setMovies] = useState(movieLists);
  const [page, setPage] = useState(2);

  const fetchMovies = async () => {
    let params = { page };
    let response;

    try {
      response = await tmdbApi.getMovielist(type.popular, { params });

      setMovies([...movies, ...response.data.results]);

      setPage((previousPage) => previousPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link href={"/home"}>
        <button className="btn btn-success btn-sm mt-3 mx-3">
          <FontAwesomeIcon icon={faChevronLeft}>Back</FontAwesomeIcon>
        </button>
      </Link>

      <div className="container mb-5">
        <h1 className="text-center text-light ">Movies</h1>
        <div className="row mt-5 p-3 gy-5">
          {movies.map((movieList) => {
            const href = "/movies/" + movieList.id + "?category=movie";
            return (
              <AllMovieList
                key={movieList.id}
                movieList={movieList}
                href={href}
              />
            );
          })}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-success" onClick={fetchMovies}>
            View more...
          </button>
        </div>
      </div>
    </>
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
