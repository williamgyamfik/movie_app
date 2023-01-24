import Slider from "../../components/Slider";

const Homepage = ({ trendingData }) => {
  return (
    <div className="">
      <Slider trends={trendingData} />
    </div>
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
  };
}
