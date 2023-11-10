import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cx } from "./utils";
import logo from "../assets/logo.webp";
import { animateScroll as scroll } from "react-scroll";

const navlinks = [
    { to: "/#home", name: "Home", hidden: false },
    { to: "/studio/#studio", name: "Studio", hidden: false },
    { to: "/jobs/#jobs", name: "Jobs", hidden: false },
    { to: "/service/#service", name: "Service", hidden: false },
    { to: "/news/#news", name: "News", hidden: false },
    { to: "/annoucement/#annoucement", name: "Annoucement", hidden: false },
    { to: "/contact/#contact", name: "Contact", hidden: false },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const scrollTo = () => {
        setOpen(false);
        if (window.innerWidth > 768) {
            scroll.scrollTo(573, {
                duration: 400,
                delay: 0,
                smooth: "easeInCubic",
            });
        } else {
            scroll.scrollTo(0, {
                duration: 400,
                delay: 0,
                smooth: "easeInCubic",
            });
        }
    };

    return (
        <nav className='bg-black relative  md:relative top-0 inset-x-0 z-10 h-[50px] md:h-[70px] animate-fade'>
            <div className='mx-auto w-full '>
                <div className='relative flex items-center justify-between '>
                    <div className='flex flex-1  justify-start items-stretch md:justify-center md:items-center '>
                        <span className='flex flex-shrink-0 items-start md:mr-2 ml-1  hover:scale-110 ease-out duration-200'>
                            <Link to={"/"}>
                                <img
                                    className='h-[40px] md:h-[60px]'
                                    src={logo}
                                    alt='Your Company'
                                />
                            </Link>
                        </span>
                        <div className='hidden md:block '>
                            <div className='flex gap-2 justify-center  items-center mx-auto '>
                                {navlinks.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.to}
                                        end={item.to === "/" ? true : false}
                                        onClick={scrollTo}
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "transition-all animate-pulse"
                                                : isActive
                                                ? "text-slate-900 bg-[#d7742d] hover:bg-[#007700] hover:text-white ml-2 rounded-md text-[17px] px-5 py-2 font-medium  hover:translate-x-1 ease-out duration-300"
                                                : " text-white hover:bg-[#007700] hover:text-slate-950 ml-2 rounded-md text-[17px] px-5 py-2 font font-medium  hover:translate-x-1 ease-out duration-300"
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center md:hidden'>
                        {/* Mobile menu button*/}
                        <button
                            onClick={handleOpen}
                            className='inline-flex items-center justify-center rounded-lg text-gray-400 hover:bg-[#00770065] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        >
                            <span className='h-8 w-8 m-1'>
                                {open ? (
                                    <XMarkIcon color='red' />
                                ) : (
                                    <Bars3Icon color='white' />
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={cx(
                    open ? "opacity-100 scale-y-100" : "opacity-5 scale-y-0",
                    "absolute space-y-1 top-[50px] inset-x-0 py-2 bg-[#000] flex flex-col ease-out duration-300 origin-top md:hidden z-[999] text-center "
                )}
            >
                {open &&
                    navlinks.map((item) => (
                        <NavLink
                            key={item.name}
                            onClick={scrollTo}
                            to={item.to}
                            end={item.to === "/" ? true : false}
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "transition-all animate-pulse"
                                    : isActive
                                    ? "text-slate-900 bg-[#d7742d] hover:bg-[#007700] hover:text-white rounded-lg px-3 py-2 text-[16px] font-bold hover:translate-x-2 ease-out duration-200"
                                    : " text-gray-300 hover:bg-[#007700] hover:text-white rounded-lg px-3 py-2 text-[16px] font-medium  hover:translate-x-2 ease-out duration-200"
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
            </div>
        </nav>
    );
}
