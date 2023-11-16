import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Home,
    Contact,
    Studio,
    Annoucement,
    Service,
    Jobs,
    News,
} from "./components/pages";
import Fallback from "./components/Fallback";

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
    ];
    const router = createBrowserRouter(routes, {
        future: {
            v7_normalizeFormMethod: true,
            v7_fetcherPersist: true,
        },
    });

    return <RouterProvider router={router} />;
};

export default App;
