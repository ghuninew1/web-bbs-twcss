import { Title, Iframe } from "../../";
import HomePartner from "./HomePartner";

const Home = () => {
    return (
        <div className="flex flex-col mx-auto items-center justify-center min-h-[50vh] animate-fade">
            <Title title="Home" />
            <h1 className="text-center font-sans font-medium text-3xl md:text-4xl mb-5 text-white tracking-wide animate-fadeInUp">
                Showreel
            </h1>
            <div className="w-full aspect-video mx-auto md:rounded-md max-w-[1100px] mb-20 animate-fade">
                <Iframe
                    src="https://www.youtube.com/embed/BuuDEn1r8GY"
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
