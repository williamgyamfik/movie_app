import { useState, useEffect } from "react";
import Link from "next/link";

import tmdbApi, { category } from "../api/tmdbApi";
import movieBackDrop from "./movieBackDrop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import CastList from "./CastList";
import Gallery from "./Gallery";

const MovieDetails = (props) => {
  const [detail, setDetail] = useState({});

  // pass the props.id to castList,Images component so they can use it to make API calls for
  // data accordingly

  const cardImage = movieBackDrop.imageW300(
    detail.poster_path ? detail.poster_path : detail.backdrop_path
  );

  const backDrop = movieBackDrop.originalImage(
    detail.backdrop_path ? detail.backdrop_path : detail.poster_path
  );

  useEffect(() => {
    const movieDetail = async () => {
      try {
        const response = await tmdbApi.getMovieDetails(
          category.movie,
          props.movieId
        );
        setDetail(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieDetail();
  }, [category.movie, props.movieId]);

  return (
    <>
      <div
        className="container-fluid opacity-50"
        style={{
          backgroundImage: `url(${backDrop})`,
          minHeight: "60vh",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link href="/home">
          <FontAwesomeIcon
            className="bg-light border-3 rounded-4 mt-3"
            size="2x"
            icon={faLeftLong}
          ></FontAwesomeIcon>
        </Link>
        <div className="container d-flex pt-5 justify-content-start align-items-center">
          <div className="">
            <img
              className="card-img-top mx-3  rounded-2"
              src={cardImage}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-light fw-bold">{detail.title}</h1>
            <p className="text-light fw-normal">{detail.overview}</p>
          </div>
        </div>
      </div>
      <CastList movieId={props.movieId} />
      <Gallery movieId={props.movieId} />
    </>
  );
};

export default MovieDetails;
