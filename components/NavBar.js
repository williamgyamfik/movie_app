import Link from "next/link";
import movieLogo from "../assets/movieLogo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top">
        <div className="container-fluid ">
          <Link
            className="navbar-brand d-flex justify-content-center align-items-center "
            href="/home"
          >
            <Image className="movieLogo" src={movieLogo} alt="" />{" "}
            <span className="text-danger fw-bold fs-3 p-1">Kino</span>
          </Link>

          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav justify-content-center ">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/tv">
                  Tv series
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/movies">
                  Movies
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success btn-sm rounded-3"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="me-4">
            <button className="btn btn-danger btn-sm rounded-3">logout</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
