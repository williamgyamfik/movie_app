import { useRouter } from "next/router";
import Details from "../../components/Details";

const CardDetail = () => {
  const router = useRouter();
  const id = router.query.movieId;

  return <Details id={id} />;
};

export default CardDetail;
