import { useRouter } from "next/router";
import MovieDetails from "../../components/MovieDetails";

const MovieDetail = () => {
  const router = useRouter();
  const { movieId } = router.query;

  console.log(movieId);

  return (
    <>
      <MovieDetails movieId={movieId} />
    </>
  );
};

export default MovieDetail;
