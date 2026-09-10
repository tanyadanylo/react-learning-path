import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import ProductsPage from "./hw4/ProductsPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:<ProductsPage/>
    },

])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
