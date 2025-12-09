import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import './loader.css'
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <div className="min-h-screen w-full flex justify-center items-center border"><div class="loader"></div></div>;
    }
    if (!user) {
        return <Navigate state={location.pathname} to="/login" />
    }
    return children;
};

export default PrivateRoute;