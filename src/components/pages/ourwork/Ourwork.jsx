import { scrollTo } from "../../utils";
import { Title } from "../../";
import { Link } from "react-router-dom";
import { workData } from "./WorkData";
import { useState } from "react";

const Ourwork = () => {
    const [highlight, setHighlight] = useState(null);

    const moveHighlight = (event) => {
        const item = event.currentTarget;
        const grid = item.closest("[data-work-grid]");
        const bounds = grid.getBoundingClientRect();
        const card = item.getBoundingClientRect();
        setHighlight({ x: card.left - bounds.left, y: card.top - bounds.top, width: card.width, height: card.height });
    };

    const scrollToEven = () => {
        if (window.innerWidth > 768) {
            scrollTo(573);
        } else {
            scrollTo(0);
        }
    };

    return (
        <div className=" min-h-[60vh] px-4 mb-10 max-w-[1920px] mx-auto flex flex-col items-center justify-center">
            <Title title="Our Work" />
            <div
                data-work-grid
                className="relative grid grid-cols-2 lg:grid-cols-5 gap-12 mt-10"
                onMouseLeave={() => setHighlight(null)}
                onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setHighlight(null);
                }}
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 rounded-2xl bg-[#00862f] transition-[transform,width,height,opacity] duration-300 ease-out motion-reduce:transition-none"
                    style={{
                        width: highlight ? highlight.width + 16 : 0,
                        height: highlight ? highlight.height + 16 : 0,
                        transform: `translate(${(highlight?.x ?? 0) - 8}px, ${(highlight?.y ?? 0) - 8}px)`,
                        opacity: highlight ? 1 : 0,
                    }}
                />
                {workData.map((work) => (
                    <div key={work.id} className="relative">
                        <Link to={work.link} onClick={scrollToEven} onMouseEnter={moveHighlight} onFocus={moveHighlight} className="inline-block rounded-2xl">
                            <img
                                className="h-auto max-w-full max-h-[300px] rounded-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-2xl hover:shadow-green-400 shadow-md shadow-gray-600 ring-4 ring-transparent hover:ring-[#00862f] hover:ring-opacity-50 animate-fadeInUp"
                                src={work.img}
                                alt={work.title}
                                loading="lazy"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ourwork;
