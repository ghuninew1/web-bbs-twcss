import { Layout, Fallback } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Activity, useLayoutEffect, useRef, useState } from "react";
import { Outlet, useLocation, useViewTransitionState } from "react-router-dom";
import { restoreOurworkScroll } from "./components/pages/ourwork/scrollPosition";
import {
    Home,
    Contact,
    Studio,
    Annoucement,
    Service,
    Jobs,
    News,
    Card,
    CardPnote,
    CardPpang,
    CardPtum,
    CardPtumOnly,
    CardPtood,
    CardPbirdHanako,
    CardPkaewHanako,
    CardPpangHanako,
    CardPtoodOnly,
    CardPtumMax,
    CardPpangMax,
    CardPnoteMax,
    Ourwork,
    OurworkBlinkblink,
    OurworkGiftofTheLand,
    OurworkRpf,
    OurworkWisdom1,
    OurworkMythophobiaOnlineGame,
    OurworkNakaDeSalon,
    OurworkWisdom2,
    OurworkEGATSmartGrid,
    OurworkTanLand,
    OurworkConan_O,
    OurworkRoyalChitralada,
    OurworkYala,
    OurworkPTTOR,
    // OurworkBankOfThailand,
    OurworkDepartmentOfLand,
    OurworkKungkoo,
} from "./components/pages";

const cachedPages = [
    ["/", Home], ["/jobs", Jobs],
    ["/service", Service], ["/news", News], ["/annoucement", Annoucement],
    ["/contact", Contact], ["/ourwork", Ourwork],
];

const CachedPages = () => {
    const { pathname } = useLocation();
    const current = pathname.replace(/\/+$/, "") || "/";
    const previousPath = useRef(current);
    const pendingScroll = useRef(null);
    const isTransitioning = useViewTransitionState(current);
    const [visited, setVisited] = useState(() => new Set([current]));
    if (!visited.has(current) && cachedPages.some(([path]) => path === current)) {
        setVisited(new Set([...visited, current]));
    }

    useLayoutEffect(() => {
        if (previousPath.current !== current) {
            pendingScroll.current = previousPath.current === "/ourwork" && current.startsWith("/ourwork/") ? current : null;
            if (current === "/ourwork" && previousPath.current.startsWith("/ourwork/")) {
                restoreOurworkScroll();
            }
            previousPath.current = current;
        }
        if (pendingScroll.current === current && (window.innerWidth < 768 || !isTransitioning)) {
            pendingScroll.current = null;
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            window.scrollTo({
                top: window.innerWidth < 768 ? 0 : 573,
                behavior: window.innerWidth < 768 || reducedMotion ? "instant" : "smooth",
            });
        }
    }, [current, isTransitioning]);

    return (
        <>
            {cachedPages.map(([path, Page]) => visited.has(path) && (
                <Activity key={path} mode={current === path ? "visible" : "hidden"}>
                    <Page active={current === path} />
                </Activity>
            ))}
            <Outlet />
        </>
    );
};

const App = () => {
    const pages = [
        { path: "/", element: <></> },
        { path: "/studio", element: <Studio /> },
        { path: "/jobs", element: <></> },
        { path: "/service", element: <></> },
        { path: "/news", element: <></> },
        { path: "/annoucement", element: <></> },
        { path: "/contact", element: <></> },
        { path: "/ourwork", children: [
        { index: true, element: <></> },
        { path: "/ourwork/blinkblink", element: <OurworkBlinkblink /> },
        { path: "/ourwork/giftoftheland", element: <OurworkGiftofTheLand /> },
        { path: "/ourwork/rpf", element: <OurworkRpf /> },
        { path: "/ourwork/wisdom1", element: <OurworkWisdom1 /> },
        { path: "/ourwork/mythophobiaonlinegame", element: <OurworkMythophobiaOnlineGame /> },
        { path: "/ourwork/nakadesalon", element: <OurworkNakaDeSalon /> },
        { path: "/ourwork/wisdom2", element: <OurworkWisdom2 /> },
        { path: "/ourwork/egatsmartgrid", element: <OurworkEGATSmartGrid /> },
        { path: "/ourwork/tanland", element: <OurworkTanLand /> },
        { path: "/ourwork/conan_o", element: <OurworkConan_O /> },
        { path: "/ourwork/royalchitralada", element: <OurworkRoyalChitralada /> },
        { path: "/ourwork/yala", element: <OurworkYala /> },
        { path: "/ourwork/ptt-or", element: <OurworkPTTOR /> },
        // { path: "/ourwork/bankofthailand", element: <OurworkBankOfThailand /> },
        { path: "/ourwork/departmentofland", element: <OurworkDepartmentOfLand /> },
        { path: "/ourwork/kungkoo", element: <OurworkKungkoo /> },
        ] },
    ];
    const routes = [
        {
            path: "/",
            element: <Layout />,
            errorElement: <Fallback />,
            children: [{ element: <CachedPages />, children: pages }],
            
        },
        { path: "/card", element: <Card /> },
        { path: "/cardPnote", element: <CardPnote /> },
        { path: "/cardPpang", element: <CardPpang /> },
        { path: "/cardPtum", element: <CardPtum /> },
        { path: "/cardPtumOnly", element: <CardPtumOnly /> },
        { path: "/cardPtood", element: <CardPtood /> },
        { path: "/cardPbirdHanako", element: <CardPbirdHanako /> },
        { path: "/cardPkaewHanako", element: <CardPkaewHanako /> },
        { path: "/cardPpangHanako", element: <CardPpangHanako /> },
        { path: "/cardPtoodOnly", element: <CardPtoodOnly /> },
        { path: "/cardPtumMax", element: <CardPtumMax /> },
        { path: "/cardPpangMax", element: <CardPpangMax /> },
        { path: "/cardPnoteMax", element: <CardPnoteMax /> },
    ];
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default App;
