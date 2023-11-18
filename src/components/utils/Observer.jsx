import { useEffect, useState } from "react";

function Observer(ref) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if ("IntersectionObserver" in window) {
            let observer = new IntersectionObserver(
                ([entry]) => {
                    setVisible(entry.isIntersecting);
                },
                {
                    threshold: 0,
                    rootMargin: "0px 0px 0px 0px",
                }
            );
            observer.observe(ref.current);
            return () => {
                observer.disconnect();
            };
        }
    }, [ref]);

    return visible;
}

export default Observer;
