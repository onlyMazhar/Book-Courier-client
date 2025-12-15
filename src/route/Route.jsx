import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginRegister from "../Layouts/LoginRegister";
import './loader.css'
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Error from "../Pages/Error/Error"
import AddBook from "../Pages/Dashboard/Librarian/AddBook";
import Books from "../Pages/Books/Books";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        hydrateFallbackElement: <div class="loader"></div>,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            { path: '/MyProfile', 
                element: <UserProfile />
             },
             {
                path: 'Books',
                element: <Books/>
             }

        ]
    },
    {
        path: "/",
        element: <LoginRegister />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/add-book',
                element: <AddBook />
            }
        ]
    }
])