import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { jobsList } from "../../../data/JobData";
import { cx } from "../../utils";
import PropTypes from "prop-types";
import { XCircleIcon } from "@heroicons/react/24/outline";

import "swiper/css";
import "swiper/css/pagination";
import "./Jobs.css";

const JobsData = ({ index, setShow }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return (
                '<span class="' +
                className +
                '">' +
                ("<img" +
                    " " +
                    `src='/img/jobs/icon_jobs_${index + 1}.avif' ` +
                    'alt="' +
                    index +
                    '" ' +
                    "/>") +
                "</span>"
            );
        },
    };
    return (
        <div className="fixed w-full min-h-screen top-0 left-0 right-0 z-50 bg-black text-white animate-zoomIn">
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                mousewheel={true}
                pagination={pagination}
                modules={[Mousewheel, Pagination]}
                initialSlide={index ? index : 0}
                onSlideChange={(data) => setShow(data.activeIndex + 1)}
            >
                <button
                    className="absolute top-2 right-2 z-[99] hover:scale-125 transition-all ease-in-out duration-300 text-red-500/20 hover:text-red-500/100"
                    onClick={() => setShow(0)}
                >
                    <XCircleIcon className="h-10 w-10 " />
                </button>
                {jobsList.map((job, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className={cx(
                                "px-5 py-5 max-w-[1100px] mx-auto transition-all ease-in-out duration-500 delay-200",
                                idx === index
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-[200px] opacity-0"
                            )}
                        >
                            <img
                                src={`/img/jobs/icon_jobs_${idx + 1}.avif`}
                                className={cx(
                                    idx === index
                                        ? "scale-100 opacity-100"
                                        : "scale-0 opacity-0",
                                    " w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto delay-300 transition-all ease-in-out duration-500"
                                )}
                            />
                            <div
                                className={cx(
                                    "text-center pt-5 antialiased  transition-all ease-in-out duration-500 ",
                                    idx === index ? "opacity-100" : "opacity-0"
                                )}
                            >
                                <h1 className="text-2xl md:text-3xl font-bold">
                                    {job.name}
                                </h1>
                                <h1 className="text-xl md:text-2xl font-medium my-3 text-left">
                                    {job.jobdescription.title}
                                </h1>
                                <p className="first-letter:ml-10 px-1 text-left text-sm md:text-base">
                                    {job.jobdescription.description}
                                </p>
                            </div>
                            <div
                                className={cx(
                                    "mt-5 transition-all ease-in-out duration-700 delay-500",
                                    idx === index
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-[20px] opacity-0"
                                )}
                            >
                                <h1 className="text-xl md:text-2xl font-medium text-left mb-3">
                                    {job.requirements.title}
                                </h1>
                                {job.requirements.list.map(
                                    (requirement, idxx) => (
                                        <li
                                            key={idxx}
                                            className="list-disc px-1 text-left text-sm md:text-base"
                                        >
                                            {requirement}
                                        </li>
                                    )
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
JobsData.propTypes = {
    index: PropTypes.number,
    setShow: PropTypes.func,
};

export default JobsData;
