import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import Community from "../components/Community/Community";
import Blog from "../components/Pages/BlogPage/Blog";
import Details from "../components/Pages/BlogPage/Details/Details";
import Users from "../components/Pages/Dashboard/Users/Users";
import Documentation from "../components/Pages/Documentation/Documentation";
import Home from "../components/Pages/HomePage/Home/Home";
import Address from "../components/Pages/Profile/Address/Address";
import Education from "../components/Pages/Profile/Education/Education";
import MyProfile from "../components/Pages/Profile/MyProfile/MyProfile";
import ViewProfile from "../components/Pages/Profile/ViewProfile/ViewProfile";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";
import AddBlog from "../components/Pages/Dashboard/AddBlog/AddBlog";
import AdminRouter from "./AdminRouter";
import Courses from "../components/Pages/Courses/Courses";
import Quiz from "../components/Pages/QuizPage/Quiz";
import QuizDetails from "../components/Pages/QuizPage/QuizDetails/QuizDetails";
import Payment from "../Payment/Payment";
import AddReview from "../components/Pages/Dashboard/AddReview/AddReview";
import PaymentUsers from "../components/Pages/Dashboard/PaymentUsers/PaymentUsers";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import Installation from "../components/Pages/Documentation/Category/Installation";
import Hooks from "../components/Pages/Documentation/Category/Hooks";
import Interview from "../components/Pages/Documentation/Category/Interview";
import Error from "../components/Pages/Documentation/Category/Error";
import MainConcept from "../components/Pages/Documentation/Category/MainConcept";
import Api from "../components/Pages/Documentation/Category/Api";
import NotFound from "../components/Pages/NotFound/NotFound";
import CoursesDetails from "../components/Pages/Courses/CoursesDetails";



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
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/coursesDetails/:id",
        loader: ({params}) => fetch(`https://easy-doc-server.vercel.app/coursesDetails/${params.id}`),
        element: <CoursesDetails></CoursesDetails>,
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
        path: "/quiz",
        element: <Quiz></Quiz>,
        loader: () => fetch("https://easy-doc-server.vercel.app/quiz"),
      },
      {
        path: "/quiz/:id",
        loader: async ({ params }) => {
          return fetch(`https://easy-doc-server.vercel.app/quiz/${params.id}`);
        },
        element: <QuizDetails></QuizDetails>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
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
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: '/dashboard',
            element: <AddReview></AddReview>
          },
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
          {
            path: '/dashboard/addReview',
            element: <AddReview></AddReview>
          },
          {
            path: '/dashboard/paymentUsers',
            element: <PaymentUsers></PaymentUsers>
          },
        ],
      },
      {
        path: "/documentation",
        element: <Documentation></Documentation>,
        children: [
          {
            path: "/documentation",
            element: <Installation></Installation>
          },
          {
            path: "/documentation/installation/:id",
            element: <Installation></Installation>
          },
          {
            path: "/documentation/hooks/:id",
            element: <Hooks></Hooks>
          },
          {
            path: "/documentation/interview/:id",
            element: <Interview></Interview>
          },
          {
            path: "/documentation/error/:id",
            element: <Error></Error>
          },

          {
            path: "/documentation/mainConcept/:id",
            element: <MainConcept></MainConcept>
          },
          {

            path: "/documentation/apireference/:id",
            element: <Api></Api>
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
          }
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

export default routes;
