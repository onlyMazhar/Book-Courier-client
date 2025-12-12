import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Container from './Container';
import Logo from './Logo';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiBloggerLine, RiFacebookCircleLine, RiTwitterXFill } from 'react-icons/ri';
import { FiBookmark, FiShoppingCart } from 'react-icons/fi';
import { useAuth } from '../Hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';
import { Bell, LogOut, Settings, User } from 'lucide-react';

const Navbar = () => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const { userLogout, user } = useAuth()
     const handleUserLogout = () => {
        userLogout()

    }

    const linkClass = "block py-1 px-2 rounded-sm  border border-transparent hover:border-white transition-all"

    const activeLink = ({ isActive }) => {
        return `${linkClass} ${isActive ? 'border border-white font-semibold' : 'text-white'}`
    }


    const links = <>
        <li><NavLink to={'/'} className={activeLink} end>Home</NavLink></li>
        <li><NavLink to={'/books'} className={activeLink}>Books</NavLink></li>
        <li><NavLink to={'/dashboard'} className={activeLink}>DashBoard</NavLink></li>
    </>
    return (
        <>
            <div className='bg-secondary text-white'>
                <Container>
                    <div className=' flex justify-between px-2 py-1 '>
                        <div className='flex gap-4'>
                            <RiFacebookCircleLine />
                            <AiOutlineInstagram />
                            <RiTwitterXFill />
                            <RiBloggerLine />
                        </div>
                        <div className='[&>small]:flex [&>small]:items-center flex gap-4 [&>small]:gap-1'>
                            <small><FiShoppingCart size={16} strokeWidth={2} />  Cart</small>
                            <small><FiBookmark size={16} strokeWidth={2} /> Wishlist</small>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Divider */}
            {/* <div className="divider my-0 p-0 text-white"></div> */}

            {/* Nav Links */}
            <div className="navbar  z-100   shadow-sm bg-primary text-white">
                {/* For Small Device */}
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className=" lg:hidden pl-0  hover:bg-black/50 hover:rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className=" dropdown-content border bg-primary rounded-box z-100 mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>

                    <Logo />

                </div>
                {/* For Large Device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-8  flex px-1">
                        {links}
                    </ul>
                </div>
                {/* Login/Register Options Based on user Login status */}
                <div className='navbar-end relative'>
                    {
                        user
                            ?
                            <div className="flex items-center gap-4">
                                <div className="relative ">
                                    <div onClick={() => setUserMenuOpen(!userMenuOpen)} className="  items-center gap-2 p-1 bg-gray-100 rounded-full">
                                        <img className='w-9 h-9  rounded-full ' src={user?.photoURL} alt="" />
                                    </div>

                                    {userMenuOpen && (
                                        <div className="absolute bg-primary/80 top-12 right-0 w-64 border border-gray-200 rounded-lg shadow-lg">
                                            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                                                <div>
                                                    <p className="font-semibold">{user?.displayName}</p>
                                                    <p className="text-sm text-gray-300">{user?.email}</p>
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <Link  to={'/MyProfile'} className="flex items-center gap-3 p-2 rounded hover:bg-gray-400">
                                                    <User size={18} />
                                                    <span className="text-sm">Profile</span>
                                                </Link>
                                                <Link href="#" className="flex items-center gap-3 p-2 rounded hover:bg-gray-400">
                                                    <Settings size={18} />
                                                    <span className="text-sm">Account Settings</span>
                                                </Link>
                                                <hr className="my-2" />
                                                <Link onClick={handleUserLogout} href="#" className="flex items-center gap-3 p-2 rounded bg-white hover:bg-red-50 text-red-600">
                                                    <LogOut size={18} />
                                                    <span className="text-sm">Sign Out</span>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            :
                            <Link className='btn btn-primary border border-white' to={'/login'}>Login</Link>

                    }
                    {/* <Link className='btn mx-2 btn-primary text-accent' to={'/rider'} >Be A Rider</Link> */}
                    {/* <Link onClick={handleUserLogout} className='   btn' >Logout</Link>
                        <Link className='btn' to={'/login'}>Login</Link> */}
                </div>



            </div>

        </>
    );
};

export default Navbar;