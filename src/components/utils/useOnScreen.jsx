import { useState, useEffect } from "react";

export const useOnScreen = (ref, rootMargin, threshold) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref?.current) return;
        if (typeof IntersectionObserver === "undefined") {
            setIsVisible(true);
            return;
        } // Fallback for Safari

        if ("IntersectionObserver" in window) {
            let observer = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry?.isIntersecting);
                },
                {
                    threshold: threshold && threshold > 0 ? threshold : 0,
                    rootMargin: rootMargin ? rootMargin : "0px",
                }
            );

            const currentElement = ref?.current;
            if (currentElement) {
                observer.observe(currentElement);
            }

            return () => {
                observer.unobserve(currentElement);
                observer.disconnect();
            };
        }
    }, [ref, rootMargin, threshold]);

    return isVisible;
};

export default useOnScreen;
