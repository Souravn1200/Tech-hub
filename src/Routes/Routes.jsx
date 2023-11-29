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
        loader:() => fetch('http://localhost:5000/products'),
        element:<Products></Products>
      },
      {
        path: 'product/:id',
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`),
        element: <Product></Product>
      },
    
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'myprofile',
        element:<Myprofile></Myprofile>
      },
      {
        path: 'addproduct',
        element: <Addproduct></Addproduct>
      },
      {
        path: 'myproducts',
        element: <Myproduct></Myproduct>
      },
      {
        path: 'updateproduct/:id',
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`),
        element: <UpdateProduct></UpdateProduct>
      },
      {
        path:'prodcutreviewqueue',
        element:<ProductReviewQueue></ProductReviewQueue>
      },
      {
        path:'reportedcontent',
        element:<ReportedContent></ReportedContent>
      }
    ]
  }
]);
