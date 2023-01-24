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

  return (
    <div
      className="container-fluid  opacity-75"
      style={{ backgroundImage: `url(${backDrop})` }}
    >
      <div className="d-flex justify-content-end">
        <Image
          src={item.poster_path}
          // {movieBackDrop.imageW500(item.poster_path)}
          width={400}
          height={800}
        />
        {/* <SlideCard src={item.poster_path} width={400} height={800} /> */}
      </div>
      <h1 className="fw-bold fs-1 text-center text-light">{item.name}</h1>
    </div>
  );
};

const Slider = ({ trends }) => {
  console.log(trends);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{ delay: 6000 }}
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
