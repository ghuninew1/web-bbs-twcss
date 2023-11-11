import { XCircleIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const NewsIframe = ({ image, handlClose }) => {
    return (
        <div className="fixed w-full min-h-screen bg-[#000000] top-0 left-0 z-50 px-1 mb-10">
            <div
                className="relative w-full h-full mt-1 md:mt-10"
                onClick={handlClose}
            >
                <div className="relative h-screen w-full md:max-w-[1100px] overflow-hidden mx-auto flex items-center justify-center ">
                    {image?.to && (
                        <iframe
                            src={image?.to ? image?.to : ""}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onClick={(e) => window.open(e.target.src, "_blank")}
                            className="w-full h-screen max-h-[540px] md:max-h-[720px] object-center"
                        ></iframe>
                    )}
                </div>

                <button className="opacity-30 hover:opacity-100 absolute top-0 right-2 z-[999] inline-flex w-[50px] h-[50px] rounded-full ">
                    <XCircleIcon
                        width={50}
                        className="hover:scale-110 transform transition-all duration-200 ease-in-out hover:text-red-600 text-[#c6c5c5]"
                        onClick={handlClose}
                    />
                    <span className="sr-only">Close</span>
                </button>
            </div>
        </div>
    );
};

NewsIframe.propTypes = {
    image: PropTypes.object,
    handlClose: PropTypes.func,
};
export default NewsIframe;
