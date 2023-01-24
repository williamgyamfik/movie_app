import Image from "next/image";

const Carousel = (props) => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" key={props.key}>
          <img src={props.backdrop_path} className="d-block w-100" alt="..." />
          {/* <Image
            src={props.backdrop_path}
            alt=""
            objectFit="cover"
            width={400}
            height={400}
          /> */}
          <h1>{props.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
