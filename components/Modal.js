import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ onClose }) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header"></div>
            <div className="modal-body">
              <p className="text-danger">Sorry! Video content not available</p>
            </div>
            <div className="modal-footer">
              <FontAwesomeIcon
                icon={faCircleXmark}
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={onClose}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
