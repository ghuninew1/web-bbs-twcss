import ptest from "../../assets/ppang.jpeg";
import pbird from "../../assets/hanako_namecard_ez_bird_v00.jpg";
import pkaew from "../../assets/hanako_namecard_ez_kaew_v00.jpg";
import ppangHanako from "../../assets/hanako_namecard_ez_pang_v00.jpg";
import pnote from "../../assets/p_note_name_card_2026.avif";
import pnoteMax from "../../assets/pnote_max.png";
import ppang from "../../assets/p_pang_name_card_2026.avif";
import ppangMax from "../../assets/ppang_max.png";
import pTood from "../../assets/p_tood_name_card_2026.avif";
import ptoodOnly from "../../assets/ptood_only.png";
import ptum from "../../assets/p_tum_name_card_2026.avif";
import ptumMax from "../../assets/ptum_max.png";
import ptumOnly from "../../assets/p_tum_name_card_2026_2.png";

import { Title } from "..";

const CardName = ({ src, alt}) => {

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Title title={alt !== undefined ? `Card ${alt}` : "Card BigBrain"} />
            <div className="flex items-center justify-center max-w-screen-2xl mx-auto min-h-screen overflow-hidden">
                <div className="flex items-center justify-center w-full">
                    <img src={src} alt={alt} loading="lazy" className="rounded-md w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export function Card() {
    return (
        <CardName src={ptest} alt="P Pang" />
    );
}

export function CardPbirdHanako() {
    return (
        <CardName src={pbird} alt="P Bird Hanako" />
    );
}

export function CardPkaewHanako() {
    return (
        <CardName src={pkaew} alt="P Kaew Hanako" />
    );
}

export function CardPpangHanako() {
    return (
        <CardName src={ppangHanako} alt="P Pang Hanako" />
    );
}

export function CardPnote() {
    return (
        <CardName src={pnote} alt="P Note" />
    );
}

export function CardPnoteMax() {
    return (
        <CardName src={pnoteMax} alt="P Note MaxJoy" />
    );
}

export function CardPpang() {
    return (
        <CardName src={ppang} alt="P Pang" />
    );
}

export function CardPpangMax() {
    return (
        <CardName src={ppangMax} alt="P Pang MaxJoy" />
    );
}

export function CardPtood() {
    return (
        <CardName src={pTood} alt="P Tood" />
    );
}

export function CardPtoodOnly() {
    return (
        <CardName src={ptoodOnly} alt="P Tood Only" />
    );
}

export function CardPtum() {
    return (
        <CardName src={ptum} alt="P Tum" />
    );
}

export function CardPtumMax() {
    return (
        <CardName src={ptumMax} alt="P Tum MaxJoy" />
    );
}

export function CardPtumOnly() {
    return (
        <CardName src={ptumOnly} alt="P Tum Only" />
    );
}