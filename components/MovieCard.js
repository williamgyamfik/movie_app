import movieBackDrop from "./movieBackDrop";
import Link from "next/link";

const MovieCard = ({ item, href }) => {
  // const title = item.title || item.name || item.original_name;

  const cardImage = movieBackDrop.imageW300(
    item.poster_path ? item.poster_path : item.backdrop_path
  );

  return (
    <div className="col-lg-2 col-md-4 col-sm-4 col-4 pb-5 ">
      <Link href={href}>
        <div className="justify-content-center d-flex">
          <div className="card text-bg-dark " style={{ width: "18rem" }}>
            <img
              src={cardImage}
              className="card-img image-fluid rounded-4 "
              alt="card image goes here"
            />
            <div className="card-img-overlay"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
