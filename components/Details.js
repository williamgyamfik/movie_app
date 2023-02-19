import { useState, useEffect } from "react";
import Link from "next/link";

import tmdbApi from "../api/tmdbApi";
import movieBackDrop from "./movieBackDrop";

import CastList from "./CastList";
import Gallery from "./Gallery";

import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";

const Details = (props) => {
  const router = useRouter();

  const cat = router.query.category;

  const [detail, setDetail] = useState({});

  const cardImage = movieBackDrop.imageW300(
    detail.poster_path ? detail.poster_path : detail.backdrop_path
  );

  const backDrop = movieBackDrop.originalImage(
    detail.backdrop_path ? detail.backdrop_path : detail.poster_path
  );

  const title = detail.title || detail.name || detail.original_name;

  const detailOverview = detail.overview
    ? detail.overview
    : "Overview not available";

  const rating = Number(detail.vote_average).toFixed(2);

  const runtime = detail.last_episode_to_air;
  console.log(runtime);

  useEffect(() => {
    const movieDetail = async () => {
      try {
        const response = await tmdbApi.getDetails(cat, props.id);
        setDetail(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieDetail();
  }, [cat, props.id]);

  console.log(detail);

  return (
    <>
      <div className="d-flex justify-content-start p-2 ">
        <Link href={"/home"}>
          <button className="btn btn-success btn-sm">
            <FontAwesomeIcon icon={faChevronLeft}>Back</FontAwesomeIcon>
          </button>
        </Link>
      </div>
      <div
        className="container-fluid container_height"
        style={{
          backgroundImage: `url(${backDrop})`,
          height: "auto",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 ">
            <img
              className="card float-md-end float-sm-end shadow-lg rounded-2 img-fluid m-5 d-none d-sm-block"
              src={cardImage}
              alt=""
            />
          </div>
          <div className="col-lg-5 ">
            <h1 className="h1_tag text-light fw-bold">{title}</h1>

            <p
              className="p_tag text-light fw-normal"
              style={detailOverview ? {} : { color: "red" }}
            >
              {detailOverview || "Overview not available"}
            </p>
            <p className="rating  text-light ">{rating}</p>

            <p className=" text-light  lh-1">
              Release date : {detail.release_date || detail.first_air_date}
            </p>
            <p className=" text-light  lh-1">
              Last release date : {detail.last_air_date}
            </p>

            <p className=" text-light lh-1">
              Spoken Language : {detail.original_language}
            </p>
          </div>
          <button
            type="button"
            className="btn btn-success fs-3 fw-bold"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Watch trailer
          </button>
        </div>
      </div>
      <Modal />
      <CastList cat={cat} id={props.id} />
      <Gallery cat={cat} id={props.id} />
    </>
  );
};

export default Details;
