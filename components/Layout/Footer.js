import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeartCircleBolt } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid  bg-transparent ">
        <footer className="text-center text-lg-start">
          <div className="container d-flex justify-content-center py-5">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
            >
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </button>
            <button
              type="button"
              className="btn btn-danger btn-lg btn-floating mx-2"
            >
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-floating mx-2"
            >
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </button>
            <Link href="https://github.com/williamgyamfik">
              <button
                type="button"
                className="btn btn-light btn-lg btn-floating mx-2"
              >
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </button>
            </Link>
          </div>

          <div className="text-center text-white mb-3 p-3">
            <h4>Kino </h4>
            <p>
              Made with
              <span>
                <FontAwesomeIcon
                  style={{ color: "red" }}
                  icon={faHeartCircleBolt}
                  size="2x"
                ></FontAwesomeIcon>
              </span>
              by dev William
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
