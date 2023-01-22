import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Virtual } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

import Carousel from "./Layout/Carousel";

const Slider = ({ trends }) => {
  console.log(trends);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Virtual]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="container-fluid">
          {trends.results.map((trend) => {
            return (
              <div className="row" key={trend.id}>
                {/* <div className="d-flex justify-content-center">
                  <Image
                    src={trend.backdrop_path}
                    alt=""
                    width={400}
                    height={400}
                  />
                  <h1 className="text-light">{trend.name}</h1>
                </div> */}
                <Carousel Image={trend.backdrop_path} />
              </div>
            );
          })}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
