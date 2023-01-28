const MovieCard = (props) => {
  console.log(props);

  return (
    <>
      <div>
        {/* <MovieList category={category.tv} type={type.popular} /> */}
        <h1>{props?.item?.title}</h1>
      </div>
      {/* <div>
        <MovieList category={category.movie} type={type.popular} />
      </div> */}
    </>
  );
};

export default MovieCard;
