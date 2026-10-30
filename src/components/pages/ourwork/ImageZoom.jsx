import { useState } from "react";
import { cx } from "../../utils";
export const ImageZoom = ({ src, alt }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };
    const handleCloseZoom = () => {
        setIsZoomed(false);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <img
                className={cx("h-auto max-w-full max-h-[500px] rounded-2xl cursor-zoom-in", isZoomed && "w-full")}
                src={src}
                alt={alt}
                onClick={handleImageClick}
                role="button"
                tabIndex={0}
                aria-expanded={isZoomed}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleImageClick();
                    } else if (event.key === "Escape" && isZoomed) {
                        handleCloseZoom();
                    }
                }}
                loading="lazy"
            />
            {isZoomed && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-zoom-out"
                    onClick={handleCloseZoom}
                >
                    <img
                        className="h-auto max-w-full max-h-full rounded-2xl animate-zoomIn"
                        src={src}
                        alt={alt}
                        loading="lazy"
                    />
                </div>
            )}
        </div>
    );
};
