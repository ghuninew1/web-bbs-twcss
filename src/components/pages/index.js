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

export const Card = lazy(() => import("./card.jsx"));
export const CardPnote = lazy(() => import("./cardPnote.jsx"));
export const CardPpang = lazy(() => import("./cardPpang.jsx"));
export const CardPtum = lazy(() => import("./cardPtum.jsx"));

