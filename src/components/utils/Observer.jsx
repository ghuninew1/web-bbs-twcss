import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Observer(ref, rootMargin, threshold) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref?.current;
        if (!currentRef) return;
        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        } // Fallback for Safari

        if ("IntersectionObserver" in window) {
            let observer = new IntersectionObserver(
                ([entry]) => {
                    setVisible(entry.isIntersecting);
                },
                {
                    threshold: threshold || 0,
                    rootMargin: rootMargin || "0px",
                }
            );
            if (currentRef) {
                observer.observe(currentRef);
            }
            return () => {
                observer.disconnect();
                if (currentRef) {
                    observer.unobserve(currentRef);
                }
            };
        }
    }, [ref, rootMargin, threshold]);

    return visible;
}

Observer.propTypes = {
    ref: PropTypes.object,
    rootMargin: PropTypes.string,
    threshold: PropTypes.number,
};

export default Observer;
