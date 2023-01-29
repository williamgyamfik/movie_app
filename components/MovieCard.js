const MovieCard = (props) => {
  console.log(props);

  return (
    <div>
      <h1>{props?.item?.title}</h1>
    </div>
  );
};

export default MovieCard;
