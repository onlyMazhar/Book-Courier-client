import {
    Home, ListPlus, Package, CircleDollarSign, Menu,
    User, LogOut, ChevronLeft, Settings, Bell,
    CircleUserRound, ShoppingBag,
    Heart
} from 'lucide-react';
import { Link, NavLink, Outlet } from 'react-router';
import { useAuth } from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import ThemeToggle from '../Components/ThemeToggle';
import React, { useState } from 'react';

const roleBasedMenu = {
    user: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "My Orders", path: "/dashboard/my-orders", icon: ShoppingBag },
        { label: "My Invoices", path: "/dashboard/my-invoices", icon: CircleDollarSign },
        { label: "My Profile", path: "/dashboard/my-profile", icon: CircleUserRound }, 
        { label: "My Wishlist", path: "/dashboard/wishlist", icon: Heart }
    ],

    librarian: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "Add Book", path: "/dashboard/add-book", icon: ListPlus },
        { label: "My Books", path: "/dashboard/my-inventories", icon: Package },
        { label: "Manage Orders", path: "/dashboard/manage-orders", icon: Settings },
        { label: "My Profile", path: "/dashboard/my-profile", icon: CircleUserRound },
    ],

    admin: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "Manage Users", path: "/dashboard/manage-users", icon: User },
        { label: "Manage Books", path: "/dashboard/manage-books", icon: Package },
        { label: "My Profile", path: "/dashboard/my-profile", icon: CircleUserRound },
    ],
};


const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const { user, userLogout } = useAuth();
    // const location = useLocation();
    const [role, isRoleLoading] = useRole();


    if (isRoleLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }


    const sidebarMenu = roleBasedMenu[role] || [];

    const toggleSidebar = () => setSidebarOpen(prev => !prev);

    const handleUserLogout = () => {
        userLogout();
    };

    return (
        <div className="min-h-screen bg-base-200">
            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-base-100 border-b border-base-300 px-4 flex items-center justify-between z-50">
                <div className="flex items-center gap-4">
                    <button onClick={toggleSidebar} className="p-2 hover:bg-base-200 rounded-lg text-base-content">
                        {sidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
                    </button>
                    <h1 className="text-xl font-bold text-primary">Dashboard</h1>
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle variant="dashboard" />
                    
                    <button className="p-2 hover:bg-base-200 rounded-lg relative text-base-content">
                        <Bell size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setUserMenuOpen(!userMenuOpen)}
                            className="flex items-center gap-2 p-1 hover:bg-base-200 rounded-lg text-base-content"
                        >
                            {user?.photoURL
                                ? <img className="w-9 h-9 rounded-full border border-base-300" src={user.photoURL} alt="User" />
                                : <CircleUserRound size={32} />
                            }
                            <p className="font-semibold hidden sm:block">
                                {user?.displayName}
                            </p>
                        </button>

                        {userMenuOpen && (
                            <div className="absolute top-12 right-0 w-64 bg-base-100 border border-base-300 rounded-lg shadow-lg z-80">
                                <div className="p-4 border-b border-base-300">
                                    <p className="font-semibold text-base-content">{user?.displayName}</p>
                                    <p className="text-sm text-base-content/60">{user?.email}</p>
                                    <p className="text-xs mt-1 capitalize text-primary">
                                        Role: {role}
                                    </p>
                                </div>
                                <div className="p-2">
                                    <NavLink
                                        to="/dashboard/my-profile"
                                        className="flex items-center gap-3 p-2 rounded hover:bg-base-200 text-base-content"
                                    >
                                        <User size={18} />
                                        Profile
                                    </NavLink>

                                    <hr className="my-2 border-base-300" />
                                    <Link
                                        onClick={handleUserLogout}
                                        className="flex items-center gap-3 p-2 rounded hover:bg-red-50 text-red-600"
                                    >
                                        <LogOut size={18} />
                                        Sign Out
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside className={`fixed z-100 top-16 left-0 bottom-0 bg-neutral text-neutral-content w-64 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 space-y-2">
                    {sidebarMenu.map(({ label, path, icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-4 p-3 rounded-lg transition-colors
                                ${isActive ? 'bg-primary text-primary-content' : 'hover:bg-neutral-focus'}`
                            }
                        >
                            {React.createElement(icon, { size: 20 })}
                            <span className="text-sm font-medium">{label}</span>
                        </NavLink>
                    ))}
                </div>
            </aside>

            {/* Main */}
            <main className={`pt-16 p-6 transition-all bg-base-200 min-h-screen ${sidebarOpen ? 'md:ml-64' : ''}`}>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;


