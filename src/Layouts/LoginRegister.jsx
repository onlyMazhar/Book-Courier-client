import React from 'react';
import Logo from '../Components/Logo';
import ThemeToggle from '../Components/ThemeToggle';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../Hooks/useAuth';
import Loader from '../Components/Loader';

const LoginRegister = () => {
    const { user, loading } = useAuth();
    
    if (loading) {
        return (
            <div className="min-h-screen w-full flex justify-center items-center bg-base-200">
                <Loader />
            </div>
        );
    }
    
    if (user) {
        return <Navigate to={'/'} />;
    }
    
    return (
        <div className="min-h-screen bg-base-200">
            {/* Header with Logo and Theme Toggle */}
            <div className="absolute top-6 left-6 right-6 z-10 flex justify-between items-center">
                <Logo />
                <ThemeToggle />
            </div>

            <div className="min-h-screen flex">
                {/* Left side - Form */}
                <div className="w-full lg:w-1/2 bg-base-100 flex items-center justify-center p-6 lg:p-12">
                    <div className="w-full max-w-md">
                        <Outlet />
                    </div>
                </div>
                
                {/* Right side - Background Image */}
                <div className="hidden lg:block lg:w-1/2 relative bg-primary">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40"></div>
                    <div 
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="text-center text-white space-y-6">
                                <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                    </svg>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-black">Welcome to BookCourier</h2>
                                    <p className="text-lg opacity-90 max-w-md">
                                        Discover, rent, and enjoy thousands of books from our community of readers and librarians.
                                    </p>
                                    <div className="grid grid-cols-1 gap-4 mt-8 text-left">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>Thousands of books available</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>Fast delivery within 24 hours</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>Affordable rental prices</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>Community of book lovers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;