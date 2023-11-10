import { useState, useEffect } from "react";
import jobImg from "../../assets/we_need_you.webp";
import { Link, Events, scrollSpy } from "react-scroll";
import { links, jobsList } from "../../data/JobData";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { cx } from "../utils";

const Jobs = () => {
    const [active, setActive] = useState("jobs-img");

    useEffect(() => {
        Events.scrollEvent.register("begin", (to, element) => {
            console.log("begin", to, element);
            setActive(to);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    const handleSetActive = (to) => {
        setActive(to);
    };
    return (
        <div className=' pt-[30px] md:pt-[40px] flex flex-col justify-center items-center min-h-[50vh] animate-fade'>
            <div
                id='jobs-img'
                className={cx(
                    "max-w-[200px] md:max-w-[300px] mb-5 ",
                    active !== "jobs-img"
                        ? "opacity-0 transition-opacity duration-500"
                        : "opacity-100 transition-opacity duration-500"
                )}
            >
                <Link
                    to='jobs-img'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={400}
                    onSetActive={handleSetActive}
                />
                <img
                    src={jobImg}
                    alt='job'
                    className='w-full h-auto animate-zoomIn'
                    id='jobs-img'
                />
            </div>

            <div
                className={cx(
                    active !== "jobs-img"
                        ? "fixed md:top-[150px] top-[50px] right-0  text-[#425cef] z-10 flex flex-col items-end text-right pr-3 transition-all duration-500"
                        : "flex flex-col justify-center items-center text-xl font-medium md:text-2xl text-white transition-all duration-500 "
                )}
            >
                {links.map((link, index) => (
                    <div
                        key={index}
                        className={cx(
                            active !== "jobs-img"
                                ? " cursor-pointer hover:text-[#ff4d00] opacity-30 hover:opacity-100 bg-black transition-all duration-200 "
                                : " cursor-pointer hover:text-[#ff4d00] opacity-100",
                            active === `job${index}` ? "text-[#ff4d00] " : ""
                        )}
                    >
                        <Link
                            key={index}
                            to={`job${index}`}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={400}
                            onSetActive={handleSetActive}
                        >
                            <span
                                className={cx(
                                    "flex items-center",
                                    active === `job${index}`
                                        ? "text-[#ff4d00] "
                                        : ""
                                )}
                            >
                                {active === `job${index}` && (
                                    <ArrowSmallRightIcon
                                        className='animate-arrow inline-block mr-2'
                                        width={30}
                                    />
                                )}
                                {link.name && link.name}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
            <div
                className={cx(
                    active === "jobs-img"
                        ? "opacity-0 transition-opacity duration-500"
                        : "opacity-100 transition-opacity duration-500"
                )}
            >
                {jobsList.map((job, idx) => (
                    <div
                        key={idx}
                        id={`job${idx}`}
                        className='min-h-[100vh] max-w-[1100px] flex flex-col justify-center  mx-auto mt-10 text-white p-5'
                    >
                        <div className='mb-10 mx-auto '>
                            <img
                                src={`/img/jobs/icon_jobs_${idx + 1}.webp`}
                                className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto'
                            />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl md:text-3xl font-bold'>
                                {" "}
                                {job.name}
                            </h1>
                            <h1 className='text-xl md:text-2xl font-medium my-3 text-left'>
                                {job.jobdescription.title}
                            </h1>
                            <p className='first-letter:ml-10 px-1 text-left text-sm md:text-base'>
                                {job.jobdescription.description}
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-xl md:text-2xl font-medium text-left mb-3'>
                                {job.requirements.title}
                            </h1>
                            {job.requirements.list.map((requirement, idxx) => (
                                <li
                                    key={idxx}
                                    className='first-letter:list-decimal px-1 text-left text-sm md:text-base'
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
