import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";
import Dashboard from "../Layout/Dashboard";
import Myprofile from "../pages/Dashboard/Myprofile/Myprofile";
import Addproduct from "../pages/Dashboard/Addproduct/Addproduct";
import Myproduct from "../pages/Dashboard/Myproduct/Myproduct";
import UpdateProduct from "../pages/Dashboard/UpdateProduct/UpdateProduct";
import ProductReviewQueue from "../pages/Dashboard/ProductReviewQueue/ProductReviewQueue";
import ReportedContent from "../pages/Dashboard/ReportedContent/ReportedContent";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import Payment from "../pages/Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Registration></Registration>
      },
      {
        path: 'products',
        loader:() => fetch('https://techhub-server-two.vercel.app/products'),
        element:<Products></Products>
      },
      {
        path: 'product/:id',
        loader: ({params}) => fetch(`https://techhub-server-two.vercel.app/product/${params.id}`),
        element: <Product></Product>
      },
    
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/myprofile',
        element:<PrivateRoute><Myprofile></Myprofile></PrivateRoute>
      },
      {
        path: '/dashboard/addproduct',
        element: <Addproduct></Addproduct>
      },
      {
        path: '/dashboard/myproducts',
        element: <Myproduct></Myproduct>
      },
      {
        path: '/dashboard/payment',
        element: <Payment></Payment>
      },
      {
        path: '/dashboard/updateproduct/:id',
        loader: ({params}) => fetch(`https://techhub-server-two.vercel.app/product/${params.id}`),
        element: <UpdateProduct></UpdateProduct>
      },
      {
        path:'/dashboard/prodcutreviewqueue',
        element:<ProductReviewQueue></ProductReviewQueue>
      },
      {
        path:'/dashboard/reportedcontent',
        element:<ReportedContent></ReportedContent>
      },
      {
        path:'/dashboard/manageusers',
        element:<ManageUsers></ManageUsers>
      }
    ]
  }
]);
