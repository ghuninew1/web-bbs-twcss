import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Portal = ({ children, isOpen, closeModal }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            onClick={closeModal}
            className={` z-10 bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center
            ${isOpen && "animate-zoom"}`}
        >
            {children}
        </div>,
        document.getElementById("portal")
    );
};
Portal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};
Portal.defaultProps = {
    isOpen: false,
};

export default Portal;
