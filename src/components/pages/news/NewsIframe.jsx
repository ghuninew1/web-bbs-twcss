import { XCircleIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const NewsIframe = ({ src, handlClose }) => {
    return (
        <div
            className="fixed w-full min-h-screen bg-black top-0 left-0 z-50 animate-zoom"
            onClick={handlClose}
        >
            <section className="relative w-full h-full mt-1 md:mt-10 px-2">
                <div className="absolute top-0 w-full left-0 flex items-center justify-center mx-auto min-h-screen ">
                    {src && (
                        <>
                            <iframe
                                src={src}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowFullScreen
                                onClick={(e) =>
                                    window.open(e.target.src, "_blank")
                                }
                                width={"100%"}
                                height={"auto"}
                                className="block h-full md:min-h-[720px] min-h-[480px] max-w-[1100px]"
                            />
                        </>
                    )}
                </div>

                <button className="opacity-50 hover:opacity-100 absolute top-0 right-2 z-[999] inline-flex rounded-full ransition-opacity ">
                    <XCircleIcon
                        className="hover:scale-110 transform transition-all hover:text-red-600 text-[#a74747] w-[50px] h-[50px]"
                        onClick={handlClose}
                    />
                </button>
            </section>
        </div>
    );
};

NewsIframe.propTypes = {
    src: PropTypes.string,
    handlClose: PropTypes.func,
};
export default NewsIframe;
