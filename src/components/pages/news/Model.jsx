import { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { XCircleIcon } from "@heroicons/react/24/outline";

import "./Model.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";

export default function Model({ image, handlClose }) {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 z-[50] bg-[#000000] overflow-auto">
                <section className="relative w-full mt-3 px-1 max-w-[1100px] mx-auto block max-h-full animate-fade">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={false}
                        pagination={{
                            clickable: true,
                        }}
                        navigation
                        modules={[Autoplay, Pagination, Navigation, Keyboard]}
                        keyboard={true}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                    >
                        {image &&
                            image.to?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className={
                                            "md:max-h-[60vh] max-h-[70vh] w-full object-center object-cover"
                                        }
                                    />
                                </SwiperSlide>
                            ))}

                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>{" "}
                    <button className="opacity-40 hover:opacity-100 absolute top-0 right-3 z-[9991] shadow-lg inline-flex w-[50px] h-[50px] rounded-full">
                        <XCircleIcon
                            aria-hidden
                            width={50}
                            color="white"
                            className="hover:scale-110 transition duration-200 ease-in-out hover:text-red-600 text-[#a74747]"
                            onClick={handlClose}
                        />
                    </button>
                </section>
                <div
                    className="absolute text-white w-full mx-auto tracking-wide pb-5 pt-3 animate-fade px-2 max-w-6xl left-1/2 -translate-x-1/2 "
                    onClick={handlClose}
                >
                    <div className="text-sm md:text-base p-3 text-center">
                        {image?.title && <p>{image?.title}</p>}
                        {image?.title2 && <p>{image?.title2}</p>}
                    </div>
                    <div className="text-sm md:text-base p-3">
                        {image?.content && (
                            <p className="first-letter:ml-5">
                                {image?.content}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

Model.propTypes = {
    image: PropTypes.object,
    handlClose: PropTypes.func,
};
