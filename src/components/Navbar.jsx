import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cx } from "./utils";
import logo from "../assets/logo.avif";
import { animateScroll } from "react-scroll";
import { Transition } from "@headlessui/react";

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

    const scrollTo = () => {
        setOpen(false);
        if (window.innerWidth > 768) {
            animateScroll.scrollTo(573, {
                duration: 200,
                delay: 0,
                smooth: true,
            });
        } else {
            animateScroll.scrollTo(0, {
                duration: 400,
                delay: 0,
                smooth: true,
            });
        }
    };

    return (
        <nav className="md:relative bg-black top-0 inset-x-0 h-auto py-1">
            <div className="max-w-full">
                <div className="flex md:justify-center md:items-center mx-auto">
                    <Link
                        to={"/"}
                        className="mr-0 md:mr-3 ml-1 md:ml-0 min-w-[40px] md:min-w-[60px] hover:scale-110 md:hover:scale-125 ease-out duration-200"
                    >
                        <img
                            className="h-[40px] w-full md:h-[60px]"
                            src={logo}
                            alt="Your Company"
                        />
                    </Link>
                    <div className="hidden md:block w-full md:max-w-[1000px]">
                        <div className="flex md:gap-2 justify-center items-center mx-auto tracking-wide antialiased ">
                            {navlinks.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    end={item.to === "/" ? true : false}
                                    onClick={scrollTo}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "transition animate-pulse"
                                            : isActive
                                            ? "text-slate-900 bg-[#d7742d] hover:bg-[#007700] hover:text-white rounded-md text-[17px] px-5 py-2 mr-2 font-medium  hover:translate-y-1 ease-out duration-300 text-center w-full"
                                            : " text-white hover:bg-[#007700] hover:text-slate-950 rounded-md text-[17px] px-5 py-2 mr-2 font-medium hover:translate-y-1 ease-out duration-300 text-center w-full"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 md:hidden">
                    {/* Mobile menu button*/}
                    <button
                        onClick={handleOpen}
                        className="inline-flex items-center justify-center rounded-lg hover:bg-[#00770065] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
            </div>
            <Transition
                show={open}
                as={"div"}
                enter="transition duration-[300ms] ease-out origin-top"
                enterFrom="scale-y-0 opacity-50"
                enterTo="scale-y-100"
                leave="transition duration-[300ms] ease-in origin-top"
                leaveFrom="scale-y-100"
                leaveTo="scale-y-0 opacity-50"
                className={cx(
                    "absolute top-[45px] inset-x-0 space-y-1 bg-[#000] flex flex-col md:hidden z-[35]  text-center tracking-wide antialiased"
                )}
            >
                {navlinks.map((item) => (
                    <NavLink
                        key={item.name}
                        onClick={scrollTo}
                        to={item.to}
                        end={item.to === "/" ? true : false}
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "transition animate-pulse"
                                : isActive
                                ? "text-slate-900 bg-[#d7742d] hover:bg-[#007700] hover:text-white rounded-lg px-3 py-2 text-[16px] font-bold hover:translate-y-1 ease-out duration-200"
                                : " text-gray-300 hover:bg-[#007700] hover:text-black rounded-lg px-3 py-2 text-[16px] font-medium  hover:translate-y-1 ease-out duration-200"
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </Transition>
        </nav>
    );
}
