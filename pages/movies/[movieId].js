import { useRouter } from "next/router";
import MovieDetails from "../../components/MovieDetails";

const MovieCardDetail = (props) => {
  const router = useRouter();
  const { movieId } = router.query;

  return (
    <>
      <MovieDetails movieId={movieId} />
    </>
  );
};

export default MovieCardDetail;
