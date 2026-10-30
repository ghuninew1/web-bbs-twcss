import { scrollTo } from "../../utils";
import { Title, Fallback } from "../..";
import { Link } from "react-router-dom";
import { workData } from "./WorkData";
import { ImageZoom } from "./ImageZoom";

const OurworkData = ({ num }) => {
    if (!workData[num]) {
        return <Fallback />;
    }
    const scrollToEven = () => {
        if (window.innerWidth > 768) {
            scrollTo(573);
        } else {
            scrollTo(0);
        }
    };

    return (
        <div className="mx-auto mb-10 px-4 max-w-[1280px] min-h-screen">
            <Title title={workData[num].header} />
            <h2 className="mt-5 md:mt-0 font-mono font-bold text-gray-500 text-xl md:text-2xl text-start">
                {workData[num].header}
            </h2>
            <div className="flex justify-center items-center md:items-start mt-10">
                <div className="flex md:flex-row flex-col justify-start items-center md:items-start gap-4 animate-fadeInRight">
                    <Link to={"/ourwork"} className="cursor-alias" onClick={scrollToEven}>
                        <img
                            className="mt-4 mr-0 md:mr-20 rounded-2xl max-w-full h-auto max-h-[400px]"
                            src={workData[num].img}
                            alt={workData[num].title}
                            loading="lazy"
                        />
                    </Link>
                    <div className="flex flex-col justify-center items-center gap-4 mt-4">
                        <video
                            className="rounded-2xl max-w-full h-auto max-h-[500px]"
                            src={workData[num].video}
                            controls
                            controlsList="nodownload"
                        />
                        <ImageZoom src={workData[num].slide1} alt={workData[num].title} />
                        {workData[num].slide2 && <ImageZoom src={workData[num].slide2} alt={workData[num].title} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const OurworkBlinkblink = () => {
    return <OurworkData num={0} />;
};

export const OurworkGiftofTheLand = () => {
    return <OurworkData num={1} />;
};

export const OurworkRpf = () => {
    return <OurworkData num={2} />;
};

export const OurworkWisdom1 = () => {
    return <OurworkData num={3} />;
};

export const OurworkMythophobiaOnlineGame = () => {
    return <OurworkData num={4} />;
};

export const OurworkNakaDeSalon = () => {
    return <OurworkData num={5} />;
};

export const OurworkWisdom2 = () => {
    return <OurworkData num={6} />;
};

export const OurworkEGATSmartGrid = () => {
    return <OurworkData num={7} />;
};

export const OurworkTanLand = () => {
    return <OurworkData num={8} />;
};

export const OurworkConan_O = () => {
    return <OurworkData num={9} />;
};

export const OurworkRoyalChitralada = () => {
    return <OurworkData num={10} />;
};

export const OurworkYala = () => {
    return <OurworkData num={11} />;
};

export const OurworkPTTOR = () => {
    return <OurworkData num={12} />;
};

// export const OurworkBankOfThailand = () => {
//     return <OurworkData num={13} />;
// };

export const OurworkDepartmentOfLand = () => {
    return <OurworkData num={13} />;
};

export const OurworkKungkoo = () => {
    return <OurworkData num={14} />;
};
