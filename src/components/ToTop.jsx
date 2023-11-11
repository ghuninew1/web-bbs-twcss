import { animateScroll } from "react-scroll";
import { cx } from "../components/utils";
import ScrollListener from "../components/ScrollListener";
import { useEffect, useState, Fragment } from "react";
import { Transition } from "@headlessui/react";

const ToTop = () => {
    const [show, setShow] = useState(false);
    const scroll = ScrollListener();

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
    }, [scroll.lastY, scroll.y]);

    const scrollToTop = () => {
        animateScroll.scrollToTop({
            duration: 400,
            delay: 0,
            smooth: true,
        });
    };

    return (
        <Transition
            show={show}
            as={Fragment}
            enter="transform transition duration-[400ms] ease-out"
            enterFrom="opacity-0 translate-y-full "
            enterTo="opacity-100 translate-y-0 "
            leave="transform duration-200 transition ease-in"
            leaveFrom="opacity-100 translate-y-0  "
            leaveTo="opacity-0 translate-y-full "
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
    );
};

export default ToTop;
