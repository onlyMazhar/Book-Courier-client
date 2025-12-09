import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (

        <button className="btn  bg-white text-black border-[#e5e5e5]">
            <FcGoogle size={14} className='mb-1'/>
            Login with Google
        </button>

    );
};

export default SocialLogin;