import { Children, cloneElement } from "react";
import PropTypes from "prop-types";

export const cx = (...classes) => classes.filter(Boolean).join(" ");

export const childrenWithProps = (children, props) =>
    Children.map(children, (child) => cloneElement(child, props));

cx.propTypes = {
    children: PropTypes.node,
    props: PropTypes.object,
};

childrenWithProps.propTypes = {
    children: PropTypes.node,
    props: PropTypes.object,
};
