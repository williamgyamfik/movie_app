const SlideCard = (props) => {
  return (
    <div className="card" style={{ width: "35rem" }}>
      <img
        className="img-fluid border border-4"
        src={props.imageCard}
        alt="image goes here"
      />
      <div className="card-body d-flex justify-content-end pt-3">
        <h1 className="card-text fw-bold fs-3 text-center ">{props.title}</h1>
      </div>
    </div>
  );
};

export default SlideCard;
