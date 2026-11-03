import { Title } from "../../";
import { Link } from "react-router";
import { workData } from "./WorkData";
import { useEffect, useState } from "react";
import { saveOurworkScroll } from "./scrollPosition";

let hasVisitedOurwork = false;

const Ourwork = ({ active = true }) => {
    const [highlight, setHighlight] = useState(null);
    const [animateEntrance, setAnimateEntrance] = useState(() => !hasVisitedOurwork);

    if (!active && animateEntrance) {
        setAnimateEntrance(false);
    }

    useEffect(() => {
        hasVisitedOurwork = true;
        const timer = window.setTimeout(() => setAnimateEntrance(false), 800);
        return () => window.clearTimeout(timer);
    }, []);

    const moveHighlight = (event) => {
        const item = event.currentTarget;
        const grid = item.closest("[data-work-grid]");
        const bounds = grid.getBoundingClientRect();
        const card = item.getBoundingClientRect();
        setHighlight({ x: card.left - bounds.left, y: card.top - bounds.top, width: card.width, height: card.height, visible: true });
    };
    const hideHighlight = () => setHighlight((current) => current && { ...current, visible: false });

    return (
        <div className="flex flex-col justify-center items-center mx-auto mb-10 px-4 max-w-[1920px] min-h-[60vh]">
            <Title title="Our Work" />
            <div
                data-work-grid
                className="relative gap-12 grid grid-cols-2 md:grid-cols-5 mt-10"
                onMouseLeave={hideHighlight}
                onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) hideHighlight();
                }}
            >
                <span
                    aria-hidden="true"
                    className="top-0 left-0 absolute bg-[#00862f] rounded-2xl transition-[transform,width,height,opacity] motion-reduce:transition-none duration-300 ease-out pointer-events-none"
                    style={{
                        width: highlight ? highlight.width + 16 : 0,
                        height: highlight ? highlight.height + 16 : 0,
                        transform: `translate(${(highlight?.x ?? 0) - 8}px, ${(highlight?.y ?? 0) - 8}px)`,
                        opacity: highlight?.visible ? 1 : 0,
                    }}
                />
                {workData.map((work) => (
                    <div
                        key={work.id}
                        className={active && animateEntrance ? "relative animate-fadeInUp motion-reduce:animate-none" : "relative"}
                    >
                        <Link to={work.link} viewTransition onClick={(event) => {
                            if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) saveOurworkScroll();
                        }} onMouseEnter={moveHighlight} onFocus={moveHighlight} className="inline-block rounded-2xl">
                            <img
                                style={{ viewTransitionName: `work-poster-${work.id}` }}
                                className="flex justify-center items-center hover:ring-opacity-50 shadow-gray-600 shadow-md hover:shadow-2xl hover:shadow-green-400 rounded-2xl ring-4 ring-transparent hover:ring-[#00862f] max-w-full h-auto max-h-[300px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
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
