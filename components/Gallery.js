import { useState, useEffect } from "react";
import tmdbApi from "../api/tmdbApi";
import movieBackDrop from "./movieBackDrop";

import Image from "next/image";

const Gallery = (props) => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await tmdbApi.getGallery(props.cat, props.id);
        setGalleries(response.data.backdrops);
      } catch (error) {
        console.log(error);
      }
    };
    getGallery();
  }, [props.cat, props.id]);

  return (
    <div className="container">
      <h1 className="fw-bold text-white p-3">Gallery</h1>
      <div className="row mb-5">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {galleries.map((gallery, i) => {
              return (
                <div className="carousel-item active " key={i}>
                  <Image
                    src={movieBackDrop.originalImage(gallery.file_path)}
                    className="d-block w-100 img-fluid "
                    alt="..."
                    width="500"
                    height="500"
                  />
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
