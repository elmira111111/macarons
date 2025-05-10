import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Content from "./pages/Content.jsx";


export const myRouter = createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/', 
                element: <Home />
            },
            {
                path: 'contact', 
                element: <Contact />
            },
            {
                path: 'about', 
                element: <About />
            },
            {
                path: 'content', 
                element: <Content />
            },
        ]
    },
])