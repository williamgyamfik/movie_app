import { useState, useEffect } from "react";
import { category } from "../api/tmdbApi";
import tmdbApi from "../api/tmdbApi";
import movieBackDrop from "./movieBackDrop";

const Gallery = (props) => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await tmdbApi.getGallery(
          category.movie,
          props.movieId
        );
        setGalleries(response.data.backdrops);
      } catch (error) {
        console.log(error);
      }
    };
    getGallery();
  }, [category.movie, props.movieId]);

  return (
    <div className="container">
      <h1 className="fw-bold text-white p-2">Gallery</h1>
      <div className="row">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {galleries.map((gallery, i) => {
              return (
                <div className="carousel-item active" key={i}>
                  <img
                    src={movieBackDrop.originalImage(gallery.file_path)}
                    className="d-block w-100"
                    alt="..."
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
