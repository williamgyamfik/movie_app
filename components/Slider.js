import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import movieBackDrop from "./movieBackDrop";

const SlideItem = ({ item }) => {
  const backDrop = movieBackDrop.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  // const imageCard = movieBackDrop.imageW500(
  //   item.backdrop_path ? item.backdrop_path : item.poster_path
  // );

  const title =
    item.name || item.title || item.original_title || item.original_name;

  return (
    <>
      <div
        className="container-fluid "
        style={{
          backgroundImage: `url(${backDrop})`,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          objectFit: "fill",
        }}
      >
        <div className="row justify-content-center align-items-center mt-5 p-5">
          <div className=" col-lg-8 col-md-12 col-sm-12 col-12 mt-3">
            <h1 className="h1_tag mb-3 text-white fw-bold fs-3 ">{title}</h1>
            <p className="  p_tag text-white text_height">{item.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Slider = ({ trends }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{ delay: 7000 }}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {trends.results.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <SlideItem item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
