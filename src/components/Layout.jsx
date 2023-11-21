import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Suspense, useEffect, useState, memo } from "react";
import Fallback from "./Fallback";
import Hader from "./Hader";
import Scroll from "./utils/ScrollListener";
import { cx } from "./utils";
import { useIntersectionObserver } from "../hook/useIntersectionObserver";

const Layout = () => {
    const [active, setActive] = useState(false);
    const scroll = Scroll();

    const [ref, entry] = useIntersectionObserver({
        threshold: 0.1,
        root: null,
        rootMargin: "0px",
    });
    const onScreen = entry?.isIntersecting;

    useEffect(() => {
        if (scroll.y - scroll.lastY > 0) {
            if (!onScreen && scroll.y > 573) {
                setActive(true);
            }
        } else {
            if (!onScreen && active) {
                setActive(false);
            }
        }

        return () => {};
    }, [active, onScreen, scroll.lastY, scroll.y]);

    return (
        <div className="relative min-h-[calc(100vh)] bg-black">
            <div
                className="hidden md:block h-[573px] w-[700px] mx-auto overflow-hidden"
                ref={ref}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={700}
                    height={573}
                    className={cx(
                        onScreen ? "scale-100 " : "scale-0",
                        "hidden md:block w-full max-w-[700px] h-[573px] mx-auto duration-500 ease-in-out"
                    )}
                >
                    <source src="/img/logo.webm" type="video/webm" />
                    <source src="/img/logo.mp4" type="video/mp4" />
                </video>
            </div>

            <Suspense fallback={<Fallback />}>
                <header
                    className={cx(
                        "z-[40] top-0 left-0 right-0 transition-all bg-black duration-[400ms] ",
                        onScreen ? "sticky md:relative" : "sticky",
                        active
                            ? "md:-translate-y-full delay-200 ease-in"
                            : "translate-y-0 ease-out"
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
const MemoLayout = memo(Layout);

export default MemoLayout;
