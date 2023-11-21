import { useCallback, useState } from "react";

function OnScreen(ref, options = {}) {
    const { threshold = 0, root = null, rootMargin = "0px" } = options;
    const [entry, setEntry] = useState(null);

    const previousObserver = ref;

    const customRef = useCallback(
        (node) => {
            if (previousObserver.current) {
                previousObserver.current.disconnect();
                previousObserver.current = null;
            }

            if (node?.nodeType === Node.ELEMENT_NODE) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        setEntry(entry.isIntersecting);
                    },
                    { threshold, root, rootMargin }
                );

                observer.observe(node);
                previousObserver.current = observer;
            }
        },
        [previousObserver, threshold, root, rootMargin]
    );

    return [customRef, entry];
}

export default OnScreen;
