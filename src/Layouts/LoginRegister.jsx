import React from 'react';
import Logo from '../Components/Logo';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../Hooks/useAuth';
// import layoutImg from '../assets/picture.svg'

const LoginRegister = () => {
    const { user, loading } = useAuth()
    if (loading) {
        return <div className="min-h-screen w-full flex justify-center items-center border"><div class="loader"></div></div>;
    }
    if (user) {
        return <Navigate to={'/'} />
    }
    else return (
        <>
            <div className='absolute mt-2 lg:mt-4 md:ml-8 ml-[20%]  '>
                <Logo />
            </div>

            <div className='min-h-screen flex w-full '>
                {/* Left side form */}
                <div className='w-full    lg:w-[45%] bg-white   bg-blend-overlay flex  items-center justify-center lg:rounded-r-4xl'>
                    <Outlet />
                </div>
                <div className='   -z-10 -ml-24 flex-1 bg-[url("assets/picture.svg")] bg-no-repeat bg-center bg-cover'>
                    {/* <img src={layoutImg} alt="" /> */}
                </div>
            </div>
        </>
    );
};

export default LoginRegister;