import tmdbApi from "../../api/tmdbApi";
import { type } from "../../api/tmdbApi";
import AllTvshowsList from "../../components/AllTvShowsList";

const TvShows = ({ tvLists }) => {
  return (
    <div className="container mb-5">
      <h1 className="text-center text-light pt-5">Tv Shows</h1>
      <div className="row mt-5 p-3 ">
        {tvLists?.map((tvList) => {
          return <AllTvshowsList key={tvList.id} tvList={tvList} />;
        })}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-success">View more...</button>
      </div>
    </div>
  );
};

export default TvShows;

export async function getStaticProps() {
  let params = {};
  let response;

  response = await tmdbApi.getTvList(type.top_rated, {
    params,
  });

  const data = response.data.results;

  return {
    props: { tvLists: data },
  };
}
