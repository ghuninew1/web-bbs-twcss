import PropTypes from "prop-types";
import { cx } from "./index";

const Image = (props) => (
    <img
        alt={props.alt}
        src={props.src}
        className={cx(
            props.fullWidth && "w-full h-full max-h-screen",
            props.h169 &&
                " w-full  sm:h-[540px] sm:w-[960px] md:h-[720px] md:w-[1280px] lg:h-[900px] lg:w-[1600px] xl:h-[1080px] xl:w-[1920px]",
            props.h43 &&
                " w-full  sm:h-[270px] sm:w-[480px] md:h-[360px] md:w-[640px] lg:h-[450px] lg:w-[800px] xl:h-[540px] xl:w-[960px]",
            props.rounded && "rounded",
            props.roundedFull && "rounded-full",
            props.thumbnail &&
                "rounded-lg shadow-md object-cover object-center h-48 w-48 hover:brightness-50 transition duration-200 ease-out transform hover:-translate-y-1 hover:scale-110",
            props.className && props.className
        )}
    />
);

Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    h169: PropTypes.bool,
    h43: PropTypes.bool,
    rounded: PropTypes.bool,
    roundedFull: PropTypes.bool,
    thumbnail: PropTypes.bool,
};

export default Image;
