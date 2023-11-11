import { animateScroll } from "react-scroll";
import { cx } from "../components/utils";
import ScrollListener from "../components/ScrollListener";
import { useEffect, useState, Fragment, useRef } from "react";
import { Transition } from "@headlessui/react";

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
        animateScroll.scrollToTop({
            duration: 400,
            delay: 0,
            smooth: true,
        });
    };

    return (
        <>
            <progress
                value={scollToRef.current}
                max="100"
                className="fixed top-0 left-0 w-full h-[1px] bg-red-600 border-none z-[1000]"
            />
            <Transition
                show={show}
                as={Fragment}
                enter="transform transition duration-[200ms] ease-out"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-0 "
                leave="transform duration-[200ms] transition ease-in"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-full"
            >
                <button
                    onClick={scrollToTop}
                    className={cx(
                        "opacity-30 hover:opacity-100 text-sm p-2 rounded-full bg-gray-200 fixed bottom-5 right-5 z-[1000]"
                    )}
                >
                    to top
                </button>
            </Transition>
        </>
    );
};

export default ToTop;
