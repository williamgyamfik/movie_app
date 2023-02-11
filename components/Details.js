import { useState, useEffect } from "react";
import Link from "next/link";

import tmdbApi, { category } from "../api/tmdbApi";
import movieBackDrop from "./movieBackDrop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import CastList from "./CastList";
import Gallery from "./Gallery";

import { useRouter } from "next/router";

const Details = (props) => {
  const router = useRouter();

  const cat = router.query.category;

  console.log("cat", cat);

  const [detail, setDetail] = useState({});

  const cardImage = movieBackDrop.imageW300(
    detail.poster_path ? detail.poster_path : detail.backdrop_path
  );

  const backDrop = movieBackDrop.originalImage(
    detail.backdrop_path ? detail.backdrop_path : detail.poster_path
  );

  console.log(props.cat);

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

  return (
    <>
      <div
        className="container-fluid "
        style={{
          backgroundImage: `url(${backDrop})`,
          // minHeight: "60vh",
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
      <CastList cat={cat} id={props.id} />
      <Gallery cat={cat} id={props.id} />
    </>
  );
};

export default Details;
