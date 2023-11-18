import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Suspense, useEffect, useState } from "react";
import Fallback from "./Fallback";
import Hader from "./Hader";
import Scroll from "./utils/ScrollListener";
import { cx } from "./utils";
import logo from "../assets/logo.gif";

const Layout = () => {
    const [active, setActive] = useState(false);
    const [isScrolling, setIsScrolling] = useState(true);
    const scroll = Scroll();

    useEffect(() => {
        if (scroll.y - scroll.lastY > 0) {
            if (scroll.y > 574 && scroll.lastY - scroll.y < 0) {
                setActive(true);
                setIsScrolling(false);
            }
        } else if (scroll.y < 576) {
            setActive(false);
            setIsScrolling(true);
        } else if (
            scroll.lastY - scroll.y > 0 &&
            scroll.lastY - scroll.y < 10 &&
            active
        ) {
            setActive(false);
        }

        return () => {
            // cleanup
        };
    }, [active, scroll.lastY, scroll.y]);

    return (
        <div className="relative min-h-[calc(100vh)] bg-black">
            <img
                src={logo}
                alt="logo"
                width={700}
                height={573}
                className={cx(
                    isScrolling ? "scale-100 " : "scale-0",
                    "hidden md:block w-full max-w-[700px] h-[573px] mx-auto duration-500 ease-in-out"
                )}
            />
            <Suspense fallback={<Fallback />}>
                <header
                    className={cx(
                        "z-[40] top-0 left-0 right-0 transition-all bg-black duration-[300ms] ease-out ",
                        isScrolling ? "sticky md:relative" : "sticky",
                        active ? "-translate-y-full" : "translate-y-0"
                    )}
                >
                    <Hader />
                    <Navbar />
                </header>

                <div className="relative min-h-[calc(100vh-235px)] md:min-h-[calc(100vh-250px)] pt-[50px] md:pt-[80px] overflow-hidden">
                    <Suspense fallback={<Fallback />}>
                        <Outlet />
                    </Suspense>
                </div>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Layout;
