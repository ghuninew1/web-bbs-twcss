import { useState, useEffect } from "react";

const useOnScreen = (ref, rootMargin, threshold) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
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
        };
    }, [ref, rootMargin, threshold]);

    return isVisible;
};

export default useOnScreen;
