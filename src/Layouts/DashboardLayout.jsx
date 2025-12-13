import React, { useState } from 'react';
import { Menu, User, LogOut, ChevronLeft, ChevronRight, Settings, Bell, Home, Briefcase, DollarSign, CircleUserRound } from 'lucide-react';
import { Link, Outlet } from 'react-router';
import { useAuth } from '../Hooks/useAuth';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const { user } = useAuth()

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between z-50">
                <div className="flex items-center gap-4">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
                        <Menu size={20} />
                    </button>
                    <h1 className="text-xl font-bold text-primary">Dashboard</h1>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                        <Bell size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <div className="relative">
                        <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-lg">



                            {user.photoURL
                                ? <img className='w-9 h-9  rounded-full ' eferrerpolicy="no-referrer" src={user?.photoURL} alt={`Photo of ${user?.displayName}`} />
                                : <CircleUserRound size={32} />
                            }
                            <div>
                                <p className="font-semibold">{user?.displayName}</p>

                            </div>
                        </button>

                        {userMenuOpen && (
                            <div className="absolute top-12 right-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
                                <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                                    {user.photoURL
                                        ? <img className='w-9 h-9  rounded-full ' eferrerpolicy="no-referrer" src={user?.photoURL} alt={`Photo of ${user?.displayName}`} />
                                        : <CircleUserRound size={32} />
                                    }
                                    <div>
                                        <p className="font-semibold">{user?.displayName}</p>
                                        <p className="text-sm text-gray-400">{user?.email}</p>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <Link to="/MyProfile" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                                        <User size={18} />
                                        <span className="text-sm">Profile</span>
                                    </Link>
                                    <a href="/MyProfile" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                                        <Settings size={18} />
                                        <span className="text-sm">Account Settings</span>
                                    </a>
                                    <hr className="my-2" />
                                    <a href="#" className="flex items-center gap-3 p-2 rounded hover:bg-red-50 text-red-600">
                                        <LogOut size={18} />
                                        <span className="text-sm">Sign Out</span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside className={`fixed top-16 left-0 bottom-0 bg-gray-800 text-white transition-all duration-300 z-40 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
                <div className="p-4 space-y-2">
                    <a href="#" className="flex items-center gap-4 p-3 bg-primary rounded-lg">
                        <Home size={20} />
                        {sidebarOpen && <span className="text-sm font-medium">Overview</span>}
                    </a>
                    <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700">
                        <Briefcase size={20} />
                        {sidebarOpen && <span className="text-sm font-medium">Projects</span>}
                    </a>
                    <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700">
                        <DollarSign size={20} />
                        {sidebarOpen && <span className="text-sm font-medium">Finances</span>}
                    </a>
                    <a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700">
                        <Settings size={20} />
                        {sidebarOpen && <span className="text-sm font-medium">System</span>}
                    </a>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-lg">
                        {sidebarOpen && <span className="text-sm font-medium">Collapse</span>}
                        {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`pt-16 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to the Dashboard!</h2>
                <div className="p-6 bg-white rounded-lg shadow">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;