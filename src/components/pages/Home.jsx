import Title from "../Title";
import HomePartner from "./HomePartner";

const Home = () => {
    return (
        <div className="w-full  pt-[30px] md:pt-[40px] animate-fade ">
            <Title title="Home" />
            <h1 className="text-center font-sans font-bold text-3xl md:text-4xl mb-5 text-white tracking-wide">
                Showreel
            </h1>
            <div className="w-full aspect-video mx-auto shadow-md md:rounded-md overflow-hidden max-w-[1100px] mb-20">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/BuuDEn1r8GY"
                    title="Showreel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className=" bg-white w-full">
                <HomePartner />
            </div>
        </div>
    );
};

export default Home;
