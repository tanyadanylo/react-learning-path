import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import CarFormCard from "./hw5/CarFormCard.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:<CarFormCard/>
    },

])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
