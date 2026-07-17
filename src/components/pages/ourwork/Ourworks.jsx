import { cx } from "../../utils";
import { Title, Fallback } from "../..";
import { Link } from "react-router-dom";
import { workData } from "./WorkData";
import { ImageZoom } from "./ImageZoom";

const OurworkData = ({num}) => {

    if (!workData[num]) {
        return <Fallback />;
    }

    return (
        <div className=" min-h-screen px-4 mb-10 max-w-[1280px] mx-auto">
            <Title title={workData[num].header} />
            <h2 className="md:text-2xl text-xl font-bold text-gray-500 text-start mt-5 md:mt-0 font-mono">{workData[num].header}</h2>
            <div className="flex items-center  md:items-start justify-center mt-10">
                <div className="flex md:flex-row flex-col items-center  md:items-start justify-start gap-4 animate-fadeInRight">
                    <Link to={"/ourwork"} className="cursor-alias">
                        <img
                            className="h-auto max-w-full max-h-[400px] rounded-2xl mt-4 md:mr-20 mr-0"
                            src={workData[num].img}
                            alt={workData[num].title}
                            loading="lazy"
                        />
                    </Link>
                    <div className="flex flex-col items-center justify-center mt-4 gap-4">
                        <video
                            className="h-auto max-w-full max-h-[500px] rounded-2xl"
                            src={workData[num].video}
                            controls
                            controlsList="nodownload"
                        />
                        <ImageZoom src={workData[num].slide1} alt={workData[num].title} />
                        {workData[num].slide2 && (
                            <ImageZoom src={workData[num].slide2} alt={workData[num].title} />
                        )}
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

export const OurworkBankOfThailand = () => {
    return <OurworkData num={13} />;
};

export const OurworkDepartmentOfLand = () => {
    return <OurworkData num={14} />;
};

export const OurworkKungkoo = () => {
    return <OurworkData num={15} />;
};