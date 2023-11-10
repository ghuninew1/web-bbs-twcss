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
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <Fallback />,
            children: [...pages],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
