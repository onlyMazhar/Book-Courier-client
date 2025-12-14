import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../Hooks/useAuth';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate();


    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                // console.log(result.user)
                navigate('/');
                toast.success('Login Successfull', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

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