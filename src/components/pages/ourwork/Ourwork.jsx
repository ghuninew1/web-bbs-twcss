import { useState, lazy } from "react";
import { cx, scrollTo } from "../../utils";
import { Title, Fallback } from "../../";
import { Link } from "react-router-dom";
import { workData } from "./WorkData";

const Ourwork = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const scrollToEven = () => {
        setOpen(false);
            if (window.innerWidth > 768) {
                scrollTo(573);
            } else {
                scrollTo(0);
            }
        };

    return (
        <div className=" min-h-[60vh] px-4 mb-10 max-w-[1920px] mx-auto flex flex-col items-center justify-center">
            <Title title="Our Work" />
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mt-10">
                {workData.map((work) => (
                    <div key={work.id} >
                        <Link to={work.link} 
                        onClick={scrollToEven}>
                            <img
                                className="h-auto max-w-full max-h-[300px] rounded-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-2xl hover:shadow-gray-400 shadow-md shadow-gray-600 ring-4 ring-transparent hover:ring-[#F2F2F2] hover:ring-opacity-50 animate-fadeInUp"
                                src={work.img}
                                alt={work.title}
                                loading="lazy"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ourwork;
