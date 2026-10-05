import { memo, useRef } from "react";
import { cx } from "../../utils";
import useObserver from "../../utils/useObserver";

const NewsItem = ({ item, index, onReadMore }) => {
    const ref = useRef(null);
    const isVisible = useObserver(ref);

    return (
        <div
            ref={ref}
            className={cx(
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0",
                "transition-all duration-[500ms] ease-in-out",
                "flex border-2 border-[#ffffff1b]",
                "mb-[150px] md:mb-[200px]",
                "overflow-hidden md:max-h-[500px]",
                "p-1 shadow-lg rounded-lg",
                index % 2 === 0
                    ? "flex-col md:flex-row-reverse"
                    : "flex-col md:flex-row"
            )}
        >
            <div className="basis-1/4 p-3 w-full text-[#e2e2e2] flex flex-col justify-center">
                <div
                    className={cx(
                        index % 2 === 0
                            ? "text-right pr-2"
                            : "text-left pl-2",
                        "md:text-lg text-base font-medium antialiased font-sans"
                    )}
                >
                    <p>{item.date}</p>

                    <hr className="mt-2 border-[#fa772b] border rounded" />
                </div>

                <div
                    className={cx(
                        index % 2 === 0
                            ? "text-right pr-2"
                            : "text-left pl-2",
                        "mt-5 text-[14px] md:text-[16px]",
                        "font-sans font-[300] antialiased"
                    )}
                >
                    {item.title2 && (
                        <p className="font-medium">
                            {item.title2}
                        </p>
                    )}

                    {item.title && (
                        <p>
                            {item.title}
                        </p>
                    )}

                    <button
                        className="mt-5 font-medium text-[#3b79d0] hover:text-[#f86c3480]"
                        onClick={() =>
                            onReadMore(item.to, index + 1)
                        }
                    >
                        read more
                    </button>
                </div>
            </div>

            <div className="basis-3/4 p-3 rounded-md relative">
                <div className="mx-auto max-h-[450px] flex items-center shadow-lg brightness-95 transition-all overflow-hidden">
                    <img
                        src={item.src}
                        alt={item.id}
                        loading="lazy"
                        className="w-full h-full hover:brightness-75 cursor-pointer transition duration-50"
                        onClick={() =>
                            onReadMore(item.to, index + 1)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(NewsItem);