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
        <div className="fixed w-full min-h-screen top-0 left-0 z-50 ">
            <div className="relative w-full h-full mt-1 md:mt-10">
                <div className="relative h-[60vh] w-full overflow-hidden rounded-lg ">
                    {image &&
                        image.to?.map((item, index) => (
                            <div
                                key={index}
                                className={cx(
                                    " duration-500 ease-in-out transition-all max-w-full md:max-w-[1000px]  w-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
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
                <div className="absolute z-50 flex space-x-3 -translate-x-1/2 bottom-10 left-1/2">
                    {image.to?.map((item, index) => (
                        <button
                            key={index}
                            className={cx(
                                "w-2 h-2 rounded-full",
                                index === current
                                    ? "bg-white"
                                    : "bg-[#ffffff80]"
                            )}
                            onClick={() => setCurrent(index)}
                        ></button>
                    ))}
                </div>

                <button className="absolute top-1 right-1 z-[9991] shadow-lg inline-flex w-[50px] h-[50px] rounded-full ">
                    <XCircleIcon
                        width={50}
                        color="white"
                        className="hover:scale-110 transform transition-all duration-200 ease-in-out hover:text-red-600 text-[#c6c5c5]"
                        onClick={handlClose}
                    />
                    <span className="sr-only">Close</span>
                </button>

                <button
                    className="absolute top-0 left-0 z-40 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={handlePrev}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <ArrowSmallLeftIcon className="w-5 h-5 text-white dark:text-gray-800" />
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    className="absolute top-0 right-0 z-40 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={handleNext}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <ArrowSmallRightIcon className="w-5 h-5 text-white dark:text-gray-800" />
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className="text-white max-w-[1000px] mx-auto tracking-wide">
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
