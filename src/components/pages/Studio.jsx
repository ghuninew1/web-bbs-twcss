import { useState, useEffect } from "react";
import ptum from "../../assets/ptum.avif";
import { cx } from "../utils";
import Title from "../Title";

const Studio = () => {
    const [titles, setTitles] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTitles(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Title title="Studio" />
            <div className="relative pt-[30px] md:pt-[0px] min-h-[50vh]">
                <div
                    className={cx(
                        "transition-all duration-500 ease-in-out transform origin-center absolute top-0 inset-0 ",
                        titles ? "scale-0" : "animate-zoom scale-100"
                    )}
                >
                    {/* {!titles && ( */}
                    <h1 className="text-orange-500 text-[40px] md:text-[50px] font-[600] font-font1 tracking-wide flex justify-center items-center min-h-[20vh] w-full">
                        <span className="text-[23px] md:text-[28px] mx-3 md:mx-4">
                            WE{" "}
                        </span>{" "}
                        CHANGED{" "}
                        <span className="text-[23px] md:text-[28px] mx-3 md:mx-4">
                            THE{" "}
                        </span>
                        NAME!!
                    </h1>
                    {/* )} */}
                </div>

                {titles && (
                    <div className="px-2 mx-auto max-w-[1100px]">
                        <div className="flex flex-col md:flex-row md:justify-between items-center mx-auto">
                            <div className="flex-1 animate-fadeInLeft">
                                <div className="text-sm md:text-base px-3 tracking-wide">
                                    <h2 className="text-green-600 text-xl md:text-2xl font-bold">
                                        Our Story :
                                    </h2>
                                    <p className="text-slate-300 font-sans mt-2 first-letter:pl-5 antialiased">
                                        Big Brain Studio was formerly known as{" "}
                                        <span className="font-bold">
                                            {" "}
                                            Big Brain Pictures.{" "}
                                        </span>
                                        The company was founded in 2013 by{" "}
                                        <span className="font-bold">
                                            Auchara Kijkanjanas
                                        </span>
                                        , one of the pioneers in the Computer
                                        Graphic Industry in Thailand. For 20
                                        years of experience, her expertise and
                                        works were guaranteed by both
                                        International and Domestic awards for
                                        Animation Feature Film and VFX work.
                                    </p>
                                    <p className="text-slate-300 first-letter:pl-5 antialiased">
                                        At{" "}
                                        <span className="font-bold">
                                            Big Brain Studio
                                        </span>
                                        , We selectively assemble a team of
                                        creative, innovative and professional
                                        staff enabling us to initiate content
                                        design to meet quality demand and
                                        industry directions.
                                    </p>
                                    <h2 className="text-green-600 mt-5 text-xl md:text-2xl font-bold">
                                        Our Team :
                                    </h2>
                                    <p className="text-slate-300 mt-2 first-letter:pl-5 antialiased">
                                        We share the same mission to deliver the
                                        utmost creative content and produce
                                        animation films with innovative
                                        techniques through sustainable business
                                        practice while pacing global trends.
                                    </p>
                                </div>
                            </div>
                            {titles && (
                                <div className="flex-0 mb-10 max-w-[400px] mt-5 md:mt-0 mx-2 animate-fadeInRight">
                                    <img
                                        src={ptum}
                                        alt="ptum"
                                        loading="lazy"
                                        width={304}
                                        height={367}
                                        className="rounded-md w-full h-full"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Studio;
