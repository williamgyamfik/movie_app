import movieBackDrop from "./movieBackDrop";
import Link from "next/link";

const TvshowsList = ({ tvList }) => {
  const cardImage = movieBackDrop.imageW300(
    tvList.poster_path ? tvList.poster_path : tvList.backdrop_path
  );

  return (
    <div className=" col-lg-3 col-md-4 col-sm-4 col-6">
      <div className="d-flex justify-content-center ">
        <div className="card text-bg-dark " style={{ width: "18rem" }}>
          <Link href="">
            <img
              src={cardImage}
              className="card-img image-fluid rounded-4 "
              alt="card image goes here"
            />
          </Link>
          <div className="card-img-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default TvshowsList;
