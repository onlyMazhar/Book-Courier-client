import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'

const Logo = () => {
    return (
        <Link to={'/'} className="  text-3xl font-bold font-title">
            <div className='flex   items-center'>
                <img className='w-12 mx-auto' src={logo} alt="Book Curier Logo" />
                <div>Book<span className='font-thin'>Courier</span></div>
            </div>
        </Link>

    );
};

export default Logo;