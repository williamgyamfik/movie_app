import tmdbApi, { category } from "../api/tmdbApi";
import movieBackDrop from "./movieBackDrop";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CardDetails = (props) => {
  const [detail, setDetail] = useState({});

  const cardImage = movieBackDrop.imageW300(
    detail.poster_path ? detail.poster_path : detail.backdrop_path
  );

  const backDrop = movieBackDrop.originalImage(
    detail.backdrop_path ? detail.backdrop_path : detail.poster_path
  );

  console.log(detail);
  useEffect(() => {
    const movieDetail = async () => {
      try {
        const response = await tmdbApi.getMovieDetails(
          category.movie,
          props.movieId
        );
        console.log(response.data);
        setDetail(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieDetail();
  }, [category.movie, props.movieId]);

  return (
    <div>
      <Slider detail={detail} />
      <h1>MOVIE Title {detail.original_title}</h1>
      <img src={cardImage} alt="" />
      {detail.original_title}
    </div>
  );
};

export const Slider = ({ detail }) => {
  const backDrop = movieBackDrop.originalImage(
    detail.backdrop_path ? detail.backdrop_path : detail.poster_path
  );

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <div
        className="text-info"
        style={{
          backgroundImage: `url(${backDrop})`,
          height: "30rem",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      ></div>
    </Swiper>
  );
};

export default CardDetails;
