import ptum from "../../assets/ppang.png";
import { Title } from "..";

const Card = () => {
    return (
        <>
            <Title title="Card P Tum" />
            <div className="flex items-center justify-center max-w-screen-2xl mx-auto min-h-screen">

                    <div className="flex items-center justify-center h-full">
                        <img src={ptum} alt="ptum" loading="lazy" className="rounded-md w-full h-full" />
                    </div>
            </div>
        </>
    );
};

export default Card;
