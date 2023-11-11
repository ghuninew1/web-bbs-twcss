import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const Studio = lazy(() => import("./Studio"));
const Annoucement = lazy(() => import("./Annoucement"));
const Service = lazy(() => import("./Service"));
const Jobs = lazy(() => import("./Jobs"));
const News = lazy(() => import("./news/News"));

export { Home, Contact, Studio, Annoucement, Service, Jobs, News };
