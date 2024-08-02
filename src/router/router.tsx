import { createBrowserRouter, defer } from "react-router-dom";

import App from "../App";
import { catalogLoader } from "../utils";
import { CatalogProducts, Contact, ErrorPage, Welcome } from "../pages";


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
            loader: async () => defer({products: catalogLoader()})
        },
        {
            path:"contacto",
            element:<Contact/>,
        }
      ]
    },
]);