import { useEffect, useState } from "react";

function useObserver(ref, rootMargin = "0px", threshold = 0) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref?.current;

        if (!currentRef) return;

        // Fallback for browsers without IntersectionObserver
        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(currentRef);

        return () => {
            observer.disconnect();
        };
    }, [ref, rootMargin, threshold]);

    return visible;
}

export default useObserver;