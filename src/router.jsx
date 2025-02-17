import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import JobDetails from "./pages/JobDetails/JobDetails";
import PrivetRouter from "./PrivetRouter";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Route Not Found (404)</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/signin',
            element:<SignIn></SignIn>
        },
        {
          path:'/jobs/:id',
          element:<PrivetRouter><JobDetails></JobDetails></PrivetRouter>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },
  ]);

  export default router;