import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
<<<<<<< HEAD
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Documentation from "../components/Pages/Documentation/Documentation";
=======
import Community from "../components/Community/Community";
>>>>>>> main
import Home from "../components/Pages/HomePage/Home/Home";
import Address from "../components/Pages/Profile/Address/Address";
import Education from "../components/Pages/Profile/Education/Education";
import MyContribution from "../components/Pages/Profile/MyContribution/MyContribution";
import MyProfile from "../components/Pages/Profile/MyProfile/MyProfile";
import ViewProfile from "../components/Pages/Profile/ViewProfile/ViewProfile";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
<<<<<<< HEAD
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
              path:'/documentation',
              element: <Documentation></Documentation>
            },
            {
                path: "/view-profile",
                element: <ViewProfile></ViewProfile>,
                children: [
                    {
                        path: '/view-profile',
                        element: <MyProfile></MyProfile>
                    },
                    {
                        path: '/view-profile/address',
                        element: <Address></Address>
                    },
                    {
                        path: '/view-profile/education',
                        element: <Education></Education>
                    },
                    {
                        path: '/view-profile/my-contribution',
                        element: <MyContribution></MyContribution>
                    },
                ]
            },
=======
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
        path: "/community",
        element: <Community></Community>,
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
>>>>>>> main
        ],
      },
    ],
  },
]);

export default routes;
