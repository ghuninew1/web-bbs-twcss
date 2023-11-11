import { useState } from "react";
import { dataNews } from "../../../data/NewsData";
import { cx } from "../../utils";
import NewsSlide from "./NewsSlide";
import NewsIframe from "./NewsIframe";
import Totop from "../../Totop";
import Title from "../../Title";
import { Transition } from "@headlessui/react";

const News = () => {
    const [image, setImage] = useState(null);
    const [showIframe, setShowIframe] = useState(null);
    const [show, setShow] = useState(false);
    const [showframe, setShowframe] = useState(false);

    const handleImage = (e) => {
        if (e?.to.toString().startsWith("http")) {
            setShowIframe(e);
            setShowframe(true);
        } else {
            setImage(e?.to.toString().startsWith("http") ? null : e);
            setShow(true);
        }
    };
    const handlClose = () => {
        setImage(null);
        setShow(false);
        setShowIframe(null);
        setShowframe(false);
    };

    return (
        <div
            id="news"
            className=" pt-[30px] md:pt-[40px]  px-2 max-w-[1100px] "
        >
            <Title title="ข่าวสาร" />
            <Totop />
            <Transition
                show={show}
                as={"div"}
                enter="transform transition duration-[400ms] ease-in"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="transform duration-[400ms] transition ease-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-0"
                className={
                    "fixed w-full min-h-screen bg-[#000000] top-0 left-0 z-50"
                }
            >
                {image?.to && (
                    <NewsSlide image={image} handlClose={handlClose} />
                )}
            </Transition>
            <Transition
                show={showframe}
                as={"div"}
                enter="transform transition duration-[400ms] ease-in"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="transform duration-[400ms] transition ease-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-0"
                className={
                    "fixed w-full min-h-screen bg-[#000000] top-0 left-0 z-50"
                }
            >
                {showIframe?.to && (
                    <NewsIframe image={showIframe} handlClose={handlClose} />
                )}
            </Transition>
            {dataNews.map((item, index) => (
                <div
                    key={index}
                    className={cx(
                        "flex flex-col md:flex-row  border border-[#ffffff0e] rounded-md mb-[200px] max-h-[600px] overflow-hidden animate-fade duration-600 ",
                        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    )}
                >
                    <div className="basis-1/4 p-3  w-full  text-[#e2e2e2] flex flex-col justify-center ">
                        <div
                            className={cx(
                                index % 2 === 0
                                    ? "text-right pr-5"
                                    : "text-left pl-5",
                                "text-lg font-medium "
                            )}
                        >
                            <p>{item.date}</p>
                            <hr className="mt-2 border-[#fa772b] border rounded" />
                        </div>
                        <div
                            className={cx(
                                index % 2 === 0
                                    ? "text-right pr-5"
                                    : "text-left pl-5",
                                "mt-5 text-sm md:text-base font-sans"
                            )}
                        >
                            <p className="font-normal">
                                {item.title && item.title}
                            </p>
                            <p className="font-normal">
                                {item.title2 && item.title2}
                            </p>
                            <button
                                className="mt-5 font-medium text-[#3b79d0] hover:text-[#f86c3480]"
                                onClick={() => handleImage(item)}
                            >
                                read more
                            </button>
                        </div>
                    </div>
                    <div className="basis-3/4  p-3 flex justify-center rounded-md ">
                        <div className=" max-h-[450px] flex  justify-center items-center mx-auto overflow-hidden shadow-lg brightness-90 ">
                            <img
                                src={item.src}
                                alt={item.id}
                                className="w-full h-auto hover:brightness-75 cursor-pointer transition duration-50"
                                onClick={() => handleImage(item)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default News;
