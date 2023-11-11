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
        <div className="fixed w-full min-h-screen top-0 left-0 z-50 px-1">
            <div className="relative w-full h-full mt-1 md:mt-10 z-[40]">
                <div className="relative h-[60vh] w-full overflow-hidden rounded-lg z-[100]">
                    {image &&
                        image.to?.map((item, index) => (
                            <div
                                key={index}
                                className={cx(
                                    " duration-500 ease-in-out transition-all max-w-full md:max-w-[1000px] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                    index === current
                                        ? " opacity-100 "
                                        : "opacity-0 "
                                )}
                            >
                                <img
                                    src={item.src}
                                    className="w-full h-full max-h-max md:max-h-[70vh] object-cover object-center"
                                />
                            </div>
                        ))}
                </div>
                <div className="absolute flex space-x-3 -translate-x-1/2 bottom-10 left-1/2 z-[100]">
                    {image.to?.map((item, index) => (
                        <button
                            key={index}
                            className={cx(
                                "w-[5px] h-[5px] md:h-2 md:w-2 rounded-full shadow-lg drop-shadow-lg focus:outline-none",
                                index === current
                                    ? "bg-white"
                                    : "bg-[#ffffff67]"
                            )}
                            onClick={() => setCurrent(index)}
                        ></button>
                    ))}
                </div>

                <button className="opacity-30 hover:opacity-100 absolute top-1 right-1 z-[9991] shadow-lg inline-flex w-[50px] h-[50px] rounded-full ">
                    <XCircleIcon
                        width={50}
                        color="white"
                        className="hover:scale-110 transform transition-all duration-200 ease-in-out hover:text-red-600 text-[#c6c5c5]"
                        onClick={handlClose}
                    />
                </button>

                <span
                    className="opacity-30 hover:opacity-100 absolute top-1/2 left-0 z-[100] inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 cursor-pointer"
                    onClick={handlePrev}
                >
                    <ArrowSmallLeftIcon
                        className="text-white hover:text-black"
                        width={30}
                    />
                </span>

                <span
                    className="opacity-30 hover:opacity-100 absolute top-1/2 right-0 z-[100] inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 cursor-pointer"
                    onClick={handleNext}
                >
                    <ArrowSmallRightIcon
                        className=" text-white hover:text-black"
                        width={30}
                    />
                </span>
            </div>
            <div
                className="text-white max-w-[1000px] mx-auto tracking-wide mb-10"
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
