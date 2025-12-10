import React from 'react';
import Logo from '../Components/Logo';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../Hooks/useAuth';
// import layoutImg from '../assets/login_register.svg'

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

            <div className='min-h-screen flex w-full  bg-[url("assets/login_register.svg")] bg-no-repeat bg-center bg-cover'>
                {/* Left side form */}
                <div className='w-full  lg:w-[45%] bg-white/70 lg:bg-white/50 bg-blend-overlay flex  items-center justify-center md:rounded-r-4xl'>
                    <Outlet />
                </div>                 
            </div>
        </>
    );
};

export default LoginRegister;