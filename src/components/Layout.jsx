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
    const [banner, setBanner] = useState(true);
    const scroll = Scroll();

    useEffect(() => {
        if (
            scroll.y - scroll.lastY > 0 &&
            scroll.y - scroll.lastY < 10 &&
            !active
        ) {
            if (scroll.y > 576) {
                setActive(true);
                setBanner(false);
            }
        } else if (scroll.y < 576) {
            setActive(false);
            setBanner(true);
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
        <div className="relative w-screen min-h-[calc(100vh)] bg-black">
            <img
                src={logo}
                alt="logo"
                className={cx(
                    banner ? "scale-100 " : "scale-0",
                    "hidden md:block w-full max-w-[700px] h-[573px] mx-auto transition-all duration-500 ease-in-out transform "
                )}
            />
            <Suspense fallback={<Fallback />}>
                <header
                    className={cx(
                        banner ? "fixed md:relative" : "sticky ",
                        "z-[40] top-0 inset-x-0 w-ful transition-all bg-black duration-[400ms]",
                        active
                            ? "-translate-y-full ease-in delay-[300ms] "
                            : "translate-y-0 ease-out delay-[0ms]"
                    )}
                >
                    <Hader />
                    <Navbar />
                </header>

                <div className="relative w-full min-h-[calc(100vh-179px)] md:min-h-[calc(100vh-235px)] pt-[50px] md:pt-[100px] overflow-hidden">
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
