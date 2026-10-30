import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import jobsList from "./JobData.json";
import { cx } from "../../utils";
import PropTypes from "prop-types";
import { XCircleIcon } from "@heroicons/react/24/outline";

import "swiper/css";
import "swiper/css/pagination";
import "./Jobs.css";

const JobsData = ({ index, setShow }) => {
    const pagination = {
        clickable: true,
        renderBullet: (idx, className) => {
            return `<span class="job-swiper ${className}">
                <img src='/img/jobs/icon_jobs_${
                    idx + 1
                }.avif' alt="${idx}" /></span>`;
        },
    };

    return (
        index !== 0 && (
            <div className="z-50 fixed inset-0 bg-black text-white">
                <div className="absolute inset-0 animate-fade">
                    <Swiper
                        direction={"vertical"}
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        mousewheel={true}
                        pagination={pagination}
                        modules={[Mousewheel, Pagination]}
                        initialSlide={index ? index - 1 : 0}
                        onSlideChange={(data) => setShow(data.activeIndex + 1)}
                        className="jobs-swiper"
                    >
                        <button
                            type="button"
                            aria-label="ปิดรายละเอียดงาน"
                            className="top-3 right-3 z-[99] absolute text-orange-300 hover:text-orange-500 hover:rotate-180 hover:scale-125 transition-all duration-300 ease-in-out"
                            onClick={() => setShow(0)}
                        >
                            <XCircleIcon className="w-10 h-10" />
                        </button>
                        {jobsList.map((job, idx) => (
                            <SwiperSlide key={idx}>
                                <div
                                    className={cx(
                                        "px-5 pr-12 py-14 max-w-[1100px] mx-auto transition-all ease-in-out duration-500 delay-200 min-h-full flex flex-col justify-center items-center",
                                    )}
                                >
                                    <img
                                        src={`/img/jobs/icon_jobs_${idx + 1}.avif`}
                                        className={cx(
                                            idx === index - 1 ? "scale-100 opacity-100" : "scale-0 opacity-0",
                                            " w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto delay-300 transition-all ease-in-out duration-500",
                                        )}
                                    />
                                    <div
                                        className={cx(
                                            "text-center pt-5 transition-all ease-in-out duration-700 delay-300 origin-center transform",
                                            idx === index - 1
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-[100px] opacity-0",
                                        )}
                                    >
                                        <h1 className="font-bold text-2xl md:text-3xl">{job.name}</h1>
                                        <h1 className="my-3 font-medium text-xl md:text-2xl text-left">
                                            {job.jobdescription.title}
                                        </h1>
                                        <p className="first-letter:ml-10 px-1 font-[300] font-sans md:font-normal text-sm md:text-base text-left antialiased">
                                            {job.jobdescription.description}
                                        </p>
                                    </div>
                                    <div
                                        className={cx(
                                            "mt-5 transition-all ease-in-out duration-700 delay-[400ms]",
                                            idx === index - 1
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-[100px] opacity-0",
                                        )}
                                    >
                                        <h1 className="mb-3 font-medium text-xl md:text-2xl text-left">
                                            {job.requirements.title}
                                        </h1>
                                        {job.requirements.list.map((requirement, idxx) => (
                                            <li
                                                key={idxx}
                                                className="px-1 font-[300] font-sans md:font-normal text-sm md:text-base text-left antialiased list-disc"
                                            >
                                                {requirement}
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        )
    );
};
JobsData.propTypes = {
    index: PropTypes.number,
    setShow: PropTypes.func,
};

export default JobsData;
