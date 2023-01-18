import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Virtual } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
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
        <div className="d-flex justify-content-center">
          <h1 className="text-light">Slide 1</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="d-flex justify-content-center">
          <h1 className="text-light">Slide 1</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="d-flex justify-content-center">
          <h1 className="text-light">Slide 1</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="d-flex justify-content-center">
          <h1 className="text-light">Slide 1</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
