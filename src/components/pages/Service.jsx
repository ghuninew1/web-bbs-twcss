import ServiceData from "../../data/ServiceData.json";
import "../../data/ServiceData.css";
import { cx } from "../utils";
import Title from "../Title";

const Service = () => {
    return (
        <div className="pt-[0px] md:pt-[0px] flex flex-col mx-auto items-center justify-center p-2 min-h-[50vh] w-full mb-[50px] animate-zoom">
            <Title title="Service" />
            <div className="service-main mt-[-50px] md:mt-[0px]">
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
