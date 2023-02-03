import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import Community from "../components/Community/Community";
import Blog from "../components/Pages/BlogPage/Blog";
import Details from "../components/Pages/BlogPage/Details/Details";
import Documentation from "../components/Pages/Documentation/Documentation";
import IdWiseDataLoad from "../components/Pages/Documentation/IdWiseDataLoad";
import Home from "../components/Pages/HomePage/Home/Home";
import Address from "../components/Pages/Profile/Address/Address";
import Education from "../components/Pages/Profile/Education/Education";
import MyContribution from "../components/Pages/Profile/MyContribution/MyContribution";
import MyProfile from "../components/Pages/Profile/MyProfile/MyProfile";
import ViewProfile from "../components/Pages/Profile/ViewProfile/ViewProfile";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
        loader: () => fetch('https://easy-doc-server.vercel.app/blog')
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
      {
        path: "/community",
        element: <Community></Community>,
       
      },
      {
        path: '/documentation',
        element: <Documentation></Documentation>,
        children: [
          {
            path: '/documentation/:id',
            element: <IdWiseDataLoad></IdWiseDataLoad>,
          },
        ]
      },

      {
        path: "/view-profile",
        element: <ViewProfile></ViewProfile>,
        children: [
          {
            path: "/view-profile",
            element: <MyProfile></MyProfile>,
          },
          {
            path: "/view-profile/address",
            element: <Address></Address>,
          },
          {
            path: "/view-profile/education",
            element: <Education></Education>,
          },
          {
            path: "/view-profile/my-contribution",
            element: <MyContribution></MyContribution>,
          },
        ],
      },
    ],
  }
]);

export default routes;
