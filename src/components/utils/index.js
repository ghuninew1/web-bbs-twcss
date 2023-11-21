import PropTypes from "prop-types";
// import { lazy } from "react";

export const cx = (...classes) => classes.filter(Boolean).join(" ");

export const scrollTo = (top) => {
    window.scrollTo({
        top: top ? top : 0,
        behavior: "smooth",
    });
};

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// export function lazyLoad(path, namedExport) {
//     const promise = import(path);
//     if (namedExport == null) {
//         return lazy(() => promise);
//     } else {
//         return lazy(() =>
//             promise.then((module) => ({ default: module[namedExport] }))
//         );
//     }
// }

scrollTo.propTypes = {
    top: PropTypes.number,
};

cx.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
};
