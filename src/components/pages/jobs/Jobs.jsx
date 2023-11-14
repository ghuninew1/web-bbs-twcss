import { useState } from "react";
import jobImg from "../../../assets/we_need_you.avif";
import { links } from "../../../data/JobData";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { cx } from "../../utils";
import Title from "../../Title";
import JobsData from "./JobsData";
// import useHover from "../../utils/useHover";

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
        <div className="pt-[30px] md:pt-[0px] min-h-[50vh] px-2">
            <Title title="Jobs" />
            <div
                className={cx(
                    "mx-auto flex w-full flex-col justify-center items-center"
                )}
            >
                <div
                    className={cx(
                        "h-[120px] md:w-[300px] w-[200px] md:min-h-[200px] mb-10 transition",
                        show === 0
                            ? "animate-zoomIn"
                            : "animate-zoomOut scale-0"
                    )}
                >
                    <img src={jobImg} alt="job" />
                </div>
                <div
                    className={cx(
                        "flex flex-col justify-center mx-auto items-center z-0 mb-10 gap-2 ",
                        show === 0 ? "animate-zoomIn" : "animate-zoomOut"
                    )}
                >
                    {links.map((link, index) => (
                        <button
                            key={index}
                            onMouseEnter={() => handleHover(index + 1)}
                            onMouseLeave={() => handleHover(false)}
                            onClick={() => handleShow(index + 1)}
                            className={cx(
                                "relative transition-all antialiased font-medium hover:font-bold md:text-xl text-white hover:text-orange-500 cursor-pointer",
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
            {show > 0 && <JobsData index={show - 1} setShow={setShow} />}
        </div>
    );
};

export default Jobs;
