import tmdbApi from "../../api/tmdbApi";
import { type } from "../../api/tmdbApi";
import AllTvshowsList from "../../components/AllTvShowsList";
import { useState } from "react";

const TvShows = ({ tvLists }) => {
  const [tv, setTv] = useState(tvLists);
  const [page, setPage] = useState(2);

  const fetchTvList = async () => {
    let params = { page };
    let response;

    try {
      response = await tmdbApi.getTvList(type.popular, { params });

      setTv([...tv, ...response.data.results]);

      setPage((previousPage) => previousPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mb-5">
      <h1 className="text-center text-light pt-5">Tv Shows</h1>
      <div className="row mt-5 p-3 ">
        {tv?.map((tvs) => {
          return <AllTvshowsList key={tvs.id} tvs={tvs} />;
        })}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-success" onClick={fetchTvList}>
          View more...
        </button>
      </div>
    </div>
  );
};

export default TvShows;

export async function getStaticProps() {
  let params = {};
  let response;

  response = await tmdbApi.getTvList(type.popular, {
    params,
  });

  const data = response.data.results;

  return {
    props: { tvLists: data },
  };
}
