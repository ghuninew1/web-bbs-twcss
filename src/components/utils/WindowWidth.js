import { useState, useEffect } from "react";

export default function WindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.addEventListener("resize", handleResize);
    });

    return width;
}
