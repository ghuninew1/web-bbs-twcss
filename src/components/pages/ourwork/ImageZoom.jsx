import { useRef, useState } from "react";
import { cx } from "../../utils";
export const ImageZoom = ({ src, alt }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const imageRef = useRef(null);
    const zoomedImageRef = useRef(null);
    const originRef = useRef(null);
    const closingRef = useRef(false);

    const handleImageClick = () => {
        originRef.current = imageRef.current?.getBoundingClientRect();
        setIsZoomed(!isZoomed);
    };
    const animateZoom = (image) => {
        if (!image || !originRef.current) return;

        const origin = originRef.current;
        const target = image.getBoundingClientRect();
        if (!target.width || !target.height) return;

        image.animate([
            { transform: `translate(${origin.left + origin.width / 2 - target.left - target.width / 2}px, ${origin.top + origin.height / 2 - target.top - target.height / 2}px) scale(${origin.width / target.width}, ${origin.height / target.height})` },
            { transform: "translate(0, 0) scale(1)" },
        ], { duration: 300, easing: "ease-out" });
    };
    const handleCloseZoom = () => {
        if (closingRef.current) return;
        const image = zoomedImageRef.current;
        const origin = imageRef.current?.getBoundingClientRect();
        if (!image || !origin || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setIsZoomed(false);
            return;
        }

        closingRef.current = true;
        image.getAnimations().forEach((animation) => animation.cancel());
        const target = image.getBoundingClientRect();
        if (!target.width || !target.height) {
            closingRef.current = false;
            setIsZoomed(false);
            return;
        }
        const animation = image.animate([
            { transform: "translate(0, 0) scale(1)" },
            { transform: `translate(${origin.left + origin.width / 2 - target.left - target.width / 2}px, ${origin.top + origin.height / 2 - target.top - target.height / 2}px) scale(${origin.width / target.width}, ${origin.height / target.height})` },
        ], { duration: 300, easing: "ease-in", fill: "forwards" });
        animation.onfinish = () => {
            closingRef.current = false;
            setIsZoomed(false);
        };
    };

    return (
        <div className="flex flex-col justify-center items-center animate-fadeInRight">
            <img
                ref={imageRef}
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
                    className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 cursor-zoom-out"
                    onClick={handleCloseZoom}
                >
                    <img
                        ref={zoomedImageRef}
                        onLoad={(event) => animateZoom(event.currentTarget)}
                        className="rounded-2xl max-w-full h-auto max-h-full"
                        src={src}
                        alt={alt}
                    />
                </div>
            )}
        </div>
    );
};
