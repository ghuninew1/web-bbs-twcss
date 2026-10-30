import { useState, useEffect, useCallback } from "react";

export default function ScrollListener({ desktopOnly = false } = {}) {
    const [data, setData] = useState({
        y: 0,
        lastY: 0,
    });

    const handleScroll = useCallback(() => {
        if (desktopOnly && window.innerWidth < 768) return;

        setData((prev) => ({
            y: window.scrollY,
            lastY: prev.y,
        }));
    }, [desktopOnly]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return data;
}
