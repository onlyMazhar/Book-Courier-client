import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginRegister from "../Layouts/LoginRegister";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";



import UserProfile from "../Pages/Dashboard/Customer/UserProfile";
import MyInvoices from "../Pages/Dashboard/Customer/MyInvoices";
import MyOrders from "../Pages/Dashboard/Customer/MyOrders";

import AddBook from "../Pages/Dashboard/Librarian/AddBook";
import MyBooks from "../Pages/Dashboard/Librarian/MyBooks";
import ManageOrders from "../Pages/Dashboard/Librarian/ManageOrders";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageBooks from "../Pages/Dashboard/Admin/ManageBooks";

import Books from "../Pages/Books/Books";
import BookDetails from "../Pages/Books/BookDetails";
import Payment from "../Pages/Payment/Payment";
import Loader from "../Components/Loader";
import Error from "../Pages/Error/Error";
import AdminRoute from "../Pages/Dashboard/Admin/AdminRoute";
import LibrarianRoute from "../Pages/Dashboard/Librarian/LibrarianRoute";
import AdminStatistics from "../Pages/Dashboard/Admin/AdminStatistics";
import EditBook from "../Pages/Dashboard/Librarian/EditBook";
import Wishlist from "../Pages/Dashboard/Customer/Wishlist";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        hydrateFallbackElement: <Loader />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: "books", element: <Books /> },
            { path: "books/:id", element: <BookDetails /> },
            { path: "payment-success", element: <Payment /> }
        ]
    },
    {
        path: "/",
        element: <LoginRegister />,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> }
        ]
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            /* ================= ADMIN ================= */
            {
                index: true,
                element: <UserProfile />
            },
            {
                path: "manage-users",
                element: (
                    <AdminRoute>
                        <ManageUsers />
                    </AdminRoute>
                )
            },
            {
                path: "manage-books",
                element: (
                    <AdminRoute>
                        <ManageBooks />
                    </AdminRoute>
                )
            },


            /* ================= LIBRARIAN ================= */
            {
                path: "add-book",
                element: (
                    <LibrarianRoute>
                        <AddBook />
                    </LibrarianRoute>
                )
            },
            {
                path: '/dashboard/edit-book/:id',
                element: (
                    <LibrarianRoute>
                        < EditBook />
                    </LibrarianRoute>
                )
            },
            {
                path: "my-inventories",
                element: (
                    <LibrarianRoute>
                        <MyBooks />
                    </LibrarianRoute>
                )
            },
            {
                path: "manage-orders",
                element: (
                    <LibrarianRoute>
                        <ManageOrders />
                    </LibrarianRoute>
                )
            },

            /* ================= CUSTOMER ================= */
            { path: "my-orders", element: <MyOrders /> },
            { path: "my-profile", element: <UserProfile /> },
            { path: "my-invoices", element: <MyInvoices /> },
            { path: "wishlist", element: <Wishlist/> }

        ]
    }
]);
