const Hader = () => {
    return (
        <div className="hidden md:flex flex-col justify-between items-center h-[70px] w-full mx-auto bg-black">
            <h1 className="text-[#f79a0e] text-center font-bold text-4xl font-font1 tracking-wider animate-fadeInDown antialiased">
                BIG BRAIN <span className="text-[#009058]">STUDIO</span>
            </h1>
            <h1 className="text-white text-center text-[25px] font-font1 tracking-wide animate-fadeInDown antialiased">
                Create{" "}
                <span className="text-[20px] font-light px-1"> the </span>
                Creation{" "}
                <span className="text-[20px] font-light px-1"> of </span>
                Animation Intellectual Properties{" "}
                <span className="text-[20px] font-light px-1"> and </span>
                Contents.
            </h1>
        </div>
    );
};

export default Hader;
