import { useContext } from "react";
import { MovieListContext } from "../../store/MovieListContext";

const Movies = () => {
  const movieCtx = useContext(MovieListContext);

  console.log(movieCtx);
  return (
    <>
      <h1 className="bg-success">THIS IS A MOVIE PAGE</h1>
      <button onClick={movieCtx.viewMore}>view more</button>
    </>
  );
};

export default Movies;
