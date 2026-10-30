import { memo, useRef } from "react";
import { cx } from "../../utils";
import useObserver from "../../utils/useObserver";

const NewsItem = ({ item, index, onReadMore, onHighlight }) => {
    const ref = useRef(null);
    const imageRef = useRef(null);
    const isVisible = useObserver(ref);

    return (
        <div
            ref={ref}
            onMouseEnter={onHighlight}
            onFocus={onHighlight}
            className={cx(
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
                "transition-all duration-[500ms] ease-in-out",
                "relative flex border-2 border-[#ffffff1b]",
                "mb-[150px] md:mb-[200px]",
                "overflow-hidden md:max-h-[500px]",
                "p-1 pb-16 shadow-lg rounded-lg",
                index % 2 === 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row",
            )}
        >
            <div className="flex flex-col justify-center p-3 w-full text-[#e2e2e2] basis-1/4">
                <div
                    className={cx(
                        index % 2 === 0 ? "text-right pr-2" : "text-left pl-2",
                        "md:text-lg text-base font-medium antialiased font-sans",
                    )}
                >
                    <p>{item.date}</p>

                    <hr className="mt-2 border-[#fa772b] border-2 rounded hover:animate-bounceRight" />
                </div>

                <div
                    className={cx(
                        index % 2 === 0 ? "text-right pr-2" : "text-left pl-2",
                        "mt-5 text-[14px] md:text-[16px]",
                        "font-sans font-[300] antialiased",
                    )}
                >
                    {item.title2 && <p className="font-medium">{item.title2}</p>}

                    {item.title && <p>{item.title}</p>}

                </div>
            </div>

            <div className="relative p-3 rounded-md basis-3/4">
                <div className="flex items-center shadow-lg brightness-95 mx-auto max-h-[450px] overflow-hidden transition-all">
                    <img
                        ref={imageRef}
                        src={item.src}
                        alt={item.id}
                        loading="lazy"
                        className="w-full h-full hover:scale-105 focus-visible:scale-105 transition-transform motion-reduce:transition-none duration-300 ease-out cursor-pointer"
                        onClick={() => onReadMore(item.to, index + 1, imageRef.current)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                onReadMore(item.to, index + 1, imageRef.current);
                            }
                        }}
                    />
                </div>
            </div>
            <button
                className={cx(
                    "absolute bottom-4 rounded-md border border-transparent px-3 py-1 font-medium text-[#3b79d0] transition-colors duration-200 hover:text-[#f86c34] focus-visible:outline focus-visible:outline-none",
                    index % 2 === 0 ? "right-4" : "left-4",
                )}
                onClick={() => onReadMore(item.to, index + 1, imageRef.current)}
            >
                read more
            </button>
        </div>
    );
};

export default memo(NewsItem);
