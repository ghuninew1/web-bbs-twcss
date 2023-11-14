import { useRef } from "react";
import Title from "../Title";
import HomePartner from "./HomePartner";
import useOnScreen from "../utils/useOnScreen";

const Home = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    return (
        <div className="w-full  pt-[30px] md:pt-[0px] flex flex-col mx-auto items-center justify-center ">
            <Title title="Home" />
            <h1 className="text-center font-sans font-medium text-3xl md:text-4xl mb-5 text-white tracking-wide animate-fadeInUp">
                Showreel
            </h1>
            <div className="w-full aspect-video mx-auto md:rounded-md max-w-[1100px] mb-20 animate-fade">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/BuuDEn1r8GY"
                    title="Showreel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div ref={ref} className=" bg-white w-full animate-fade">
                {isVisible && <HomePartner />}
            </div>
        </div>
    );
};

export default Home;
