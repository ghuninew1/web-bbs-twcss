import ServiceData from "../../data/ServiceData.json";
import "../../data/ServiceData.css";
import { cx } from "../utils";
import Title from "../Title";

const Service = () => {
    return (
        <div className="pt-[30px] md:pt-[40px]">
            <Title title="Service" />
            <div className="service-main">
                <div className="service-content animate-fade">
                    {ServiceData &&
                        ServiceData.map((item, idx) => (
                            <span
                                key={idx}
                                className={`service-item-${item.id} service-img`}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className={cx(
                                        "transition-transform duration-300 ease-in-out transform hover:scale-125 animate-fadeInRight"
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
