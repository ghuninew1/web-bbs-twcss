import { useState, useEffect } from "react";
import { cx } from "../../utils";
import {
    ArrowSmallRightIcon,
    ArrowSmallLeftIcon,
    XCircleIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const NewsSlide = ({ image, handlClose }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (current === image.to?.length - 1) {
                setCurrent(0);
            } else {
                setCurrent(current + 1);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [current, image.to?.length]);

    const handleNext = () => {
        if (current === image.to?.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    };

    const handlePrev = () => {
        if (current === 0) {
            setCurrent(image.to?.length - 1);
        } else {
            setCurrent(current - 1);
        }
    };

    return (
        <div className="fixed w-full min-h-screen top-0 left-0 z-[60] my-4 overflow-auto">
            <section
                aria-label="Image Slider"
                className="relative w-full h-full mt-3 px-1 "
            >
                <div className=" w-full h-full flex mx-auto items-center overflow-hidden max-w-[1100px] p-0">
                    {image &&
                        image.to?.map((item, index) => (
                            <img
                                key={index}
                                src={item.src}
                                aria-hidden={current !== index}
                                alt={item.alt}
                                style={{ translate: `${-100 * current}%` }}
                                className={cx(
                                    "block flex-grow-0 flex-shrink-0  w-full h-full object-cover max-h-[70vh] object-center transition-all ease-in-out duration-500 transform"
                                )}
                            />
                        ))}
                </div>
                <div className="absolute flex bottom-2 gap-2 left-1/2 -translate-x-1/2">
                    {image.to?.map((_, index) => (
                        <button
                            key={index}
                            aria-label={`View Image ${index + 1}`}
                            className={cx(
                                "z-[70] block md:h-3 md:w-3 h-2 w-2 cursor-pointer rounded-full transition-all ease-in-out hover:scale-125 transform duration-200  ",
                                current === index
                                    ? "bg-slate-200 border-2  border-black/80  scale-125"
                                    : "bg-slate-600 "
                            )}
                            onClick={() => setCurrent(index)}
                        ></button>
                    ))}
                </div>

                <button className="opacity-40 hover:opacity-100 absolute top-0 right-3 z-[9991] shadow-lg inline-flex w-[50px] h-[50px] rounded-full">
                    <XCircleIcon
                        aria-hidden
                        width={50}
                        color="white"
                        className="hover:scale-110 transform transition-all duration-200 ease-in-out hover:text-red-600 text-[#a74747]"
                        onClick={handlClose}
                    />
                </button>

                <button
                    aria-label="View Previous Image"
                    className="hidden md:block opacity-30 hover:opacity-100 absolute top-0 left-0 z-[100]  w-10 h-full cursor-pointer bg-slate-400/0 hover:bg-slate-500/40 group-hover:bg-slate-500/100"
                    onClick={handlePrev}
                >
                    <ArrowSmallLeftIcon
                        className="text-white/60 hover:text-black rounded-full bg-slate-700 hover:bg-slate-500/100"
                        width={35}
                        aria-hidden
                    />
                </button>

                <button
                    aria-label="View Next Image"
                    className="hidden md:block opacity-30 hover:opacity-100 absolute top-0 right-0 z-[100] w-10 h-full cursor-pointer bg-slate-400/0 hover:bg-slate-500/40 group-hover:bg-slate-500/100"
                    onClick={handleNext}
                >
                    <ArrowSmallRightIcon
                        className="text-white/60 hover:text-black rounded-full bg-slate-700 hover:bg-slate-500/100"
                        width={35}
                        aria-hidden
                    />
                </button>
            </section>
            <div
                className="absolute text-white w-full mx-auto tracking-wide pb-5 pt-3 animate-fadeInRight px-2 max-w-6xl left-1/2 -translate-x-1/2 "
                onClick={handlClose}
            >
                <div className="text-sm md:text-base p-3 text-center">
                    {image?.title && <p>{image?.title}</p>}
                    {image?.title2 && <p>{image?.title2}</p>}
                </div>
                <div className="text-sm md:text-base p-3">
                    {image?.content && (
                        <p className="first-letter:ml-5">{image?.content}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

NewsSlide.propTypes = {
    image: PropTypes.object,
    handlClose: PropTypes.func,
};
export default NewsSlide;
