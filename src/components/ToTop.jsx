import { cx, scrollTo } from "../components/utils";
import { useRef, memo } from "react";
import ScrollProsess from "./utils/ScrollProsess";

const ToTop = () => {
    const scrollProsess = ScrollProsess();
    const scollToRef = useRef(scrollProsess).current;

    const scrollToTop = () => {
        scrollTo(0);
    };

    return (
        <>
            <progress
                value={scollToRef.current}
                max="100"
                className="fixed top-0 left-0 w-full h-[1px] md:h-[1.5px] bg-red-600 border-none z-[1000]"
            />

            <button
                onClick={scrollToTop}
                className={cx(
                    "opacity-30 hover:opacity-100 text-sm p-2 rounded-full bg-gray-200 fixed bottom-5 right-5 z-[1000] transition-all ease-out duration-300 transform",
                    scollToRef.current > 5
                        ? "translate-y-0"
                        : "translate-y-[170%]"
                )}
            >
                to top
            </button>
        </>
    );
};

const MemoToTop = memo(ToTop);

export default MemoToTop;
