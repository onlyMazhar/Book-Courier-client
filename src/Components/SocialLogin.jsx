import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../Hooks/useAuth';

const SocialLogin = () => {
    const { googleLogin } = useAuth()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (

        <button onClick={handleGoogleLogin} className="btn  bg-white text-black border-[#e5e5e5]">
            <FcGoogle size={14} className='mb-1' />
            Login with Google
        </button>

    );
};

export default SocialLogin;