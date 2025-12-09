import React from 'react';
import Logo from '../Components/Logo';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../Hooks/useAuth';

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
            <div className='absolute mt-2 lg:mt-4   lg:ml-8 ml-[25%]  '>
                <Logo />
            </div>

            <div className='min-h-screen flex w-full'>
                {/* Left side form */}
                <div className='flex-1  flex  items-center justify-center w-full'>
                    <Outlet />
                </div>
                {/* Rignt side image */}
                <div className='w-full flex-1 bg-[#f39c12] hidden mg:flex lg:flex'>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    );
};

export default LoginRegister;