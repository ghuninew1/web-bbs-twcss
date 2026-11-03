import { useRef, useState } from "react";
import { NavLink, Link } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cx, scrollTo } from "./utils";
import logo from "../assets/logo.avif";

const navlinks = [
    { to: "/", name: "Home", hidden: false },
    { to: "/studio", name: "Studio", hidden: false },
    { to: "/ourwork", name: "Ourwork", hidden: false },
    { to: "/service", name: "Service", hidden: false },
    { to: "/news", name: "News", hidden: false },
    { to: "/jobs", name: "Jobs", hidden: false },
    { to: "/annoucement", name: "Annoucement", hidden: false },
    { to: "/contact", name: "Contact", hidden: false },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navItemsRef = useRef(null);
    const [highlight, setHighlight] = useState(null);

    const moveHighlight = (event) => {
        const container = navItemsRef.current;
        if (!container) return;
        const item = event.currentTarget;
        setHighlight({ left: item.offsetLeft, width: item.offsetWidth, visible: true });
    };
    const hideHighlight = () => setHighlight((current) => current && { ...current, visible: false });

    const handleOpen = () => {
        setOpen((prev) => !prev);
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
        <nav className="w-full" role="navigation">
            <div className="flex justify-between md:justify-center items-center px-1 py-[5px]">
                <div className="hidden md:block w-full">
                    <div
                        ref={navItemsRef}
                        onMouseLeave={hideHighlight}
                        onBlur={(event) => {
                            if (!event.currentTarget.contains(event.relatedTarget)) hideHighlight();
                        }}
                        className="relative flex justify-center items-center gap-1 mx-auto max-w-[1100px]"
                    >
                        <span
                            aria-hidden="true"
                            className="left-0 absolute bg-[#007700] rounded-lg transition-[transform,width,opacity] motion-reduce:transition-none duration-300 ease-out pointer-events-none"
                            style={{
                                height: "47px",
                                width: highlight?.width ?? 0,
                                transform: `translateX(${highlight?.left ?? 0}px)`,
                                opacity: highlight?.visible ? 1 : 0,
                            }}
                        />
                        <Link
                            to={"/"}
                            className="hidden md:inline-block mx-2 w-[65px] md:min-w-[65px] h-[65px] md:min-h-[65px] hover:scale-125 transition animate-zoom duration-200 ease-out"
                        >
                            <img
                                src={logo}
                                alt="Your Company"
                                className="w-full h-full"
                                width={65}
                                height={65}
                            />
                        </Link>
                        {navlinks.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                end={item.to === "/"}
                                onClick={scrollToEven}
                                onMouseEnter={moveHighlight}
                                onFocus={moveHighlight}
                                className={({ isActive }) =>
                                    isActive
                                        ? "relative inline-flex text-slate-900 bg-[#d7742d] rounded-lg px-6 py-[10px] text-[18px] font-[600] transition-[color] duration-300 text-center tracking-wide antialiased mx-auto"
                                        : "relative inline-flex text-white hover:text-slate-950 focus:text-slate-950 rounded-lg px-6 py-[10px] text-[18px] font-[600] transition-colors duration-300 text-center tracking-wide antialiased mx-auto"
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <Link
                    to={"/"}
                    className="md:hidden ml-1 min-w-[40px] min-h-[40px] hover:scale-125 transition-all animate-zoom duration-200 ease-out"
                >
                    <img
                        src={logo}
                        alt="Your Company"
                        className="w-[40px] h-[40px]"
                        width={40}
                        height={40}
                    />
                </Link>
                {/* Mobile menu button*/}
                <button
                    aria-label="Open Menu"
                    onClick={handleOpen}
                    className="md:hidden inline-flex justify-center items-center hover:bg-[#00770065] rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset animate-fade"
                >
                    <span className="m-1 w-8 h-8">
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
                    "absolute top-full inset-x-0 max-h-[calc(100dvh-50px)] overflow-y-auto space-y-1 pb-2 bg-black flex flex-col md:hidden z-[35] text-center tracking-wide antialiased transition-all ease-out duration-300 origin-top border-b border-[#2f2f2f] py-1",
                    open ? "scale-y-100" : "scale-y-0"
                )}
            >
                {navlinks.map((item) => (
                    <NavLink
                        key={item.name}
                        onClick={scrollToEven}
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                            isActive
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
