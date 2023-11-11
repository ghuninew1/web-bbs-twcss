import { useState, useEffect, Fragment, useRef } from "react";
import jobImg from "../../assets/we_need_you.webp";
import { Link } from "react-scroll";
import { links, jobsList } from "../../data/JobData";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { cx } from "../utils";
import Title from "../Title";
import { Transition } from "@headlessui/react";
import UseOnScreen from "../utils/useOnScreen";

const Jobs = () => {
    const [active, setActive] = useState("jobs-img");
    const [show, setShow] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refs = Array.from({ length: jobsList.length }, () => useRef());

    const isVisible = refs.map((ref) => UseOnScreen(ref));

    useEffect(() => {
        if (active === "jobs-img") {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [active]);

    const handleSetActive = (to) => {
        setActive(to);
    };

    return (
        <div className="pt-[30px] md:pt-[0px] min-h-[50vh] flex flex-col mx-auto items-center justify-center px-2">
            <Title title="Jobs" />
            <Link
                to="jobs-img"
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
                onSetActive={handleSetActive}
            >
                <div
                    className={cx(
                        "h-[120px] md:w-[300px] w-[200px] md:h-[200px] mb-10 "
                    )}
                    id="jobs-img"
                >
                    <Transition
                        show={show}
                        as={Fragment}
                        enter="transform transition duration-[400ms] ease-in-out"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave="transform duration-[400ms] transition ease-in-out"
                        leaveFrom="opacity-100 scale-100 "
                        leaveTo="opacity-0 scale-0"
                    >
                        <img
                            src={jobImg}
                            alt="job"
                            className="w-full h-auto animate-zoomIn"
                        />
                    </Transition>
                </div>
            </Link>

            <div
                className={cx(
                    !show
                        ? "fixed md:top-[150px] top-[50px] right-0 text-[#425cef] z-10 items-end text-right pr-3 animate-fadeInRight opacity-30 hover:opacity-100 hover:bg-black hover:bg-opacity-80 transition-all duration-300 "
                        : "items-center mx-auto text-white animate-fadeInLeft",
                    "transition-all duration-300 flex flex-col justify-center opacity-100"
                )}
            >
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`job${index}`}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={300}
                        onSetActive={handleSetActive}
                    >
                        <span
                            className={cx(
                                "tracking-wide font-sans cursor-pointer hover:text-[#ff4d00] font-medium",
                                !show
                                    ? "text-[15px] md:text-[17px] mt-1"
                                    : "text-xl md:text-2xl mt-0",
                                active === `job${index}` && "text-[#ff4d00] "
                            )}
                        >
                            {active === `job${index}` && (
                                <ArrowSmallRightIcon
                                    className="animate-arrow inline-block mr-2"
                                    width={30}
                                />
                            )}

                            {link.name && link.name}
                        </span>
                    </Link>
                ))}
            </div>

            <div
                className={cx(
                    "transition-all duration-300",
                    active === "jobs-img" ? "opacity-0 " : "opacity-100 "
                )}
            >
                {jobsList.map((job, idx) => (
                    <div
                        ref={refs[idx]}
                        key={idx}
                        id={`job${idx}`}
                        className={cx(
                            isVisible[idx]
                                ? "opacity-100 translate-x-0 delay-[200ms]"
                                : "opacity-0 -translate-x-[100px] delay-[200ms]",
                            "transition-all duration-[400ms] transform ease-in-out",
                            "min-h-[100vh] max-w-[1100px] flex flex-col justify-center mx-auto mt-10 text-white p-5 tracking-wide"
                        )}
                    >
                        <div className="mb-10 mx-auto ">
                            <img
                                src={`/img/jobs/icon_jobs_${idx + 1}.webp`}
                                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto"
                            />
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl md:text-3xl font-bold">
                                {" "}
                                {job.name}
                            </h1>
                            <h1 className="text-xl md:text-2xl font-medium my-3 text-left">
                                {job.jobdescription.title}
                            </h1>
                            <p className="first-letter:ml-10 px-1 text-left text-sm md:text-base">
                                {job.jobdescription.description}
                            </p>
                        </div>
                        <div className="mt-10">
                            <h1 className="text-xl md:text-2xl font-medium text-left mb-3">
                                {job.requirements.title}
                            </h1>
                            {job.requirements.list.map((requirement, idxx) => (
                                <li
                                    key={idxx}
                                    className="first-letter:list-decimal px-1 text-left text-sm md:text-base"
                                >
                                    {requirement}
                                </li>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;
