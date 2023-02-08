import { useRouter } from "next/router";
import TvDetails from "../../components/TvDetails";

const TvCardDetail = () => {
  const router = useRouter();
  console.log(router);
  const { tvId } = router.query;

  return (
    <div>
      <TvDetails tvId={tvId} />
    </div>
  );
};

export default TvCardDetail;
