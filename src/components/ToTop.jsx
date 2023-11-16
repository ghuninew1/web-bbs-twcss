import { cx } from "../components/utils";
import ScrollListener from "../components/utils/ScrollListener";
import { useEffect, useState, useRef } from "react";

const ToTop = () => {
    const [show, setShow] = useState(false);
    const scroll = ScrollListener();
    const scollToRef = useRef(null);

    useEffect(() => {
        if (scroll.lastY === scroll.y) {
            return;
        }
        if (scroll.y - scroll.lastY > 0) {
            if (scroll.y > 576) {
                setShow(true);
            }
        } else {
            setShow(false);
        }
        if (scroll.y > 0 && scroll.y !== scroll.lastY) {
            const UseScrollBar = () => {
                const scrollHeight = document.body.scrollHeight;
                const innerHeight = window.innerHeight;
                const scrollPercents =
                    (scroll.y / (scrollHeight - innerHeight)) * 100;
                scollToRef.current = scrollPercents;
            };
            return () => {
                UseScrollBar();
            };
        }
    }, [scroll.lastY, scroll.y]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <progress
                value={scollToRef.current}
                max="100"
                className="fixed top-0 left-0 w-full h-[1px] md:h-[2px] bg-red-600 border-none z-[1000]"
            />

            <button
                onClick={scrollToTop}
                className={cx(
                    "opacity-30 hover:opacity-100 text-sm p-2 rounded-full bg-gray-200 fixed bottom-5 right-5 z-[1000] transition-all ease-out duration-300 transform",
                    show ? "translate-y-0" : "translate-y-[170%]"
                )}
            >
                to top
            </button>
        </>
    );
};

export default ToTop;
