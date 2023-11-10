import ServiceData from "../../data/ServiceData.json";
import "../../data/ServiceData.css";

const Service = () => {
    return (
        <div className=' w-full min-w-[860px] pt-[30px] md:pt-[20px] min-h-[50vh]'>
            <div className='relative max-w-[860px] mx-auto scale-[0.5] md:scale-[0.9] lg:scale-[1] transition-all animate-fade'>
                <span className='absolute top-0 left-0 w-[860px] h-[727px] bg-service-bg bg-no-repeat' />
                {ServiceData &&
                    ServiceData.map((item, idx) => (
                        <span
                            key={idx}
                            className={`service-item-${item.id} animate-zoomIn `}
                        >
                            <img
                                src={item.src}
                                alt={item.id}
                                className={`hover:scale-[1.3]  duration-200 ease-out z-auto `}
                            />
                        </span>
                    ))}
            </div>
        </div>
    );
};

export default Service;
