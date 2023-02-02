import tmdbApi from "../../api/tmdbApi";
import { type, category } from "../../api/tmdbApi";

import MovieListDetails from "../../components/MovieListDetails";

const Movies = ({ movieLists }) => {
  console.log(movieLists);

  return (
    <div className="container mb-5">
      <h1 className="text-center text-light pt-5">Movies</h1>
      <div className="row mt-5 p-3 ">
        {movieLists.map((movieList) => {
          return <MovieListDetails key={movieList.id} movieList={movieList} />;
        })}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-success">View more...</button>
      </div>
    </div>
  );
};

export default Movies;

export async function getStaticProps(context) {
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
