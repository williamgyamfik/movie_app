import { category } from "../api/tmdbApi";
import tmdbApi from "../api/tmdbApi";
import { useEffect, useState } from "react";
import movieBackDrop from "./movieBackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";

const CastList = (props) => {
  const [casts, setCasts] = useState([]);

  const router = useRouter();
  console.log(router);

  useEffect(() => {
    const castList = async () => {
      try {
        const response = await tmdbApi.getCastList(props.cat, props.id);

        setCasts(response.data.cast.slice(0, 5));
      } catch (error) {
        console.log(error.message);
      }
    };

    castList();
  }, [props.cat, props.id]);
  return (
    <div className="container mt-5">
      <h1 className="fw-bold text-white p-3">Casts</h1>
      <div className="row align-items-center p-3">
        {casts?.map((cast) => {
          const cardImage = movieBackDrop.imageW300(
            cast.profile_path ? cast.profile_path : null
          );
          return (
            <div
              className=" col-lg-2 col-md-2 col-sm-3 col-6 text-center "
              key={cast.id}
            >
              <img
                className="rounded-2 card-img-top"
                src={cardImage}
                alt="cast image unavailable"
              />
              <p className="fs-0 text-white">
                {cast.name || cast.original_name}
              </p>
            </div>
          );
        })}
        <div>
          <button className="btn btn-success fw-bold col-lg-2 col-md-3 col-sm-3 text-center p-2">
            <FontAwesomeIcon icon={faBookBookmark} /> Bookmark
          </button>
        </div>
      </div>
    </div>
  );
};

export default CastList;
