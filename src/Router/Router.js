import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Documentation from "../components/Pages/Documentation/Documentation";
import Home from "../components/Pages/HomePage/Home/Home";
import Profile from "../components/Pages/Profile/Profile";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path:"/Documentation",
        element:<Documentation></Documentation>
      },
    ],
  },
]);

export default routes;
