// import tmbdApi from "../api/tmdbApi";
// import { useState, useEffect } from "react";

// import MovieCard from "./MovieCard";

// const MovieList = (props) => {
//   const [movieList, setMovieList] = useState([]);

//   useEffect(() => {
//     const getList = async () => {
//       const params = { page: 2 };
//       let response;

//       try {
//         if (props.category === "tv") {
//           response = await tmbdApi.getTvList(props.type, { params });
//         } else {
//           response = await tmbdApi.getMovielist(props.type, { params });
//         }
//         setMovieList(response.data.results);
//         console.log(response.data.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getList();
//   }, [props.category, props.type]);

//   return (
//     <div className="container-fluid">
//       <div
//         id="carouselExampleControls"
//         className="carousel slide"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <div className="row">
//               {movieList?.map((item, i) => {
//                 return <MovieCard key={i} item={item} />;
//               })}
//             </div>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleControls"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleControls"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieList;

import tmbdApi from "../api/tmdbApi";
import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getList = async () => {
      const params = { page };
      let response;

      try {
        if (props.category === "tv") {
          response = await tmbdApi.getTvList(props.type, { params });
        } else {
          response = await tmbdApi.getMovielist(props.type, { params });
        }
        setMovieList(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, [props.category, props.type, page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const columns = 4;
  const totalPages = Math.ceil(movieList.length / columns);
  const startIndex = (page - 1) * columns;
  const currentMovies = movieList.slice(startIndex, startIndex + columns);

  return (
    <div className="container-fluid">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {currentMovies.map((item, i) => {
                return <MovieCard key={i} item={item} />;
              })}
            </div>
          </div>
        </div>
        {page > 1 && (
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePreviousPage}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
        )}
        {page < totalPages && (
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNextPage}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
