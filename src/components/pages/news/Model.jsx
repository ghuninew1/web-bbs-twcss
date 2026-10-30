import { useRef, memo } from "react";
import { dataNews } from "./NewsData";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { XCircleIcon } from "@heroicons/react/24/outline";

import "./Model.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { cx } from "../../utils";

function Model({ indexImg = 0, handlClose }) {
    const dataRef = useRef(dataNews).current;

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (dataRef[indexImg - 1]?.to.length <= 1) return;
        progressCircle.current?.style.setProperty("--progress", 1 - progress);
        if (progressContent.current) progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        (indexImg !== 0 && (
            <div className="z-[50] fixed inset-0 bg-black overflow-y-auto text-white news-modal">
                <div className="flex flex-col items-center mx-auto w-full max-w-[1280px] min-h-full news-modal-inner">
                    <div className="flex justify-end px-3 md:px-5 py-2 w-full">
                    <button type="button" aria-label="ปิดข่าว" onClick={handlClose} className="inline-flex opacity-80 hover:opacity-100 rounded-full focus-visible:outline focus-visible:outline-white transition">
                        <XCircleIcon
                            aria-hidden
                            color="white"
                            className="w-11 h-11 hover:scale-110 transition duration-200 ease-in-out"
                        />
                    </button>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={dataRef[indexImg - 1]?.to.length > 1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="animate-fadeInLeft news-modal-swiper"
                    >
                        {dataRef[indexImg - 1]?.to.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center items-center w-full">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                        className="w-full object-center object-contain news-modal-image"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                        {dataRef[indexImg - 1]?.to.length > 1 && (
                            <div className="autoplay-progress" slot="container-end">
                                <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle cx="24" cy="24" r="20"></circle>
                                </svg>
                                <span ref={progressContent}></span>
                            </div>
                        )}
                    </Swiper>
                    <div
                        className="z-[60] mx-auto my-3 pb-6 w-full max-w-6xl tracking-wide animate-fadeInRight"
                    >
                        <div className="p-2 text-center antialiased">
                            {dataRef[indexImg - 1]?.title2 && (
                                <p className="font-[600] text-[14px] md:text-[17px] leading-snug">
                                    {dataRef[indexImg - 1]?.title2}
                                </p>
                            )}
                            {dataRef[indexImg - 1]?.title && dataRef[indexImg - 1]?.src !== "/img/news2/11.jpg" && (
                                <p className="font-[300] text-[13px] md:text-[16px] leading-relaxed">{dataRef[indexImg - 1]?.title}</p>
                            )}
                        </div>
                        <div className="px-4 md:px-6 font-[300] text-[13px] md:text-[16px] antialiased leading-relaxed">
                            {dataRef[indexImg - 1]?.content && (
                                <div className="flex flex-col justify-center items-center text-center">
                                    <p className="first-letter:ml-5">{dataRef[indexImg - 1]?.content}</p>
                                    {dataRef[indexImg - 1]?.content2 && (
                                        <p className="first-letter:ml-5">{dataRef[indexImg - 1]?.content2}</p>
                                    )}
                                    {dataRef[indexImg - 1]?.content3 && (
                                        <p className="first-letter:ml-5">{dataRef[indexImg - 1]?.content3}</p>
                                    )}
                                    {dataRef[indexImg - 1]?.content4 && (
                                        <p className="first-letter:ml-5">{dataRef[indexImg - 1]?.content4}</p>
                                    )}
                                    {dataRef[indexImg - 1]?.content5 && (
                                        <p className={cx("first-letter:ml-5" ,dataRef[indexImg - 1].id == 35 && "text-transparent")}>{dataRef[indexImg - 1]?.content5}</p>
                                    )}
                                    {dataRef[indexImg - 1]?.content6 && (
                                        <p className="first-letter:ml-5">{dataRef[indexImg - 1]?.content6}</p>
                                    )}
                                    {dataRef[indexImg - 1]?.content7 && (
                                        <p className="first-letter:ml-5">{dataRef[indexImg - 1]?.content7}</p>
                                    )}
                                    {dataRef[indexImg - 1]?.content8 && (
                                        <p className="first-letter:ml-5">{dataRef[indexImg - 1]?.content8}</p>
                                    )}
                                    {dataRef[indexImg - 1]?.content9 && (
                                        <p className="first-letter:ml-5">{dataRef[indexImg - 1]?.content9}</p>
                                    )}
                                    {dataRef[indexImg - 1]?.content10 && (
                                        <p className={cx("first-letter:ml-5" ,dataRef[indexImg - 1].id == 35 && "text-transparent")}>{dataRef[indexImg - 1]?.content10}</p>
                                    )}
                                    {dataRef[indexImg - 1]?.content11 && (
                                        <p className="first-letter:ml-5">{dataRef[indexImg - 1]?.content11}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )) ||
        null
    );
}

Model.propTypes = {
    indexImg: PropTypes.number,
    handlClose: PropTypes.func,
};
const ModelMemo = memo(Model);
export default ModelMemo;
