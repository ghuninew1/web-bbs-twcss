import { Layout, Fallback } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Home,
    Contact,
    Studio,
    Annoucement,
    Service,
    Jobs,
    News,
    Card,
    CardPnote,
    CardPpang,
    CardPtum,
    CardPtumOnly,
    CardPtood,
    CardPbirdHanako,
    CardPkaewHanako,
    CardPpangHanako,
    CardPtoodOnly,
    CardPtumMax,
    CardPpangMax,
    CardPnoteMax
} from "./components/pages";

const App = () => {
    const pages = [
        { path: "/", element: <Home /> },
        { path: "/studio", element: <Studio /> },
        { path: "/jobs", element: <Jobs /> },
        { path: "/service", element: <Service /> },
        { path: "/news", element: <News /> },
        { path: "/annoucement", element: <Annoucement /> },
        { path: "/contact", element: <Contact /> },
    ];
    const routes = [
        {
            path: "/",
            element: <Layout />,
            errorElement: <Fallback />,
            children: [...pages],
            
        },
        { path: "/card", element: <Card /> },
        { path: "/cardPnote", element: <CardPnote /> },
        { path: "/cardPpang", element: <CardPpang /> },
        { path: "/cardPtum", element: <CardPtum /> },
        { path: "/cardPtumOnly", element: <CardPtumOnly /> },
        { path: "/cardPtood", element: <CardPtood /> },
        { path: "/cardPbirdHanako", element: <CardPbirdHanako /> },
        { path: "/cardPkaewHanako", element: <CardPkaewHanako /> },
        { path: "/cardPpangHanako", element: <CardPpangHanako /> },
        { path: "/cardPtoodOnly", element: <CardPtoodOnly /> },
        { path: "/cardPtumMax", element: <CardPtumMax /> },
        { path: "/cardPpangMax", element: <CardPpangMax /> },
        { path: "/cardPnoteMax", element: <CardPnoteMax /> },
    ];
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default App;
