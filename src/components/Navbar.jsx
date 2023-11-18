import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cx, scrollTo } from "./utils";
import logo from "../assets/logo.avif";

const navlinks = [
    { to: "/", name: "Home", hidden: false },
    { to: "/studio", name: "Studio", hidden: false },
    { to: "/jobs", name: "Jobs", hidden: false },
    { to: "/service", name: "Service", hidden: false },
    { to: "/news", name: "News", hidden: false },
    { to: "/annoucement", name: "Annoucement", hidden: false },
    { to: "/contact", name: "Contact", hidden: false },
];

export default function Navbar() {
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
        <nav className="md:relative bg-black py-[5px] px-1">
            <div className="flex justify-between md:justify-center items-center">
                <div className="hidden md:block w-full">
                    <div className="flex items-center justify-center max-w-[1100px] mx-auto gap-1">
                        <Link
                            to={"/"}
                            className="hidden md:inline-block hover:scale-125 ease-out duration-200 transition md:min-w-[65px] md:min-h-[65px] h-[65px] w-[65px] mx-2 animate-zoom"
                        >
                            <img
                                src={logo}
                                alt="Your Company"
                                className="h-full w-full"
                                width={65}
                                height={65}
                            />
                        </Link>
                        {navlinks.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                end={item.to === "/" ? true : false}
                                onClick={scrollToEven}
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "transition animate-pulse"
                                        : isActive
                                        ? "inline-flex text-slate-900 bg-[#d7742d] hover:bg-[#007700] hover:text-white rounded-lg px-6 py-[10px] text-[18px] font-[600] hover:translate-y-1 ease-out duration-300 text-center tracking-wide antialiased mx-auto animate-fade"
                                        : "inline-flex text-white hover:bg-[#007700] hover:text-slate-950 rounded-lg px-6 py-[10px] text-[18px] font-[600] hover:translate-y-1 ease-out duration-300 text-center tracking-wide antialiased mx-auto animate-fade"
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <Link
                    to={"/"}
                    className="md:hidden hover:scale-125 ease-out duration-200 transition-all ml-1 min-w-[40px] min-h-[40px] animate-zoom"
                >
                    <img
                        src={logo}
                        alt="Your Company"
                        className="h-[40px] w-[40px]"
                        width={40}
                        height={40}
                    />
                </Link>
                {/* Mobile menu button*/}
                <button
                    onClick={handleOpen}
                    className="md:hidden inline-flex items-center justify-center rounded-lg hover:bg-[#00770065] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white animate-fade"
                >
                    <span className="h-8 w-8 m-1">
                        {open ? (
                            <XMarkIcon color="red" />
                        ) : (
                            <Bars3Icon color="white" />
                        )}
                    </span>
                </button>
            </div>
            <div
                className={cx(
                    "absolute top-[50px] inset-x-0 space-y-1 pb-2 bg-black flex flex-col md:hidden z-[35] text-center tracking-wide antialiased transition-all ease-out duration-300 origin-top border-b border-[#2f2f2f]",
                    open ? "scale-y-100" : "scale-y-0"
                )}
            >
                {navlinks.map((item) => (
                    <NavLink
                        key={item.name}
                        onClick={scrollToEven}
                        to={item.to}
                        end={item.to === "/" ? true : false}
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "transition animate-pulse"
                                : isActive
                                ? "text-slate-900 bg-[#d7742d] hover:bg-[#007700] hover:text-white rounded-lg px-3 py-3 text-base font-bold hover:translate-y-1 ease-out duration-200"
                                : " text-gray-300 hover:bg-[#007700] hover:text-black rounded-lg px-3 py-3 text-base font-[600]  hover:translate-y-1 ease-out duration-200"
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
