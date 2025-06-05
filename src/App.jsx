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
    CardPbirdHanako,
    CardPkaewHanako,
    CardPpangHanako,
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
        { path: "/cardPbirdHanako", element: <CardPbirdHanako /> },
        { path: "/cardPkaewHanako", element: <CardPkaewHanako /> },
        { path: "/cardPpangHanako", element: <CardPpangHanako /> },
    ];
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default App;
