import { useState, useRef } from "react";
import { dataNews } from "../../../data/NewsData";
import { cx } from "../../utils";
import Totop from "../../Totop";
import Title from "../../Title";
import UseOnScreen from "../../utils/useOnScreen";
import NewsIframe from "./NewsIframe";
import Model from "./Model";

const News = () => {
    const [image, setImage] = useState(0);
    const [showIframe, setShowIframe] = useState(null);
    const dataRef = useRef(dataNews).current;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refs = Array.from({ length: dataNews.length }, () => useRef());

    const isVisible = refs.map((ref) => UseOnScreen(ref));

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
        <div className="pt-[30px] md:pt-[0px] px-2 max-w-[1100px] min-h-screen flex flex-col mx-auto items-center justify-center">
            <Title title="News" />
            {image === 0 && !showIframe && <Totop />}

            <div
                className={cx(
                    "fixed z-50 inset-0 bg-black bg-opacity-50 transition-all duration-500 ease-in-out transform origin-left",
                    image !== 0 ? "scale-100 " : "scale-0"
                )}
            >
                <Model indexImg={image} handlClose={handlClose} />
            </div>

            {showIframe && (
                <NewsIframe src={showIframe} handlClose={handlClose} />
            )}
            {dataRef &&
                dataRef?.map((item, index) => (
                    <div
                        ref={refs[index]}
                        key={index}
                        className={cx(
                            isVisible[index]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10",
                            "transition-all duration-[500ms] ease-in-out origin-bottom transform",
                            "flex border border-[#ffffff0e] mb-[150px] md:mb-[200px] overflow-hidden md:max-h-[500px] p-1",
                            index % 2 === 0
                                ? "flex-col md:flex-row-reverse"
                                : "flex-col md:flex-row"
                        )}
                    >
                        <div className="basis-1/4 p-3 w-full text-[#e2e2e2] flex flex-col justify-center ">
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
                        <div className="basis-3/4  p-3 rounded-md ">
                            <div
                                className={cx(
                                    " mx-auto max-h-[450px] flex items-center shadow-lg brightness-90 transition-all overflow-hidden"
                                )}
                            >
                                <img
                                    src={item.src}
                                    alt={item.id}
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

export default News;
