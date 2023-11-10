import PropTypes from "prop-types";
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
            if (scroll.y > 573) {
                setActive(true);
                setBanner(false);
            }
        } else if (scroll.y < 573) {
            setActive(false);
            setBanner(true);
        } else {
            setActive(false);
        }
    }, [scroll.lastY, scroll.y]);
    return (
        <>
            <div className='relative w-screen min-h-[calc(100vh)] pt-0 bg-black'>
                <img
                    src={logo}
                    alt='logo'
                    className='hidden md:block relative top-0 left-0 w-full max-w-[700px] h-[573px] mx-auto z-0 animate-zoomIn'
                />
                <Suspense fallback={<Fallback />}>
                    <header
                        className={cx(
                            banner ? "fixed md:relative" : "sticky md:sticky ",
                            "top-0 left-0 z-50 w-ful animate-fade",
                            active
                                ? "translate-y-[-100%] transition-all duration-400 ease-in transform  w-full z-40"
                                : "translate-y-0 transition-all duration-400 ease-out transform w-full z-40 "
                        )}
                    >
                        <Hader />
                        <Navbar />
                    </header>

                    <div className='relative w-full flex flex-col items-center min-h-[calc(100vh-179px)] md:min-h-[calc(100vh-235px)] pt-[50px] md:pt-[100px]'>
                        <Suspense fallback={<Fallback />}>
                            <Outlet />
                        </Suspense>
                    </div>
                    <Footer />
                </Suspense>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
