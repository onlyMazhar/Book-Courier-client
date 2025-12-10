import React, { useState, useRef, useEffect } from 'react';
import {
    Menu,
    X,
    User,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Settings,
    Bell,
    Home,
    Briefcase,
    DollarSign,
} from 'lucide-react';
import { Outlet } from 'react-router';

// --- Sub-Components ---

/**
 * Renders the main navigation bar at the top.
 */
const Navbar = ({ toggleSidebar, isSidebarExpanded, toggleUserDetails }) => (
    <header className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4 shadow-sm">
        {/* Left Section: Menu Toggle and Brand */}
        <div className="flex items-center space-x-4">
            <button
                onClick={toggleSidebar}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition duration-150"
                aria-label={isSidebarExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            >
                {isSidebarExpanded ? <Menu size={20} /> : <Menu size={20} />}
            </button>
            <div className="text-xl font-bold text-indigo-600 tracking-wider">
                Dashboard
            </div>
        </div>

        {/* Right Section: Notifications and User Menu */}
        <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition duration-150 relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
            </button>
            <div className="relative">
                <button
                    onClick={toggleUserDetails}
                    className="flex items-center space-x-2 p-1.5 hover:bg-gray-100 rounded-lg transition duration-150"
                >
                    <div className="h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        JD
                    </div>
                    <div className="hidden md:block text-sm font-medium text-gray-700">
                        John Doe
                    </div>
                </button>
            </div>
        </div>
    </header>
);

/**
 * Renders the user details popup/dropdown.
 */
const UserDetailsPopup = ({ isVisible, toggleUserDetails, userDetailsRef }) => {
    if (!isVisible) return null;

    return (
        <div
            ref={userDetailsRef}
            className="absolute top-16 right-4 z-50 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-fade-in"
        >
            {/* Header */}
            <div className="p-4 border-b border-gray-100 flex items-center space-x-3 bg-gray-50">
                <div className="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-base">
                    JD
                </div>
                <div>
                    <p className="font-semibold text-gray-800">John Doe</p>
                    <p className="text-sm text-gray-500 truncate">john.doe@example.com</p>
                </div>
            </div>

            {/* Menu Items */}
            <div className="p-2">
                <MenuItem icon={User} text="Profile" />
                <MenuItem icon={Settings} text="Account Settings" />
                <div className="border-t border-gray-100 my-2"></div>
                <MenuItem icon={LogOut} text="Sign Out" isDanger={true} />
            </div>

            {/* Close Button (Optional, for mobile views) */}
            <button
                onClick={toggleUserDetails}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-700 md:hidden"
                aria-label="Close menu"
            >
                <X size={18} />
            </button>
        </div>
    );
};

const MenuItem = ({ icon: Icon, text, isDanger = false }) => (
    <a
        href="#"
        className={`flex items-center space-x-3 p-2 rounded-lg transition duration-150 hover:bg-indigo-50 
        ${isDanger} ? 'text-red-500 hover:text-red-700' : 'text-gray-700 hover:text-indigo-600'
    `}
    >
        <Icon size={18} />
        <span className="text-sm font-medium">{text}</span>
    </a>
);

/**
 * Renders the collapsible sidebar on the left.
 */
const Sidebar = ({ isExpanded, toggleSidebar }) => {
    const widthClass = isExpanded ? 'w-64' : 'w-20';

    return (
        <aside className={`sidebar-transition ${widthClass} h-screen bg-gray-800 text-white flex flex-col fixed z-40 top-0 left-0 pt-16`} >
            <div className="flex-grow p-4 space-y-2">
                <SidebarItem
                    icon={Home}
                    text="Overview"
                    isExpanded={isExpanded}
                    isActive={true} />
                <SidebarItem
                    icon={Briefcase}
                    text="Projects"
                    isExpanded={isExpanded} />
                <SidebarItem
                    icon={DollarSign}
                    text="Finances"
                    isExpanded={isExpanded} />
                <SidebarItem
                    icon={Settings}
                    text="System"
                    isExpanded={isExpanded} />
            </div>

            {/* Collapse/Expand Toggle Button at the bottom */}
            <div className="p-4 border-t border-gray-700">
                <button onClick={toggleSidebar} className={`flex items-center justify-${isExpanded ? 'between' : 'center'} w-full p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition duration-150`} aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
                >{isExpanded && (<span className="text-sm font-medium">Collapse</span>)}
                    {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </button>
            </div>
        </aside>
    );
};

const SidebarItem = ({ icon: Icon, text, isExpanded, isActive = false }) => (
    <a href="#" className={`flex items-center space-x-4 p-3 rounded-lg transition duration-150 ${isActive
        ? 'bg-indigo-600 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        } ${isExpanded ? 'justify-start' : 'justify-center'}`}
        title={!isExpanded ? text : undefined}
    ><Icon size={20} />{isExpanded && <span className="text-sm font-medium">{text}</span>}
    </a>
);

// --- Main Component ---

export function DashboardLayout() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const [isUserDetailsVisible, setIsUserDetailsVisible] = useState(false);

    // Ref to close the popup when clicking outside
    const userDetailsRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    const toggleUserDetails = () => {
        setIsUserDetailsVisible(!isUserDetailsVisible);
    };

    // Effect to handle clicks outside the user details popup
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userDetailsRef.current && !userDetailsRef.current.contains(event.target) && isUserDetailsVisible) {
                // Prevent closing if the click was on the button that opened it (handled by the button's onClick)
                // We'll rely on the state toggle to handle the button click itself.
                // This is a common pattern to close on outside click.
                const isUserButton = event.target.closest('button').textContent.includes('JD');
                if (!isUserButton) {
                    setIsUserDetailsVisible(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isUserDetailsVisible]);


    // Calculates the margin needed for the main content to move with the sidebar
    const mainContentMargin = isSidebarExpanded ? 'ml-64' : 'ml-20';
    const mainContentTransition = 'sidebar-transition'; // Uses the custom transition class

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar Section */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar
                    toggleSidebar={toggleSidebar}
                    isSidebarExpanded={isSidebarExpanded}
                    toggleUserDetails={toggleUserDetails} />
                {/* User Details Popup (positioned relative to the Navbar/Header) */}
                <UserDetailsPopup
                    isVisible={isUserDetailsVisible}
                    toggleUserDetails={toggleUserDetails}
                    userDetailsRef={userDetailsRef} />
            </div>

            {/* Sidebar Section */}
            <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

            {/* Main Content Area */}
            <main className={`pt-16 p-6 ${mainContentMargin} ${mainContentTransition}`} >
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to the Dashboard!</h1>
                <div className="p-6 bg-white rounded-lg shadow-md h-96">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default DashboardLayout;


/**
 * --- Key Tailwind Animations Used ---
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
// @keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
 */