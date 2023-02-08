import movieBackDrop from "./movieBackDrop";

import React from "react";

const AllMovieList = ({ movieList }) => {
  const cardImage = movieBackDrop.imageW300(
    movieList.poster_path ? movieList.poster_path : movieList.backdrop_path
  );

  return (
    <>
      <div className=" col-lg-3 col-md-4 col-sm-4 col-4" key={movieList.key}>
        <div className="d-flex justify-content-center ">
          <div className="card text-bg-dark " style={{ width: "18rem" }}>
            <img
              src={cardImage}
              className="card-img image-fluid rounded-4 "
              alt="card image goes here"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMovieList;
