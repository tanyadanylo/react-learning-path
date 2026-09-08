import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import UserPage from "./hw3/UserPage.tsx";
import CartPage from "./hw3/CartPage.tsx";
import MainLayout from "./hw3/MainLayout.tsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element: <UserPage/>
            },
            {
                path:'/cart/:id',
                element:<CartPage/>
            }
        ]
    },

])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
