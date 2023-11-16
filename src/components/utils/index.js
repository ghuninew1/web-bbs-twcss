import PropTypes from "prop-types";

export const cx = (...classes) => classes.filter(Boolean).join(" ");

cx.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
};
