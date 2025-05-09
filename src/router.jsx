import { createBrowserRouter } from "react-router-dom";
import ReadySets from "./components/readySets/ReadySets";

const Home = () => React.createElement("div", null, "Главная страница"); // без JSX

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/ready-sets",
        element: <ReadySets />,
    },
]);
