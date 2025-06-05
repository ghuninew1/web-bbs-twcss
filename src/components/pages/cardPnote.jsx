import pnote from "../../assets/pnote.png";
import onTop from "../../assets/Tum_note_pang.png";
import { Title } from "..";

const Card = () => {
    return (
        <>
            <Title title="Card P Note" />
            <div className="flex items-center justify-center max-w-screen-2xl mx-auto min-h-screen">

                    <div className="flex items-center justify-center h-full md:flex-row flex-col">
                        <img src={pnote} alt="pnote" loading="lazy" className="rounded-md w-full h-full" />
                        <img src={onTop} alt="onTop" loading="lazy" className="rounded-md w-full h-full" />
                    </div>
            </div>
        </>
    );
};

export default Card;
