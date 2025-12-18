import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginRegister from "../Layouts/LoginRegister";

import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Error from "../Pages/Error/Error"
import AddBook from "../Pages/Dashboard/Librarian/AddBook";
import Books from "../Pages/Books/Books";
import Loader from "../Components/Loader";
import BookDetails from "../Pages/Books/BookDetails";
import Payment from "../Pages/Payment/Payment";
import MyOrders from "../Pages/Dashboard/Librarian/MyOrders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        hydrateFallbackElement: <Loader />,
        // errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/MyProfile',
                element: <UserProfile />
            },
            {
                path: '/Books',
                element: <Books />
            },
            {
                path: 'Books/:id',
                element: <BookDetails />

            },
            {
                path: '/payment-success',
                element: <Payment />

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
            },
            {
                path: '/dashboard/my-orders',
                element: <MyOrders />
            },

        ]
    }
])