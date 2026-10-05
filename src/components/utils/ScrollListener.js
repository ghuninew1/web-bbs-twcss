import { useState, useEffect, useCallback } from "react";

export default function ScrollListener() {
    const [data, setData] = useState({
        y: 0,
        lastY: 0,
    });

    const handleScroll = useCallback(() => {
        setData((prev) => ({
            y: window.scrollY,
            lastY: prev.y,
        }));
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return data;
}