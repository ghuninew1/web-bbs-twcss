import ServiceData from "./ServiceData.json";
import "./ServiceData.css";
import { cx } from "../../utils";
import { Title } from "../../";
import { useState } from "react";

const Service = () => {
    const [highlight, setHighlight] = useState(null);

    const moveHighlight = (event) => {
        const item = event.currentTarget;
        setHighlight({ left: item.offsetLeft, top: item.offsetTop, width: item.offsetWidth, height: item.offsetHeight });
    };

    return (
        <div className="flex flex-col mx-auto items-center justify-center min-h-[50vh] w-full animate-zoom">
            <Title title="Service" />
            <div className="service-main my-6 md:my-10">
                <div className="service-content" onMouseLeave={() => setHighlight(null)}>
                    <span
                        aria-hidden="true"
                        className="service-highlight"
                        style={{
                            width: highlight?.width ?? 0,
                            height: highlight?.height ?? 0,
                            transform: `translate(${highlight?.left ?? 0}px, ${highlight?.top ?? 0}px)`,
                            opacity: highlight ? 1 : 0,
                        }}
                    />
                    {ServiceData &&
                        ServiceData.map((item, idx) => (
                            <span
                                key={idx}
                                className={`service-item-${item.id} service-img animate-fadeInLeftDelay`}
                                onMouseEnter={moveHighlight}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    loading="lazy"
                                    className={cx(
                                        "transition-transform duration-200 ease-out transform hover:scale-125 "
                                    )}
                                />
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
