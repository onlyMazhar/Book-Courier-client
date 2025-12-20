import React, { useEffect, useState } from 'react';
import {
    Menu, User, LogOut, ChevronLeft, ChevronRight,
    Settings, Bell, CircleUserRound,
    ShoppingBag
} from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router';
import { useAuth } from '../Hooks/useAuth';


import { sidebarMenu } from '../utils/sidebarMenu';

const DashboardLayout = () => {
    // We will initialize sidebarOpen to true for a better desktop experience
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const { user } = useAuth();
    const location = useLocation();

    // Toggle function
    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    // Auto-close sidebar on route change (primarily useful for mobile)
    useEffect(() => {
        // If the screen is small, we close the sidebar on route change
        // For simplicity, we can rely on CSS/Tailwind here, but this is fine too.
        // setSidebarOpen(false); 
    }, [location.pathname]);

    // Optional: Set initial state based on screen size (e.g., always open on MD+)
    // You could use a library or window.innerWidth check here if needed,
    // but the current CSS handles the mobile/desktop view transition effectively.


    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b px-4 flex items-center justify-between z-50">
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleSidebar}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                        {/* Show Menu icon when sidebar is closed, ChevronLeft when open */}
                        {sidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
                    </button>
                    <h1 className="text-xl font-bold text-primary">Dashboard</h1>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                        <Bell size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setUserMenuOpen(!userMenuOpen)}
                            className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-lg"
                        >
                            {user?.photoURL
                                ? <img
                                    className="w-9 h-9 rounded-full border"
                                    referrerPolicy="no-referrer"
                                    src={user.photoURL}
                                    alt={user.displayName}
                                />
                                : <CircleUserRound size={32} />
                            }
                            <p className="font-semibold hidden sm:block">
                                {user?.displayName}
                            </p>
                        </button>

                        {userMenuOpen && (
                            <div className="absolute top-12 right-0 w-64 bg-white border rounded-lg shadow-lg z-50">
                                <div className="p-4 border-b flex items-center gap-3">
                                    {user?.photoURL
                                        ? <img className="w-9 h-9 rounded-full border" src={user.photoURL} alt="User" />
                                        : <CircleUserRound size={32} />
                                    }
                                    <div>
                                        <p className="font-semibold">{user?.displayName}</p>
                                        <p className="text-sm text-gray-400">{user?.email}</p>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <NavLink to="/MyProfile" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                                        <User size={18} />
                                        Profile
                                    </NavLink>
                                    <NavLink to="/settings" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                                        <Settings size={18} />
                                        Settings
                                    </NavLink>
                                   
                                    <hr className="my-2" />
                                    <button className="flex items-center gap-3 p-2 rounded hover:bg-red-50 text-red-600 w-full">
                                        <LogOut size={18} />
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-16 left-0 bottom-0 bg-gray-800 text-white z-40
                    transition-all duration-300
                    w-64
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <div className="p-4 space-y-2">
                    {sidebarMenu.map(({ label, path, icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-4 p-3 rounded-lg transition
                                ${isActive ? 'bg-primary text-white' : 'hover:bg-gray-700'}`
                            }
                        >
                            {React.createElement(icon, { size: 20 })}
                            <span className="text-sm font-medium">{label}</span>
                        </NavLink>
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
                    <button
                        onClick={toggleSidebar}
                        className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-lg"
                    >
                        <span className="text-sm font-medium">
                            {sidebarOpen ? 'Collapse' : 'Expand'}
                        </span>
                        {/* Use ChevronLeft for collapse and Menu for expand */}
                        {sidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main
                className={`
                    pt-16 p-6 transition-all duration-300 
                    ${sidebarOpen ? 'md:ml-64' : 'md:ml-0'}
                `}
            >
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;