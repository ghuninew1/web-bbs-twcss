import { useState, lazy, Suspense } from "react";
import jobImg from "../../../assets/we_need_you.avif";
import jobData from "./JobData.json";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { cx } from "../../utils";
import Title from "../../Title";
import Fallback from "../../Fallback";

const JobsData = lazy(() => import("./JobsData"));

const Jobs = () => {
    const [show, setShow] = useState(0);
    const [haveRing, setHaveRing] = useState(false);

    const handleHover = (e) => {
        setHaveRing(e);
    };

    const handleShow = (e) => {
        setShow(e);
    };

    return (
        <div className=" min-h-[60vh] px-2 mb-10">
            <Title title="Jobs" />
            <div className="mx-auto flex w-full flex-col justify-center items-center">
                <div
                    className={cx(
                        "h-[120px] md:w-[300px] w-[200px] md:min-h-[200px] mb-10 transition",
                        show === 0 ? "animate-fadeInDown" : "animate-zoomOut"
                    )}
                >
                    <img src={jobImg} alt="job" width={300} height={200} />
                </div>
                <div
                    className={cx(
                        "flex flex-col justify-center mx-auto items-center z-0 mb-10 gap-2 ",
                        show === 0 ? "animate-fadeInUp" : "animate-zoomOut"
                    )}
                >
                    {jobData.map((link, index) => (
                        <button
                            key={index}
                            onMouseEnter={() => handleHover(index + 1)}
                            onMouseLeave={() => handleHover(false)}
                            onClick={() => handleShow(index + 1)}
                            className={cx(
                                "relative antialiased font-medium hover:font-bold md:text-xl text-white hover:text-orange-500 cursor-pointer transition-all duration-300 ease-in-out",
                                haveRing === index + 1
                                    ? "translate-x-2"
                                    : "translate-x-0"
                            )}
                        >
                            {haveRing === index + 1 && (
                                <ArrowSmallRightIcon
                                    width={30}
                                    className="mr-1 text-orange-700 -left-10 absolute animate-arrow"
                                />
                            )}
                            {link.name && link.name}
                        </button>
                    ))}
                </div>
            </div>
            <div
                className={cx(
                    "transition-all ease-in-out duration-500 fixed top-0 left-0 z-[50] w-full h-full min-h-screen flex justify-center items-center  bg-black/50",
                    show === 0 ? "scale-0 opacity-0" : "scale-100 opacity-100"
                )}
            >
                <Suspense fallback={<Fallback />}>
                    <JobsData index={show} setShow={setShow} />
                </Suspense>
            </div>
        </div>
    );
};

export default Jobs;
