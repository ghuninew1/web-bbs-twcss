import { XCircleIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const NewsIframe = ({ image, handlClose }) => {
    return (
        <div
            className="fixed w-full min-h-screen bg-black top-0 left-0 z-50"
            onClick={handlClose}
        >
            <section className="relative w-full h-full mt-1 md:mt-10 px-2">
                <div className="absolute top-0 w-full left-0 flex items-center justify-center mx-auto min-h-screen ">
                    {image?.to && (
                        <>
                            <iframe
                                src={image?.to ? image?.to : ""}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

                <button className="opacity-30 hover:opacity-100 absolute top-0 right-2 z-[999] inline-flex w-[50px] h-[50px] rounded-full ransition-opacity ">
                    <XCircleIcon
                        width={50}
                        className="hover:scale-110 transform transition-all hover:text-red-600 text-[#c6c5c5]"
                        onClick={handlClose}
                    />
                </button>
            </section>
        </div>
    );
};

NewsIframe.propTypes = {
    image: PropTypes.object,
    handlClose: PropTypes.func,
};
export default NewsIframe;
