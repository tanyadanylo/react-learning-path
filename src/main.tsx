import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import UsersPage from "./hw3/UsersPage.tsx";
import CartsPage from "./hw3/CartsPage.tsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<UsersPage/>
    },
    {
        path:'/cart/:id',
        element:<CartsPage/>
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
