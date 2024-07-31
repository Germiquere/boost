import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import { CatalogProducts } from "../pages/CatalogProducts";
import { Contact } from "../pages/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"catalogo",
            element:<CatalogProducts/>,
        },
        {
            path:"contacto",
            element:<Contact/>,
        }
      ]
    },
]);