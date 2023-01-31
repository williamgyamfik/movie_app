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
      className="container-fluid  opacity-75 mb-5"
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
      <div className="container-fluid  ">
        <div className="d-flex justify-content-end align-items-center pt-5 ">
          <div className="card" style={{ width: "35rem" }}>
            <img
              className="img-fluid shadow-lg opacity-100"
              src={imageCard}
              alt="image goes here"
            />
            <div className="card-body text-center  pt-3">
              <h1 className="card-text fw-bold fs-1  ">{title}</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid text-center text-light mb-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <h1 className=" fw-bold" style={{ fontSize: "5rem" }}>
                {title}
              </h1>
              <p className="fs-4">{item.overview}</p>
              <div className="d-flex justify-content-evenly mt-5">
                <button className="btn btn-light fw-bold fs-3">
                  Watch trailer
                </button>
                <button className="btn btn-danger fw-bold fs-3">
                  Watch Now
                </button>
              </div>
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
