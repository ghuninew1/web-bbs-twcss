import { Title, Iframe } from "../../";
import HomePartner from "./HomePartner";

const Home = () => {
    return (
        <div className="flex flex-col mx-auto items-center justify-center min-h-[50vh] animate-fade">
            <Title title="Home" />
            <h1 className="text-center font-sans font-medium text-3xl md:text-4xl mb-5 text-white tracking-wide animate-fadeInUp">
                Showreel
            </h1>
            <div className="w-full aspect-video mx-auto max-w-[1100px] mb-20 animate-fade bg-black">
                <Iframe
                    src="https://www.youtube.com/embed/ULyW8grw1S0"
                    isOn={true}
                />
            </div>
            <div className=" bg-white w-full">
                <HomePartner />
            </div>
        </div>
    );
};

export default Home;
