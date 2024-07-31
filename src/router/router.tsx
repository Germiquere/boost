import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import { CatalogProducts } from "../pages/CatalogProducts";
import { Contact } from "../pages/Contact";
import { Welcome } from "../pages/Welcome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"",
          element:<Welcome/>
        },
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