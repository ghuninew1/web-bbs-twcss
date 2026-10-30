import { Title } from "../../";
import { YouTubeEmbed } from "../../Iframe";
import HomePartner from "./HomePartner";

const Home = ({ active = true }) => {
    return (
        <div className="flex flex-col justify-center items-center mx-auto min-h-[50vh] animate-fade">
            <Title title="Home" />
            <h1 className="mb-5 font-font1 font-bold text-white text-4xl md:text-5xl text-center tracking-wide animate-fadeInUp">
                Showreel
            </h1>
            <div className="bg-black mx-auto mb-20 w-full max-w-[1100px] aspect-video animate-fade">
                {active && <YouTubeEmbed src="https://www.youtube.com/embed/ZPUNuRikgUs" title={"ShowReel"}/>}
            </div>
            <div className="bg-white w-full">
                <HomePartner />
            </div>
        </div>
    );
};

export default Home;
