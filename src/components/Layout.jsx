import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Suspense, useEffect, useState } from "react";
import Fallback from "./Fallback";
import Hader from "./Hader";
import Scroll from "./ScrollListener";
import { cx } from "./utils";
import logo from "../assets/logo.gif";

const Layout = () => {
    const [active, setActive] = useState(false);
    const [banner, setBanner] = useState(true);
    const scroll = Scroll();

    useEffect(() => {
        if (scroll.lastY === scroll.y) {
            return;
        }
        if (scroll.y - scroll.lastY > 0) {
            if (scroll.y > 576) {
                setActive(true);
                setBanner(false);
            }
        } else if (scroll.y < 576) {
            setActive(false);
            setBanner(true);
        } else {
            setActive(false);
        }
    }, [scroll.lastY, scroll.y]);

    return (
        <div className="relative w-screen min-h-[calc(100vh)] bg-black">
            <img
                src={logo}
                alt="logo"
                className="hidden md:block relative top-0 left-0 w-full max-w-[700px] h-[573px] mx-auto z-0 animate-zoomIn"
            />
            <Suspense fallback={<Fallback />}>
                <header
                    className={cx(
                        banner ? "fixed md:relative" : "sticky",
                        "top-0 inset-x-0 z-[50] w-ful transform transition duration-[300ms]",
                        active
                            ? "-translate-y-full ease-in"
                            : "translate-y-0  ease-out"
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
