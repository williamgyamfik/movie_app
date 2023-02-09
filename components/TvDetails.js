import { useEffect, useState } from "react";
import movieBackDrop from "./movieBackDrop";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

import { category } from "../api/tmdbApi";
import tmdbApi from "../api/tmdbApi";

const TvDetails = (props) => {
  const [detail, setDetail] = useState({});

  const cardImage = movieBackDrop.imageW300(
    detail.poster_path ? detail.poster_path : detail.backdrop_path
  );

  const backDrop = movieBackDrop.originalImage(
    detail.backdrop_path ? detail.backdrop_path : detail.poster_path
  );

  console.log(detail);

  useEffect(() => {
    const tvDetail = async () => {
      try {
        const response = await tmdbApi.getTvDetails(category.tv, props.tvId);

        console.log(response.data.results);

        setDetail(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    tvDetail();
  }, [category.tv, props.tvId]);

  return (
    <>
      {" "}
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
    </>
  );
};

export default TvDetails;
