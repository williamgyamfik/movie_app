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

  const imageCard = movieBackDrop.imageW500(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const title =
    item.name || item.title || item.original_title || item.original_name;

  return (
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
      <div className="row  justify-content-center align-items-center mt-5 p-5">
        <div className=" col-lg-12 col-md-11 col-sm-12 col-12 mt-5">
          <div className=" mt-2 text-center d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-3 text-white fw-bold fs-3">{title}</h1>
            <p className=" text-white">{item.overview}</p>
          </div>
        </div>
        {/* <div className=" col-lg-3 col-md-5 col-12">
          <div className="d-flex justify-content-center">
            <div className="card text-bg-dark " style={{ width: "25rem" }}>
              <img
                src={imageCard}
                className="card-img  rounded-4 "
                alt="card image goes here"
              />
              <div className="card-img-overlay"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
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
