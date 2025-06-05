import pkaew from "../../assets/hanako_namecard_ez_kaew_v00.jpg";
import { Title } from "..";

const Card = () => {
    return (
        <>
            <Title title="Card P Pang" />
            <div className="flex items-center justify-center max-w-screen-2xl mx-auto min-h-screen">

                    <div className="flex items-center justify-center h-full">
                        <img src={pkaew} alt="pkaew" loading="lazy" className="rounded-md w-full h-full" />
                    </div>
            </div>
        </>
    );
};

export default Card;
