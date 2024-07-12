import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../components/layout/MainLayout";
import Cart from "../pages/cart/Cart";
import AboutUs from "../pages/aboutus/AboutUs";
import Products from "../pages/products/Products";
import ErrorPage from "../pages/errorpage/ErrorPage";
import ProductDetailsPage from "../pages/productdetails/ProductDetails";
import Checkout from "../pages/checkout/Checkout";
import Success from "../pages/success/Success";
import ProductManagement from "../pages/productmanagement/ProductManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "dashboard",
        element: <ProductManagement />,
      },
    ],
  },
]);
