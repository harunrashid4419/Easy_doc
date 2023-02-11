import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import Community from "../components/Community/Community";
import Blog from "../components/Pages/BlogPage/Blog";
import Details from "../components/Pages/BlogPage/Details/Details";
import DashboardLayout from "../components/Pages/Dashboard/DashboardLayout/DashboardLayout";
import Users from "../components/Pages/Dashboard/Users/Users";
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
import AddBlog from "../components/Pages/Dashboard/AddBlog/AddBlog";
import AdminRouter from "./AdminRouter";
import Courses from "../components/Pages/Courses/Courses";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Contact from "../components/Pages/Contact/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
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
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("https://easy-doc-server.vercel.app/blog"),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
      {
        path: "/community",
        element: (
          <PrivateRoute>
            <Community></Community>
          </PrivateRoute>
        ),
      },
      {
        path: "/documentation",
        element: <Documentation></Documentation>,
        children: [
          {
            path: "/documentation",
            element: <IdWiseDataLoad></IdWiseDataLoad>,
          },
          {
            path: "/documentation/:id",
            element: <IdWiseDataLoad></IdWiseDataLoad>,
            // loader: async ({ params }) => await fetch(`https://easy-doc-server.vercel.app/menu/${params.id}`)
          }
        ]
      },



      {
        path: "/view-profile",
        element: (
          <PrivateRoute>
            <ViewProfile></ViewProfile>
          </PrivateRoute>
        ),
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
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/users",
        element: (
          <AdminRouter>
            <Users></Users>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/addBlog",
        element: <AddBlog></AddBlog>,
      },
    ],
  },
]);

export default routes;
