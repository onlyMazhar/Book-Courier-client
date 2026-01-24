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
import UserStatistics from "../Pages/Dashboard/Customer/UserStatistics";

import AddBook from "../Pages/Dashboard/Librarian/AddBook";
import MyBooks from "../Pages/Dashboard/Librarian/MyBooks";
import ManageOrders from "../Pages/Dashboard/Librarian/ManageOrders";
import LibrarianStatistics from "../Pages/Dashboard/Librarian/LibrarianStatistics";

import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageBooks from "../Pages/Dashboard/Admin/ManageBooks";
import AdminStatistics from "../Pages/Dashboard/Admin/AdminStatistics";

import Books from "../Pages/Books/Books";
import BookDetails from "../Pages/Books/BookDetails";
import Payment from "../Pages/Payment/Payment";
import Loader from "../Components/Loader";
import Error from "../Pages/Error/Error";
import AdminRoute from "../Pages/Dashboard/Admin/AdminRoute";
import LibrarianRoute from "../Pages/Dashboard/Librarian/LibrarianRoute";
import CustomerRoute from "../Pages/Dashboard/Customer/CustomerRoute";
import EditBook from "../Pages/Dashboard/Librarian/EditBook";
import Wishlist from "../Pages/Dashboard/Customer/Wishlist";

// Import new pages
import HowItWorksPage from "../Pages/HowItWorks/HowItWorks";
import CoveragePage from "../Pages/Coverage/Coverage";
import PricingPage from "../Pages/Pricing/Pricing";
import BecomeLibrarianPage from "../Pages/BecomeLibrarian/BecomeLibrarian";
import HelpPage from "../Pages/Help/Help";
import ContactPage from "../Pages/Contact/Contact";
import FAQPage from "../Pages/FAQ/FAQ";
import ShippingPage from "../Pages/Shipping/Shipping";
import ReturnsPage from "../Pages/Returns/Returns";
import PrivacyPolicyPage from "../Pages/Legal/PrivacyPolicy";
import TermsOfServicePage from "../Pages/Legal/TermsOfService";
import CookiePolicyPage from "../Pages/Legal/CookiePolicy";
import RefundPolicyPage from "../Pages/Legal/RefundPolicy";

// Dashboard Home Component with Role-based Routing
import DashboardHome from "../Pages/Dashboard/DashboardHome";

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
            { path: "payment-success", element: <Payment /> },
            
            // Quick Links Pages
            { path: "how-it-works", element: <HowItWorksPage /> },
            { path: "coverage", element: <CoveragePage /> },
            { path: "pricing", element: <PricingPage /> },
            { path: "become-librarian", element: <BecomeLibrarianPage /> },
            
            // Support Pages
            { path: "help", element: <HelpPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "faq", element: <FAQPage /> },
            { path: "shipping", element: <ShippingPage /> },
            { path: "returns", element: <ReturnsPage /> },
            
            // Legal Pages
            { path: "privacy-policy", element: <PrivacyPolicyPage /> },
            { path: "terms-of-service", element: <TermsOfServicePage /> },
            { path: "cookie-policy", element: <CookiePolicyPage /> },
            { path: "refund-policy", element: <RefundPolicyPage /> }
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
            /* ================= DASHBOARD HOME (Role-based) ================= */
            {
                index: true,
                element: <DashboardHome />
            },

            /* ================= ADMIN ROUTES ================= */
            {
                path: "admin-stats",
                element: (
                    <AdminRoute>
                        <AdminStatistics />
                    </AdminRoute>
                )
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

            /* ================= LIBRARIAN ROUTES ================= */
            {
                path: "librarian-stats",
                element: (
                    <LibrarianRoute>
                        <LibrarianStatistics />
                    </LibrarianRoute>
                )
            },
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

            /* ================= CUSTOMER ROUTES ================= */
            {
                path: "user-stats",
                element: (
                    <CustomerRoute>
                        <UserStatistics />
                    </CustomerRoute>
                )
            },
            { 
                path: "my-orders", 
                element: (
                    <CustomerRoute>
                        <MyOrders />
                    </CustomerRoute>
                )
            },
            { path: "my-profile", element: <UserProfile /> },
            { 
                path: "my-invoices", 
                element: (
                    <CustomerRoute>
                        <MyInvoices />
                    </CustomerRoute>
                )
            },
            { 
                path: "wishlist", 
                element: (
                    <CustomerRoute>
                        <Wishlist />
                    </CustomerRoute>
                )
            }
        ]
    }
]);
