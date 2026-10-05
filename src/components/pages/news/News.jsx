import { lazy, memo, Suspense, useState } from "react";
import { dataNews } from "./NewsData";
import { cx } from "../../utils";
import { Title, ToTop, Fallback } from "../../";

const NewsIframe = lazy(() => import("./NewsIframe"));
const Model = lazy(() => import("./Model"));

const NewsItem = lazy(() => import("./NewsItem"));

const News = () => {
    const [image, setImage] = useState(0);
    const [showIframe, setShowIframe] = useState(null);

    const handleImage = (item, index) => {
        if (item?.toString().startsWith("http")) {
            setShowIframe(item);
        } else {
            setImage(index);
        }
    };

    const handleClose = () => {
        setImage(0);
        setShowIframe(null);
    };

    return (
        <div className="pt-[30px] md:pt-[0px] px-2 max-w-[1100px] min-h-screen w-full flex flex-col mx-auto items-center justify-center">
            
            <Title title="News" />

            {image === 0 && !showIframe && <ToTop />}

            {/* Image Modal */}
            <div
                className={cx(
                    "fixed top-0 left-0 right-0 h-full z-50 w-screen bg-black bg-opacity-50 transition-all duration-500 ease-in-out transform",
                    image !== 0
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                )}
            >
                <Suspense fallback={<Fallback />}>
                    <Model
                        indexImg={image}
                        handlClose={handleClose}
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
                {showIframe && (
                    <Suspense fallback={<Fallback />}>
                        <NewsIframe
                            src={showIframe}
                            handlClose={handleClose}
                        />
                    </Suspense>
                )}
            </div>

            {/* News */}
            {dataNews.map((item, index) => (
                <NewsItem
                    key={item.id}
                    item={item}
                    index={index}
                    onReadMore={handleImage}
                />
            ))}
        </div>
    );
};

const memoNews = memo(News);

export { memoNews as News };