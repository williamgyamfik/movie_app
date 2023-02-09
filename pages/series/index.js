import { category } from "../../api/tmdbApi";
import tmdbApi from "../../api/tmdbApi";

const Series = ({ response }) => {
  return (
    <div>
      <h1>{response.name}</h1>
    </div>
  );
};

export default Series;

export async function getStaticPaths() {
  let params = {};

  let response;
  response = await tmdbApi.getMovielist(category.tv, { params });
  response = response.data.results;

  const paths = response.map((paths) => ({
    params: { id: paths.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let response;
  response = await tmdbApi.getMovielist(category.tv, params.id);
  response = response.data.results;

  return {
    props: { response },
  };
}
