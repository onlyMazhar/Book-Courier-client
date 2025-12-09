import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to={'/'} className="  text-3xl font-bold font-title">Book<span className='font-thin'>Courier</span></Link>

    );
};

export default Logo;