import { useRef, useCallback, useState } from "react";

export function useIntersectionObserver(options = {}) {
    const { threshold = 0, root = null, rootMargin = "0px" } = options;
    const [entry, setEntry] = useState(null);

    const previousObserver = useRef(null);

    const customRef = useCallback(
        (node) => {
            previousObserver.current?.disconnect();
            previousObserver.current = null;

            if (!node) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    setEntry(entry);
                },
                {
                    threshold,
                    root,
                    rootMargin,
                }
            );

            observer.observe(node);
            previousObserver.current = observer;
        },
        [threshold, root, rootMargin]
    );

    return [customRef, entry];
}