import { lazy } from "react";

export const Home = lazy(() => import("./home/Home"));
export const Contact = lazy(() => import("./contact/Contact"));
export const Studio = lazy(() => import("./Studio"));
export const Annoucement = lazy(() => import("./Annoucement"));
export const Service = lazy(() => import("./service/Service"));
export const Jobs = lazy(() => import("./jobs/Jobs"));
export const News = lazy(() =>
    import("./news/News").then((module) => ({ default: module.News }))
);
export const Ourwork = lazy(() => import("./ourwork/Ourwork"));
export const OurworkBlinkblink = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkBlinkblink })));
export const OurworkGiftofTheLand = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkGiftofTheLand })));
export const OurworkRpf = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkRpf })));
export const OurworkWisdom1 = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkWisdom1 })));
export const OurworkMythophobiaOnlineGame = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkMythophobiaOnlineGame })));
export const OurworkNakaDeSalon = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkNakaDeSalon })));
export const OurworkWisdom2 = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkWisdom2 })));
export const OurworkEGATSmartGrid = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkEGATSmartGrid })));
export const OurworkTanLand = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkTanLand })));
export const OurworkConan_O = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkConan_O })));
export const OurworkRoyalChitralada = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkRoyalChitralada })));
export const OurworkYala = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkYala })));
export const OurworkPTTOR = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkPTTOR })));
export const OurworkBankOfThailand = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkBankOfThailand })));
export const OurworkDepartmentOfLand = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkDepartmentOfLand })));
export const OurworkKungkoo = lazy(() => import("./ourwork/Ourworks").then((module) => ({ default: module.OurworkKungkoo })));


export const Card = lazy(() => import("./card.jsx").then((module) => ({ default: module.Card })));
export const CardPbirdHanako = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPbirdHanako })));
export const CardPkaewHanako = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPkaewHanako })));
export const CardPpangHanako = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPpangHanako })));
export const CardPnote = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPnote })));
export const CardPnoteMax = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPnoteMax })));
export const CardPpang = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPpang })));
export const CardPpangMax = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPpangMax })));
export const CardPtood = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPtood })));
export const CardPtoodOnly = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPtoodOnly })));
export const CardPtum = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPtum })));
export const CardPtumMax = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPtumMax })));
export const CardPtumOnly = lazy(() => import("./card.jsx").then((module) => ({ default: module.CardPtumOnly })));
