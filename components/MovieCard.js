import movieBackDrop from "./movieBackDrop";

const MovieCard = ({ item }) => {
  const title = item.title || item.name || item.original_name;

  const cardImage = movieBackDrop.imageW300(
    item.poster_path ? item.poster_path : item.backdrop_path
  );

  return (
    // <div className="">
    //   <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card text-bg-dark" style={{ width: "18rem" }}>
        <img src={cardImage} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title ">{title}</h5>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default MovieCard;
