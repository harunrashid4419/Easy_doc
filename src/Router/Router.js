import { createBrowserRouter } from "react-router-dom";
import Community from "../components/Community/Community";
import Home from "../components/Pages/HomePage/Home/Home";
import Profile from "../components/Pages/Profile/Profile";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
    ],
  },
]);

export default routes;
