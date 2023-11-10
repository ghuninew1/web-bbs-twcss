// import Partner from "./Partner";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Title from "../Title";
import HomePartner from "./HomePartner";

const Home = () => {
    return (
        <div id='home' className='w-full  pt-[30px] md:pt-[40px] animate-fade '>
            <Title title='Home' />
            <div className='text-center font-sans font-bold text-[30px] mb-5 text-white'>
                Showreel
            </div>
            <div className='w-full aspect-video mx-auto shadow-md md:rounded-md overflow-hidden max-w-[1100px] mb-20'>
                <iframe
                    width='100%'
                    height='100%'
                    src='https://www.youtube.com/embed/BuuDEn1r8GY'
                    title='Showreel'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
            </div>
            <div className=' bg-white w-full '>
                <HomePartner />
            </div>
        </div>
    );
};

export default Home;
