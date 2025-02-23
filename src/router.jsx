import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import JobDetails from "./pages/JobDetails/JobDetails";
import PrivetRouter from "./PrivetRouter";
import JobApply from "./pages/JobApply/JobApply";
import MyApplication from "./pages/MyApplication/MyApplication";
import AddJob from "./pages/AddJob/AddJob";
import MyPostedJob from "./pages/MyPostedJob/MyPostedJob";
import ViewApplications from "./pages/ViewApplications/ViewApplications";

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
          path:'/jobApply/:id',
          element:<PrivetRouter><JobApply></JobApply></PrivetRouter>
        },
        {
          path:'/myApplication',
          element:<PrivetRouter><MyApplication></MyApplication></PrivetRouter>
        },
        {
          path:'addJob',
          element:<PrivetRouter><AddJob></AddJob></PrivetRouter>
        },
        {
          path:'viewApplications/:job_id',
          element:<PrivetRouter><ViewApplications></ViewApplications></PrivetRouter>,
          loader: ({params}) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
        }
        ,
        {
          path:'myPostedJob',
          element:<PrivetRouter><MyPostedJob></MyPostedJob></PrivetRouter>
        }
        ,
        {
          path:'/jobs/:id',
          element:<PrivetRouter><JobDetails></JobDetails></PrivetRouter>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },
  ]);

  export default router;