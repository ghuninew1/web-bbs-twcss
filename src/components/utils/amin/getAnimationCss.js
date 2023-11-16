import PropTypes from "prop-types";
import { css } from "@emotion/react";

const getAnimationCss = ({
    duration = 1e3, // ms
    delay = 0, // ms
    timingFunction = "ease", // string
    keyframes, // keyframes
    iterationCount = 1, // number | infinite
}) => {
    return css`
        animation-duration: ${duration}ms;
        animation-timing-function: ${timingFunction};
        animation-delay: ${delay}ms;
        animation-name: ${keyframes};
        animation-direction: normal;
        animation-fill-mode: both;
        animation-iteration-count: ${iterationCount};

        @media (prefers-reduced-motion: reduce) {
            animation: none;
        }
    `;
};

getAnimationCss.propTypes = {
    duration: PropTypes.number,
    delay: PropTypes.number,
    timingFunction: PropTypes.string,
    keyframes: PropTypes.object,
    iterationCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default getAnimationCss;
