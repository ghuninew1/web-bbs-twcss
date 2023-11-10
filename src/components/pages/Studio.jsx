import { useState, useEffect } from "react";
import ptum from "../../assets/ptum.webp";
import { cx } from "../utils";

const Studio = () => {
    const [titles, setTitles] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setTitles(true);
        }, 2000);
        return () => clearTimeout(timer1);
    }, []);

    return (
        <div>
            <div className=' pt-[30px] md:pt-[40px]'>
                {!titles ? (
                    <div
                        className={cx(
                            titles ? "animate-zoomOut" : "animate-zoomIn",
                            "flex justify-center items-center h-[40vh] w-full"
                        )}
                    >
                        <h1 className='text-orange-500 text-[40px] md:text-[50px] font-bold font-font1'>
                            <span className='text-[25px] md:text-[35px]'>
                                WE{" "}
                            </span>{" "}
                            CHANGED{" "}
                            <span className='text-[25px] md:text-[35px]'>
                                THE{" "}
                            </span>
                            NAME!!
                        </h1>
                    </div>
                ) : (
                    <div className='px-4 mx-auto max-w-[1100px] animate-fade '>
                        <div className='flex flex-col md:flex-row md:justify-between items-center mx-auto'>
                            <div className='flex-1'>
                                <div className='text-sm md:text-base px-3'>
                                    <h2 className='text-green-600 text-2xl font-bold'>
                                        Our Story :
                                    </h2>
                                    <p className='text-slate-300 font-sans mt-2 first-letter:pl-5'>
                                        Big Brain Studio was formerly known as{" "}
                                        <span className='font-bold'>
                                            {" "}
                                            Big Brain Pictures.{" "}
                                        </span>
                                        The company was founded in 2013 by{" "}
                                        <span className='font-bold'>
                                            Auchara Kijkanjanas
                                        </span>
                                        , one of the pioneers in the Computer
                                        Graphic Industry in Thailand. For 20
                                        years of experience, her expertise and
                                        works were guaranteed by both
                                        International and Domestic awards for
                                        Animation Feature Film and VFX work.
                                    </p>
                                    <p className='text-slate-300 first-letter:pl-5'>
                                        At{" "}
                                        <span className='font-bold'>
                                            Big Brain Studio
                                        </span>
                                        , We selectively assemble a team of
                                        creative, innovative and professional
                                        staff enabling us to initiate content
                                        design to meet quality demand and
                                        industry directions.
                                    </p>
                                    <h2 className='text-green-600 mt-5  text-2xl font-bold'>
                                        Our Team :
                                    </h2>
                                    <p className='text-slate-300 mt-2 first-letter:pl-5'>
                                        We share the same mission to deliver the
                                        utmost creative content and produce
                                        animation films with innovative
                                        techniques through sustainable business
                                        practice while pacing global trends.
                                    </p>
                                </div>
                            </div>
                            <div className='flex-0 mb-10'>
                                <div className='max-w-[400px] mt-5 md:mt-0 mx-2'>
                                    <img
                                        src={ptum}
                                        alt='ptum'
                                        className='w-full rounded-md'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Studio;
