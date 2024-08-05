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
    ];
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default App;
