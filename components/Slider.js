import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";
import movieBackDrop from "./movieBackDrop";
import SlideCard from "./SlideCard";

const SlideItem = ({ item }) => {
  const backDrop = movieBackDrop.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const imageCard = movieBackDrop.imageW500(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const title = item.title ? item.title : item.original_title;

  return (
    <div
      className="container-fluid  opacity-75 "
      style={{
        backgroundImage: `url(${backDrop})`,
        height: "70rem",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="d-block justify-content-end align-items-center  px-5">
        <div className="d-flex justify-content-end align-items-center pt-5 ">
          <div className="card" style={{ width: "35rem" }}>
            <img
              className="img-fluid shadow-lg opacity-100"
              src={imageCard}
              alt="image goes here"
            />
            <div className="card-body text-center  pt-3">
              <h1 className="card-text fw-bold fs-3  ">{title}</h1>
            </div>
          </div>
          {/* <SlideCard src={imageCard} title={title} /> */}
        </div>

        <div className="text-center d-flex justify-content-start text-light w-50">
          <div className="">
            <h1 className="">{title}</h1>
            <p className="fs-4">{item.overview}</p>
            <div className="d-flex justify-content-space">
              <button className="btn btn-light">Watch trailer</button>
              <button className="btn btn-danger">Watch Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slider = ({ trends }) => {
  console.log(trends);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{ delay: 2000 }}
      spaceBetween={5}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {trends.results.map((item) => {
        return (
          <div>
            <SwiperSlide key={item.id}>
              <SlideItem item={item} />
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
};

export default Slider;
