import { useState, useRef, lazy, Suspense, memo } from "react";
import { dataNews } from "./NewsData";
import { cx } from "../../utils";
import Totop from "../../Totop";
import Title from "../../Title";
import Observer from "../../utils/Observer";
import Fallback from "../../Fallback";

const NewsIframe = lazy(() => import("./NewsIframe"));
const Model = lazy(() => import("./Model"));

const News = () => {
    const [image, setImage] = useState(0);
    const [showIframe, setShowIframe] = useState(null);
    const dataRef = useRef(dataNews).current;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refs = Array.from({ length: dataNews.length }, () => useRef());
    const isVisible = refs.map((ref) => Observer(ref));

    const handleImage = (item, index) => {
        if (item?.toString().startsWith("http")) {
            setShowIframe(item);
        } else {
            setImage(index);
        }
    };
    const handlClose = () => {
        setImage(0);
        setShowIframe(null);
    };

    return (
        <div className="pt-[30px] md:pt-[0px] px-2 max-w-[1100px] min-h-screen w-full flex flex-col mx-auto items-center justify-center">
            <Title title="News" />
            {image === 0 && !showIframe && <Totop />}
            <div
                className={cx(
                    "fixed top-0 left-0 right-0 h-full z-50 w-screen bg-black bg-opacity-50 transition-all duration-500 ease-in-out transform",
                    image !== 0 ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )}
            >
                <Suspense fallback={<Fallback />}>
                    <Model indexImg={image} handlClose={handlClose} />
                </Suspense>
            </div>

            <div
                className={cx(
                    "fixed z-50 top-0 left-0 right-0 h-full bg-black bg-opacity-50 transition-all duration-500 ease-in-out transform origin-center",
                    showIframe ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )}
            >
                {showIframe && (
                    <Suspense fallback={<Fallback />}>
                        <NewsIframe src={showIframe} handlClose={handlClose} />
                    </Suspense>
                )}
            </div>
            {dataRef &&
                dataRef?.map((item, index) => (
                    <div
                        ref={refs[index]}
                        key={index}
                        className={cx(
                            isVisible[index]
                                ? "translate-y-0 opacity-100"
                                : "translate-y-20 opacity-0",
                            "transition-all duration-[500ms] ease-in-out",
                            "flex border border-[#ffffff0e] mb-[150px] md:mb-[200px] overflow-hidden md:max-h-[500px] p-1",
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
                                    "mt-5 text-[14px] md:text-[16px] font-sans font-[300] antialiased"
                                )}
                            >
                                <p className="font-medium">
                                    {item.title2 && item.title2}
                                </p>
                                <p className="">{item.title && item.title}</p>

                                <button
                                    className="mt-5 font-medium text-[#3b79d0] hover:text-[#f86c3480]"
                                    onClick={() =>
                                        handleImage(item.to, index + 1)
                                    }
                                >
                                    read more
                                </button>
                            </div>
                        </div>
                        <div className="basis-3/4 p-3 rounded-md relative">
                            <div
                                className={cx(
                                    " mx-auto max-h-[450px] flex items-center shadow-lg brightness-95 transition-all overflow-hidden"
                                )}
                            >
                                <img
                                    src={item.src}
                                    alt={item.id}
                                    loading="lazy"
                                    className="w-full h-full hover:brightness-75 cursor-pointer transition duration-50"
                                    onClick={() =>
                                        handleImage(item.to, index + 1)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

const memoNews = memo(News);

export { memoNews as News };
