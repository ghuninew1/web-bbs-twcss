import { Outlet, useLocation } from "react-router";
import { Navbar, Fallback, Footer, Header } from "./";
import { Suspense, useEffect, useRef, useState, memo } from "react";
import Scroll from "./utils/ScrollListener";
import { cx } from "./utils";
import { useIntersectionObserver } from "../hook/useIntersectionObserver";

const Layout = () => {
    const [active, setActive] = useState(false);
    const { pathname } = useLocation();
    const bottomAlignedFooter = ["/", "/contact", "/jobs", "/annoucement", "/service"].includes(pathname.replace(/\/+$/, "") || "/");
    const scroll = Scroll();
    const videoRef = useRef(null);

    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    });
    const onScreen = entry?.isIntersecting;

    useEffect(() => {
        const video = videoRef.current;
        if (!video || onScreen === undefined) return;

        if (onScreen) {
            video.play().catch(() => {});
        } else {
            video.pause();
        }
    }, [onScreen]);

    useEffect(() => {
        if (window.innerWidth < 768) {
            if (scroll.y <= 50 || scroll.y < scroll.lastY) {
                setActive(false);
            } else if (scroll.y > scroll.lastY) {
                setActive(true);
            }
            return;
        }
        if (scroll.y - scroll.lastY > 0) {
            if (!onScreen && scroll.y > 573) {
                setActive(true);
            }
        } else {
            if (!onScreen && active) {
                setActive(false);
            }
        }

    }, [active, onScreen, scroll.lastY, scroll.y]);

    return (
        <div className={cx("relative bg-black overflow-hidden", bottomAlignedFooter ? "flex min-h-dvh md:min-h-[calc(100dvh+573px)] flex-col" : "min-h-screen")}>
            <div
                className="hidden md:block h-[573px] w-[700px] mx-auto overflow-hidden"
                ref={ref}
            >
                <video
                    ref={videoRef}
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

                <div className="h-0 md:h-[120px] lg:h-[145px]">
                <header
                    className={cx(
                        "site-header z-[40] top-0 left-0 right-0 transition-all bg-black duration-[300ms]",
                        onScreen ? "fixed md:relative" : "fixed",
                        active
                            ? "-translate-y-full delay-200 ease-in"
                            : "translate-y-0 ease-out"
                    )}
                >
                    <Header />
                    <Navbar />
                </header>
                </div>

                <div className={cx(
                    "relative pt-[50px] md:pt-[80px] overflow-hidden",
                    bottomAlignedFooter ? "flex-1" : "min-h-[calc(100vh-235px)] md:min-h-[calc(100vh-250px)]"
                )}>
                    <Suspense fallback={<Fallback />}>
                        <Outlet />
                    </Suspense>
                </div>
                <Footer />
        </div>
    );
};
const MemoLayout = memo(Layout);

export default MemoLayout;
