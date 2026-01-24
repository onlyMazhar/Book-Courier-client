import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import Container from './Container';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import { 
    Menu, 
    X, 
    Search, 
    ShoppingCart, 
    Heart, 
    User, 
    Settings, 
    LogOut, 
    LayoutDashboard,
    BookOpen,
    Users,
    Package,
    BarChart3,
    FileText,
    ChevronDown
} from 'lucide-react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { user, userLogout } = useAuth();
    const [role, isRoleLoading] = useRole();
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setUserMenuOpen(false);
    }, [location]);

    const handleLogout = () => {
        userLogout();
        setUserMenuOpen(false);
    };

    // Navigation links based on authentication status
    const loggedOutLinks = [
        { to: '/', label: 'Home', end: true },
        { to: '/books', label: 'Books' },
        { to: '/about', label: 'About' }
    ];

    // Navigation links based on authentication status and role
    const getLoggedInLinks = () => {
        const baseLinks = [
            { to: '/', label: 'Home', end: true },
            { to: '/books', label: 'Books' },
            { to: '/dashboard', label: 'Dashboard' }
        ];

        // Only show My Orders and Wishlist for customers (user role)
        if (role === 'user') {
            baseLinks.push(
                { to: '/orders', label: 'My Orders' },
                { to: '/wishlist', label: 'Wishlist' }
            );
        }

        return baseLinks;
    };

    const currentLinks = user ? getLoggedInLinks() : loggedOutLinks;

    // Role-based profile dropdown links
    const getProfileLinks = () => {
        const baseLinks = [
            { to: '/dashboard/user-profile', label: 'My Profile', icon: <User size={18} /> }
        ];

        // Only add My Orders and Wishlist for customers (user role)
        if (role === 'user') {
            baseLinks.push(
                { to: '/dashboard/my-orders', label: 'My Orders', icon: <Package size={18} /> },
                { to: '/dashboard/wishlist', label: 'Wishlist', icon: <Heart size={18} /> }
            );
        }

        if (role === 'admin') {
            return [
                ...baseLinks,
                { divider: true },
                { to: '/dashboard/admin-statistics', label: 'Admin Dashboard', icon: <BarChart3 size={18} /> },
                { to: '/dashboard/manage-users', label: 'Manage Users', icon: <Users size={18} /> },
                { to: '/dashboard/manage-books', label: 'Manage Books', icon: <BookOpen size={18} /> }
            ];
        } else if (role === 'librarian') {
            return [
                ...baseLinks,
                { divider: true },
                { to: '/dashboard/my-books', label: 'My Books', icon: <BookOpen size={18} /> },
                { to: '/dashboard/add-book', label: 'Add Book', icon: <Package size={18} /> },
                { to: '/dashboard/manage-orders', label: 'Manage Orders', icon: <FileText size={18} /> }
            ];
        }

        return baseLinks;
    };

    const linkClass = ({ isActive }) =>
        `relative py-2 px-4 font-medium transition-all duration-300 rounded-lg hover:bg-white/10 ${
            isActive 
                ? 'text-white bg-white/20' 
                : 'text-white/80 hover:text-white'
        }`;

    return (
        <header className="fixed top-0 w-full z-50">
            <nav className={`transition-all duration-300 ${
                scrolled 
                    ? 'bg-primary/95 backdrop-blur-md shadow-xl py-3' 
                    : 'bg-primary py-4'
            }`}>
                <Container>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Logo color="white" />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-2">
                            {currentLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.end}
                                    className={linkClass}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3">
                            {/* Theme Toggle */}
                            <ThemeToggle variant="navbar" />

                            {/* Search Button */}
                            <button className="btn btn-ghost btn-circle text-white hover:bg-white/10 hidden sm:flex transition-all duration-300">
                                <Search size={20} />
                            </button>

                            {/* Cart & Wishlist (only for customers) */}
                            {user && role === 'user' && (
                                <>
                                    <Link 
                                        to="/wishlist" 
                                        className="btn btn-ghost btn-circle text-white hover:bg-white/10 hidden sm:flex transition-all duration-300"
                                    >
                                        <Heart size={20} />
                                    </Link>
                                    <Link 
                                        to="/cart" 
                                        className="btn btn-ghost btn-circle text-white hover:bg-white/10 hidden sm:flex relative transition-all duration-300"
                                    >
                                        <ShoppingCart size={20} />
                                        <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            0
                                        </span>
                                    </Link>
                                </>
                            )}

                            {/* User Profile or Login */}
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                                        className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20"
                                    >
                                        <img
                                            className="w-8 h-8 rounded-full border border-white/50 object-cover"
                                            src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName || 'User'}&background=random`}
                                            alt="Profile"
                                        />
                                        <span className="text-white text-sm font-medium hidden md:block">
                                            {user?.displayName?.split(' ')[0] || 'User'}
                                        </span>
                                        <ChevronDown 
                                            size={16} 
                                            className={`text-white transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} 
                                        />
                                    </button>

                                    {/* Profile Dropdown */}
                                    {userMenuOpen && (
                                        <div className="absolute top-12 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
                                            {/* User Info Header */}
                                            <div className="p-4 bg-gradient-to-r from-primary to-primary-focus text-white">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        className="w-12 h-12 rounded-full border-2 border-white/50 object-cover"
                                                        src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName || 'User'}&background=random`}
                                                        alt="Profile"
                                                    />
                                                    <div>
                                                        <p className="font-bold truncate">{user?.displayName || 'User'}</p>
                                                        <p className="text-xs opacity-80 truncate">{user?.email}</p>
                                                        {!isRoleLoading && (
                                                            <span className="inline-block mt-1 px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium capitalize">
                                                                {role}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Menu Items */}
                                            <div className="p-2">
                                                {getProfileLinks().map((link, index) => (
                                                    link.divider ? (
                                                        <div key={index} className="divider my-2 opacity-30"></div>
                                                    ) : (
                                                        <Link
                                                            key={link.to}
                                                            to={link.to}
                                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group"
                                                        >
                                                            <span className="text-neutral-400 group-hover:text-primary">
                                                                {link.icon}
                                                            </span>
                                                            <span className="text-sm font-medium">{link.label}</span>
                                                        </Link>
                                                    )
                                                ))}
                                                
                                                <div className="divider my-2 opacity-30"></div>
                                                
                                                <button
                                                    onClick={handleLogout}
                                                    className="flex w-full items-center gap-3 p-3 rounded-xl hover:bg-red-50 text-red-600 transition-all duration-300 group"
                                                >
                                                    <LogOut size={18} />
                                                    <span className="text-sm font-bold">Sign Out</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Link
                                        to="/login"
                                        className="btn btn-ghost text-white hover:bg-white/10 hidden sm:flex transition-all duration-300"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="btn btn-secondary btn-sm px-6 rounded-full font-bold shadow-lg"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="btn btn-ghost btn-circle text-white lg:hidden"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
                            <div className="flex flex-col space-y-2 mt-4">
                                {currentLinks.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        end={link.end}
                                        className={({ isActive }) =>
                                            `block py-3 px-4 rounded-lg font-medium transition-colors ${
                                                isActive 
                                                    ? 'text-white bg-white/20' 
                                                    : 'text-white/80 hover:text-white hover:bg-white/10'
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                                
                                {/* Mobile-only links (only for customers) */}
                                {user && role === 'user' && (
                                    <>
                                        <div className="divider opacity-30"></div>
                                        <Link
                                            to="/wishlist"
                                            className="block py-3 px-4 rounded-lg font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            Wishlist
                                        </Link>
                                        <Link
                                            to="/cart"
                                            className="block py-3 px-4 rounded-lg font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            Cart
                                        </Link>
                                    </>
                                )}
                                
                                {!user && (
                                    <Link
                                        to="/login"
                                        className="block py-3 px-4 rounded-lg font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </Container>
            </nav>
        </header>
    );
};

export default Navbar;