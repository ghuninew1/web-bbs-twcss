import { useMemo, Children, isValidElement } from "react";
import PropTypes from "prop-types";
import { ClassNames } from "@emotion/react";
import getAnimationCss from "./getAnimationCss";
import animKeyframes from "./animKeyframes";

export const Anim = ({ children, type, delay, className, ...props }) => {
    const animCss = useMemo(
        () =>
            getAnimationCss({
                delay,
                keyframes: animKeyframes[type],
            }),
        [delay, type]
    );
    return (
        <ClassNames>
            {({ css, cx }) =>
                Children.map(children, (child, index) => {
                    const delayRandom = Math.floor(
                        Math.random() * (100 + delay) * (index + 1)
                    );
                    return isValidElement(child) ? (
                        <div
                            {...props}
                            key={child.key}
                            style={{
                                animationDelay: `${
                                    delay ? delayRandom : 100 * (index + 1)
                                }ms`,
                            }}
                            className={cx(css(animCss) + " " + className)}
                        >
                            {child}
                        </div>
                    ) : (
                        <div
                            {...props}
                            className={cx(css(animCss) + " " + className)}
                        >
                            {child}
                        </div>
                    );
                })
            }
        </ClassNames>
    );
};
Anim.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    delay: PropTypes.number,
    className: PropTypes.string,
};
