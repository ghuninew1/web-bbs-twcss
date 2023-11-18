import { useEffect, useRef } from "react";
import ScrollListener from "./ScrollListener";

export default function ScrollProsess() {
    const dataRef = useRef(0);
    const dataScroll = ScrollListener();

    useEffect(() => {
        if (dataScroll.y > 0 && dataScroll.y !== dataScroll.lastY) {
            const UseScrollBar = () => {
                const scrollHeight = document.body.scrollHeight;
                const innerHeight = window.innerHeight;
                const scrollPercents =
                    (dataScroll.y / (scrollHeight - innerHeight)) * 100;
                dataRef.current = scrollPercents;
            };
            return () => {
                UseScrollBar();
            };
        }
    }, [dataScroll.lastY, dataScroll.y]);

    return dataRef;
}
