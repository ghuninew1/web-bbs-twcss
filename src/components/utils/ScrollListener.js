import { useState, useEffect, useMemo, useCallback } from "react";

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

    const dataScroll = useMemo(() => {
        return {
            y: data.y,
            lastY: data.lastY,
        };
    }, [data]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [handleScroll]);

    return dataScroll;
}
