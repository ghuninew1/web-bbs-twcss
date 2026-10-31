import { useRef } from "react";
import useObserver from "../../utils/useObserver";
import "./NewsConnector.css";

export default function NewsConnector({ index }) {
    const ref = useRef(null);
    const visible = useObserver(ref, "0px", 0.15);

    return (
        <div ref={ref} aria-hidden="true" className={`news-connector ${index % 2 === 0 ? "news-connector--left" : "news-connector--right"} ${visible ? "news-connector--visible" : ""}`}>
            <span className="news-connector__line" />
            <span className="news-connector__point news-connector__point--top" />
            <span className="news-connector__point news-connector__point--bottom" />
        </div>
    );
}
