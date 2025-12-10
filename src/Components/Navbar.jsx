import React from 'react';
import { Link, NavLink } from 'react-router';
import Container from './Container';
import Logo from './Logo';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiBloggerLine, RiFacebookCircleLine, RiTwitterXFill } from 'react-icons/ri';
import { FiBookmark, FiShoppingCart } from 'react-icons/fi';
import { useAuth } from '../Hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const { userLogout, user } = useAuth()
    const handleUserLogout = () => {
        userLogout()

    }

    const linkClass = "block py-1 px-2 rounded-sm hover:bg-[#F59E0B]"

    const activeLink = ({ isActive }) => {
        return `${linkClass} ${isActive ? 'bg-primary font-semibold' : 'text-gray-700'}`
    }


    const links = <>
        <li><NavLink to={'/'} className={activeLink} end>Home</NavLink></li>
        <li><NavLink to={'/books'} className={activeLink}>Books</NavLink></li>
        <li><NavLink to={'/dashboard'} className={activeLink}>DashBoard</NavLink></li>
    </>
    return (
        <>
            <Container>
                <div className=' flex justify-between px-2 pt-2'>
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

            {/* Divider */}
            <div className="divider my-0"></div>

            {/* Nav Links */}
            <div className="navbar  z-100 pt-0 shadow-sm -mt-2">
                {/* For Small Device */}
                <div className="navbar-start">
                    <div className="dropdown  ">
                        <div tabIndex={0} role="button" className=" lg:hidden pl-0  hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className=" dropdown-content border bg-white rounded-box z-100 mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>

                    <Logo />

                </div>
                {/* For Large Device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-6 flex px-1">
                        {links}
                    </ul>
                </div>
                {/* Login/Register Options Based on user Login status */}
                <div className='navbar-end'>
                    {
                        user
                            ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className=" rounded-full">
                                        <FaUserCircle color='#F59E0B' size={36} />

                                        {/* <img
                                                alt="Tailwind CSS Navbar component"
                                                /> */}
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu border menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li><a >Profile</a></li>
                                    <div className='hover:bg-gray-200 rounded-sm py-1 flex justify-between px-2'>
                                        <p className='text-[.75rem]'>Toggle </p>
                                        <input type="checkbox" defaultChecked className="toggle toggle-xs " />
                                    </div>
                                    <Link onClick={handleUserLogout} className=' btn-primary text-black  btn' >LogOut</Link>
                                </ul>
                            </div>

                            :
                            <Link className='btn btn-primary text-black' to={'/login'}>Login</Link>

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