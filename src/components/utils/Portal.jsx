import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Portal = ({ children, isOpen, closeModal }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            onClick={closeModal}
            className={`fixed inset-0 z-[60] flex items-center justify-center bg-[#061b10]/50 px-4 backdrop-blur-md
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
