import ServiceData from "./ServiceData.json";
import "./ServiceData.css";
import { cx } from "../../utils";
import Title from "../../Title";

const Service = () => {
    return (
        <div className="flex flex-col mx-auto items-center justify-center min-h-[50vh] w-full animate-zoom">
            <Title title="Service" />
            <div className="service-main mt-[-100px] md:mt-[0px] mb-0 md:mb-10">
                <div className="service-content">
                    {ServiceData &&
                        ServiceData.map((item, idx) => (
                            <span
                                key={idx}
                                className={`service-item-${item.id} service-img animate-fadeInLeftDelay`}
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
