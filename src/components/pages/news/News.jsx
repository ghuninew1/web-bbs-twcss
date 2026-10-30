import { lazy, memo, Suspense, useLayoutEffect, useRef, useState } from "react";
import { dataNews } from "./NewsData";
import { cx } from "../../utils";
import { Title, ToTop, Fallback } from "../../";

const NewsIframe = lazy(() => import("./NewsIframe"));
const Model = lazy(() => import("./Model"));

const NewsItem = lazy(() => import("./NewsItem"));

const News = ({ active = true }) => {
    const [image, setImage] = useState(0);
    const [showIframe, setShowIframe] = useState(null);
    const [highlight, setHighlight] = useState(null);
    const sourceImage = useRef(null);
    const savedScroll = useRef(null);
    const restoreScroll = useRef(false);

    const moveHighlight = (event) => {
        const item = event.currentTarget;
        const bounds = item.parentElement.getBoundingClientRect();
        const card = item.getBoundingClientRect();
        setHighlight({ x: card.left - bounds.left, y: card.top - bounds.top, width: card.width, height: card.height, visible: true });
    };
    const hideHighlight = () => setHighlight((current) => current && { ...current, visible: false });

    useLayoutEffect(() => {
        if (active && image === 0 && restoreScroll.current) {
            if (window.innerWidth < 768 && savedScroll.current !== null) {
                window.scrollTo({ top: savedScroll.current, behavior: "instant" });
            }
            savedScroll.current = null;
            restoreScroll.current = false;
        }
    }, [active, image]);

    const handleImage = (item, index, source) => {
        if (item?.toString().startsWith("http")) {
            setShowIframe(item);
        } else {
            if (window.innerWidth < 768) savedScroll.current = window.scrollY;
            sourceImage.current = source;
            setImage(index);
        }
    };

    const handleClose = () => {
        if (image !== 0) restoreScroll.current = true;
        setImage(0);
        setShowIframe(null);
    };

    return (
        <div className="flex flex-col justify-center items-center mx-auto px-2 pt-[30px] md:pt-[0px] w-full max-w-[1100px] min-h-screen">
            
            <Title title="News" />

            {image === 0 && !showIframe && <ToTop />}

            {/* Image Modal */}
            <div
                className={cx("fixed top-0 left-0 right-0 h-full z-50 w-screen", image === 0 && "hidden")}
            >
                <Suspense fallback={<Fallback />}>
                    <Model
                        indexImg={image}
                        handlClose={handleClose}
                        sourceImage={sourceImage}
                    />
                </Suspense>
            </div>

            {/* Iframe Modal */}
            <div
                className={cx(
                    "fixed z-50 top-0 left-0 right-0 h-full bg-black bg-opacity-50 transition-all duration-500 ease-in-out transform origin-center",
                    showIframe
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                )}
            >
                {active && showIframe && (
                    <Suspense fallback={<Fallback />}>
                        <NewsIframe
                            src={showIframe}
                            handlClose={handleClose}
                        />
                    </Suspense>
                )}
            </div>

            {/* News */}
            <div className="relative flex flex-col items-center w-full" onMouseLeave={hideHighlight} onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) hideHighlight();
            }}>
                <span aria-hidden="true" className="top-0 left-0 absolute bg-[#123b24]/40 rounded-lg transition-[transform,width,height,opacity] motion-reduce:transition-none duration-300 ease-out pointer-events-none" style={{
                    width: highlight?.width ?? 0,
                    height: highlight?.height ?? 0,
                    transform: `translate(${highlight?.x ?? 0}px, ${highlight?.y ?? 0}px)`,
                    opacity: highlight?.visible ? 1 : 0,
                }} />
                {dataNews.map((item, index) => (
                    <NewsItem
                        key={item.id}
                        item={item}
                        index={index}
                        onReadMore={handleImage}
                        onHighlight={moveHighlight}
                    />
                ))}
            </div>
        </div>
    );
};

const memoNews = memo(News);

export { memoNews as News };
