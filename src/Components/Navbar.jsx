import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import Container from './Container';
import Logo from './Logo';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiBloggerLine, RiFacebookCircleLine, RiTwitterXFill } from 'react-icons/ri';
import { FiBookmark, FiShoppingCart, FiSearch, FiMenu } from 'react-icons/fi';
import { useAuth } from '../Hooks/useAuth';
import { CircleUserRound, LogOut, User, LayoutDashboard, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { userLogout, user } = useAuth();

    // Change background on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleUserLogout = () => {
        userLogout();
        setUserMenuOpen(false);
    };

    const linkClass = "relative py-2 px-1 font-medium transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all hover:before:w-full";

    const activeLink = ({ isActive }) =>
        `${linkClass} ${isActive ? 'text-white before:w-full' : 'text-white/80 hover:text-white'}`;

    const navLinks = (
        <>
            <li><NavLink to={'/'} className={activeLink} end>Home</NavLink></li>
            <li><NavLink to={'/books'} className={activeLink}>Books</NavLink></li>
            <li><NavLink to={'/dashboard'} className={activeLink}>Dashboard</NavLink></li>
          

        </>
    );

    return (
        <header className="fixed top-0 w-full z-50 transition-all duration-300">
            {/* 1. TOP BAR - Socials & Quick Links */}
            <div className={`bg-emerald-700 text-white/70 py-1.5 transition-all ${scrolled ? 'hidden' : 'block'}`}>
                <Container>
                    <div className="flex justify-between items-center px-4 text-xs font-medium">
                        <div className="flex gap-4 items-center">
                            <a href="#" className="hover:text-white transition-colors"><RiFacebookCircleLine size={16} /></a>
                            <a href="#" className="hover:text-white transition-colors"><AiOutlineInstagram size={16} /></a>
                            <a href="#" className="hover:text-white transition-colors"><RiTwitterXFill size={14} /></a>
                        </div>
                        <div className="flex gap-6 items-center">
                            <Link to="/wishlist" className="flex items-center gap-1.5 hover:text-white"><FiBookmark /> Wishlist</Link>
                            <Link to="/cart" className="flex items-center gap-1.5 hover:text-white"><FiShoppingCart /> Cart</Link>
                        </div>
                    </div>
                </Container>
            </div>

            {/* 2. MAIN NAVBAR */}
            <nav className={`transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2' : 'bg-primary py-4'}`}>
                <Container>
                    <div className="navbar p-0 min-h-fit">
                        {/* Mobile Menu */}
                        <div className="navbar-start lg:w-1/4">
                            <div className="dropdown lg:hidden">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
                                    <FiMenu size={24} />
                                </div>
                                <ul tabIndex={0} className="dropdown-content mt-3 z-1 p-4 shadow-2xl bg-primary border border-white/10 rounded-2xl w-64 space-y-2">
                                    {navLinks}
                                </ul>
                            </div>
                            <div className="ml-2 lg:ml-0">
                                <Logo color="white" />
                            </div>
                        </div>

                        {/* Desktop Links */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="flex gap-8 list-none">
                                {navLinks}
                            </ul>
                        </div>

                        {/* Actions / User Profile */}
                        <div className="navbar-end gap-3">
                            <button className="btn btn-ghost btn-circle text-white hidden sm:flex">
                                <FiSearch size={20} />
                            </button>

                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                                        className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-white/10 transition-colors border border-white/20"
                                    >
                                        <img
                                            className="w-8 h-8 rounded-full border border-white/50 object-cover"
                                            src={user?.photoURL || "/default-avatar.png"}
                                            alt="profile"
                                        />
                                        <ChevronDown size={14} className={`text-white transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* USER DROPDOWN MENU */}
                                    {userMenuOpen && (
                                        <div className="absolute top-12 right-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden text-neutral animate-in fade-in zoom-in duration-200">
                                            <div className="p-5 bg-gray-50 border-b border-gray-100">
                                                <p className="font-bold text-neutral-800 truncate">{user?.displayName}</p>
                                                <p className="text-xs text-neutral-500 truncate">{user?.email}</p>
                                            </div>
                                            <div className="p-2">
                                                <Link to="/dashboard/my-profile" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group">
                                                    <User size={18} className="text-neutral-400 group-hover:text-primary" />
                                                    <span className="text-sm font-medium">My Profile</span>
                                                </Link>
                                                <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group">
                                                    <LayoutDashboard size={18} className="text-neutral-400 group-hover:text-primary" />
                                                    <span className="text-sm font-medium">Dashboard</span>
                                                </Link>
                                                <div className="divider my-1 opacity-50"></div>
                                                <button
                                                    onClick={handleUserLogout}
                                                    className="flex w-full items-center gap-3 p-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors group"
                                                >
                                                    <LogOut size={18} />
                                                    <span className="text-sm font-bold">Sign Out</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="btn btn-sm md:btn-md bg-white text-primary hover:bg-gray-100 border-none px-6 rounded-full font-bold shadow-lg"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </Container>
            </nav>
        </header>
    );
};

export default Navbar;