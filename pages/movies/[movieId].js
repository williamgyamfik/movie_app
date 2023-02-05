import { useRouter } from "next/router";
import CardDetails from "../../components/CardDetails";

const MovieDetail = () => {
  const router = useRouter();
  const { movieId } = router.query;

  console.log(movieId);

  return (
    <>
      <CardDetails movieId={movieId} />
    </>
  );
};

export default MovieDetail;
