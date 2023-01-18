import Link from "next/link";
import movieLogo from "../assets/movieLogo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark text-light navbar-expand-sm fixed-top">
        <div className="container-fluid">
          <Link
            className="navbar-brand d-flex justify-content-center align-items-center "
            href="/home"
          >
            <Image className="movieLogo" src={movieLogo} alt="" />{" "}
            <span className="text-danger fw-bold fs-3 p-1">Kino</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end  pe-3 ">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" href="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/tv">
                    Tv Series
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/movies">
                    Movies
                  </Link>
                </li>
              </ul>
            </div>
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
