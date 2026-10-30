import { Title, Fallback } from "../..";
import { Link } from "react-router-dom";
import { workData } from "./WorkData";
import { ImageZoom } from "./ImageZoom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const OurworkData = ({ num }) => {
    if (!workData[num]) {
        return <Fallback />;
    }

    return (
        <div className="mx-auto mb-10 px-4 max-w-[1280px] min-h-screen">
            <Title title={workData[num].header} />
            <h2 className="mt-5 md:mt-0 font-mono font-bold text-gray-500 text-xl md:text-2xl text-start">
                {workData[num].header}
            </h2>
            <div className="flex justify-center items-center md:items-start mt-10">
                <div className="flex md:flex-row flex-col justify-start items-center md:items-start gap-4">
                    <div className="flex flex-col items-center gap-4 mt-4 md:mr-20">
                        <Link to="/ourwork" viewTransition className="cursor-alias">
                            <img
                                style={{ viewTransitionName: `work-poster-${workData[num].id}` }}
                                className="rounded-2xl max-w-full h-auto max-h-[400px]"
                                src={workData[num].img}
                                alt={workData[num].title}
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            to="/ourwork"
                            viewTransition
                            className="inline-flex items-center gap-2 px-4 py-2 hover:border hover:border-green-500 rounded-lg focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 text-white hover:text-green-400 transition-colors"
                        >
                            <ArrowLeftIcon aria-hidden="true" className="w-5 h-5 animate-bounceLeft" />
                            Back
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mt-4 animate-fadeInRight">
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
