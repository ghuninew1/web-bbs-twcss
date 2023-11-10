import { useRef } from "react";

const ToTop = () => {
    const scollToRef = useRef(null);

    const scrollToTop = () => {
        scollToRef.current =
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            }) || scollToRef.current;
    };

    return (
        <button
            onClick={scrollToTop}
            className='text-sm p-2 rounded-full bg-gray-200 bg-opacity-40 fixed bottom-5 right-5 z-[1000] hover:bg-gray-900 hover:text-white transition duration-300'
        >
            to top
        </button>
    );
};

export default ToTop;
