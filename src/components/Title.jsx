import { useEffect, memo } from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => {
    useEffect(() => {
        if (title) {
            document.title = "©Big Brain Studio" + " - " + title;
        } else {
            document.title = "©Big Brain Studio";
        }
        return () => {
            document.title = "©Big Brain Studio";
        };
    }, [title]);
};

Title.propTypes = {
    title: PropTypes.string,
};

const TitleMemo = memo(Title);
export default TitleMemo;
