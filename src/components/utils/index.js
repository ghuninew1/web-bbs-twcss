import PropTypes from "prop-types";

export const cx = (...classes) => classes.filter(Boolean).join(" ");

export const scrollTo = (top) => {
    window.scrollTo({
        top: top ? top : 0,
        behavior: "smooth",
    });
};

scrollTo.propTypes = {
    top: PropTypes.number,
};

cx.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
};
