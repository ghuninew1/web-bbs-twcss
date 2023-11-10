import { XCircleIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const NewsIframe = ({ image, setImage }) => {
    return (
        <div className='fixed w-full min-h-screen bg-[#000000] top-0 left-0 z-50 animate-fade '>
            <div className='relative w-full h-full mt-1 md:mt-10'>
                <div className='relative h-screen w-full overflow-hidden  mx-auto '>
                    {image?.to && (
                        <iframe
                            src={image?.to ? image?.to : ""}
                            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture;'
                            onClick={(e) => window.open(e.target.src, "_blank")}
                            className='absolute  right-0 left-1/2 transform -translate-x-1/2
                            w-full h-full max-h-max md:max-h-[70vh] object-cover object-center max-w-[1100px] mx-auto]'
                        ></iframe>
                    )}
                </div>

                <button className='absolute top-0 right-2 z-[999] inline-flex w-[50px] h-[50px] rounded-full '>
                    <XCircleIcon
                        width={50}
                        className='hover:scale-110 transform transition-all duration-200 ease-in-out hover:text-red-600 text-[#c6c5c5]'
                        onClick={() => setImage(null)}
                    />
                    <span className='sr-only'>Close</span>
                </button>
            </div>
        </div>
    );
};

NewsIframe.propTypes = {
    image: PropTypes.object,
    setImage: PropTypes.func,
};
export default NewsIframe;
