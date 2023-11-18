import { useRef } from "react";
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

export default function Model({ indexImg = 0, handlClose }) {
    const dataRef = useRef(dataNews).current;

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (dataRef[indexImg - 1]?.to.length <= 1) return;
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        (indexImg !== 0 && (
            <div className="fixed top-0 inset-x-0 z-[50] min-h-screen w-screen h-full bg-black overflow-y-scroll">
                <div className="relative w-full md:max-w-[1100px] min-h-[90vh] mx-auto flex flex-col items-center justify-center my-3 md:my-5 ">
                    <button className="opacity-60 hover:opacity-100 absolute top-3 right-2 z-[9991] shadow-lg inline-flex rounded-full">
                        <XCircleIcon
                            aria-hidden
                            color="white"
                            className="hover:scale-110 transition duration-200 ease-in-out hover:text-red-600 text-[#a74747] w-[50px] h-[50px]"
                            onClick={handlClose}
                        />
                    </button>
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
                        className="animate-fadeInLeft"
                    >
                        {dataRef[indexImg - 1]?.to.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="md:w-full">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                        className="md:max-h-[70vh] md:min-h-[650px] min-h-full max-h-[60vh] w-full object-center h-full object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                        {dataRef[indexImg - 1]?.to.length > 1 && (
                            <div
                                className="autoplay-progress"
                                slot="container-end"
                            >
                                <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle cx="24" cy="24" r="20"></circle>
                                </svg>
                                <span ref={progressContent}></span>
                            </div>
                        )}
                    </Swiper>
                    <div
                        className="block z-[60] h-full text-white w-full mx-auto tracking-wide max-w-6xl my-3 min-h-[20vh] animate-fadeInRight"
                        onClick={handlClose}
                    >
                        <div className="p-2 text-center antialiased">
                            {dataRef[indexImg - 1]?.title2 && (
                                <p className="text-[15px] md:text-[17px] font-[600] ">
                                    {dataRef[indexImg - 1]?.title2}
                                </p>
                            )}
                            {dataRef[indexImg - 1]?.title && (
                                <p className="text-[14px] md:text-[16px] font-[300]">
                                    {dataRef[indexImg - 1]?.title}
                                </p>
                            )}
                        </div>
                        <div className="text-[14px] md:text-[16px] px-3 font-[300] antialiased">
                            {dataRef[indexImg - 1]?.content && (
                                <p className="first-letter:ml-5">
                                    {dataRef[indexImg - 1]?.content}
                                </p>
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
