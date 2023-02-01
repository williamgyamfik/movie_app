import MovieCard from "../../components/MovieCard";
import Slider from "../../components/Slider";
import { category, type } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList";

const Homepage = ({ trendingData }) => {
  return (
    <>
      <Slider trends={trendingData} />
      <div>
        <div className="text-center">
          <h1 className="text-light ">Trending Movies</h1>
          <MovieList category={category.movie} type={type.popular} />
        </div>
        <div className="text-center">
          <h1 className="text-light text-center">Top Rated Movies </h1>
          <MovieList category={category.movie} type={type.top_rated} />
        </div>
        <div className="text-center">
          <h1 className="text-light">Trending TV </h1>
          <MovieList category={category.tv} type={type.popular} />
        </div>
        <div className="text-center">
          <h1 className="text-light"> Top Rated TV </h1>
          <MovieList category={category.tv} type={type.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Homepage;

export async function getStaticProps() {
  // runs during build time, doesnt get to client

  const apiKey = "2563582b1f5a10c6a86c15ea975da109";

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
  );

  if (!res.ok) {
    switch (res.status) {
      case 401:
        break;
      case 404:
        break;
    }
  }
  const trendingData = await res.json();

  console.log(trendingData);

  return {
    props: {
      trendingData,
    },
    revalidate: 3600,
  };
}
