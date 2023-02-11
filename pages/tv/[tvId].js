import { useRouter } from "next/router";
import { category } from "../../api/tmdbApi";
import Details from "../../components/Details";

const TvCardDetail = () => {
  const router = useRouter();

  const id = router.query.tvId;

  console.log(router);

  return (
    <div>
      <Details id={id} cat={category} />
    </div>
  );
};

export default TvCardDetail;
