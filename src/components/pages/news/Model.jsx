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
            <div className="news-modal fixed inset-0 z-[50] overflow-y-auto bg-black text-white">
                <div className="news-modal-inner mx-auto flex min-h-full w-full max-w-[1280px] flex-col items-center">
                    <div className="flex w-full justify-end px-3 py-2 md:px-5">
                    <button type="button" aria-label="ปิดข่าว" onClick={handlClose} className="inline-flex rounded-full opacity-80 transition hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                        <XCircleIcon
                            aria-hidden
                            color="white"
                            className="h-11 w-11 transition duration-200 ease-in-out hover:scale-110"
                        />
                    </button>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
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
                        className="news-modal-swiper animate-fadeInLeft"
                    >
                        {dataRef[indexImg - 1]?.to.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex w-full items-center justify-center">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                        className="news-modal-image w-full object-contain object-center"
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
                        className="z-[60] mx-auto my-3 w-full max-w-6xl pb-6 tracking-wide animate-fadeInRight"
                    >
                        <div className="p-2 text-center antialiased">
                            {dataRef[indexImg - 1]?.title2 && (
                                <p className="text-[14px] leading-snug md:text-[17px] font-[600] ">
                                    {dataRef[indexImg - 1]?.title2}
                                </p>
                            )}
                            {dataRef[indexImg - 1]?.title && dataRef[indexImg - 1]?.src !== "/img/news2/11.jpg" && (
                                <p className="text-[13px] leading-relaxed md:text-[16px] font-[300]">{dataRef[indexImg - 1]?.title}</p>
                            )}
                        </div>
                        <div className="px-4 text-[13px] leading-relaxed font-[300] antialiased md:px-6 md:text-[16px]">
                            {dataRef[indexImg - 1]?.content && (
                                <div className="text-center flex flex-col items-center justify-center">
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
