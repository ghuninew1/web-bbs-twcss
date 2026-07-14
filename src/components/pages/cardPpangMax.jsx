import ppang from "../../assets/ppang_max.png";
import { Title } from "..";

const Card = () => {
    return (
        <>
            <Title title="Card P Tum" />
            <div className="flex items-center justify-center max-w-screen-2xl mx-auto min-h-screen">

                    <div className="flex items-center justify-center h-full md:flex-row flex-col">
                        <img src={ppang} alt="ppang" loading="lazy" className="rounded-md w-full h-full" />
                    </div>
            </div>
        </>
    );
};

export default Card;
