import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../Hooks/useAuth';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { saveOrUpdateUser } from '../utils';

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate();


    // const handleGoogleLogin = () => {
    //     const { user } = googleLogin()
    //         .then(() => {
    //             // console.log(result.user)
    //             navigate('/');
    //             toast.success('Login Successfull', {
    //                 position: "top-center",
    //                 autoClose: 2000,
    //                 hideProgressBar: false,
    //                 closeOnClick: false,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "light",
    //                 transition: Bounce,
    //             });

    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     saveOrUpdateUser({
    //         email: user?.email,
    //         name: user?.displayName,
    //         image: user?.photoURL
    //     })



    // }

    const handleGoogleLogin = async () => {
        try {
            const result = await googleLogin();
            const user = result.user;


            await saveOrUpdateUser({
                email: user.email,
                name: user.displayName,
                image: user.photoURL,
                createdAt: new Date(),
            });

            toast.success('Login Successful', {
                position: "top-right",
                autoClose: 1000,
                transition: Bounce,
            });

            navigate('/');
        } catch (err) {
            console.error(err);
            toast.error('Login failed');
        }
    };


    return (

        <button onClick={handleGoogleLogin} className="btn  bg-white text-black border-[#e5e5e5]">
            <FcGoogle size={14} className='mb-1' />
            Login with Google
        </button>

    );
};

export default SocialLogin;