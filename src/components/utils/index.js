import PropTypes from "prop-types";

export const cx = (...classes) => classes.filter(Boolean).join(" ");

cx.propTypes = {
    children: PropTypes.node,
    props: PropTypes.object,
};
