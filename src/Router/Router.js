import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/HomePage/Home/Home";
import ViewProfile from "../components/Pages/Profile/ViewProfile/ViewProfile";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/view-profile',
                element: <ViewProfile></ViewProfile>
            }
        ]
    }
])

export default routes;