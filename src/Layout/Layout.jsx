import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/career',
                element:<Career></Career>,
            },
        ]
    }
])


export default myRouter