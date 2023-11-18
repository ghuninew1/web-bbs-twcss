import { useState, useRef, useEffect } from "react";

export default function useHover() {
    const [hovering, setHovering] = useState(false);
    const hoverRef = useRef(null);

    const handleMouseOver = () => setHovering(true);
    const handleMouseOut = () => setHovering(false);

    useEffect(() => {
        const node = hoverRef.current;
        if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);

            return () => {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
            };
        }
    }, [hoverRef]);

    return [hoverRef, hovering];
}
