import React from 'react';
import useRole from '../../Hooks/useRole';
import AdminStatistics from './Admin/AdminStatistics';
import LibrarianStatistics from './Librarian/LibrarianStatistics';
import UserStatistics from './Customer/UserStatistics';
import Loader from '../../Components/Loader';

const DashboardHome = () => {
    const [role, isRoleLoading] = useRole();

    if (isRoleLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    // Route to appropriate dashboard based on role
    switch (role) {
        case 'admin':
            return <AdminStatistics />;
        case 'librarian':
            return <LibrarianStatistics />;
        case 'user':
        default:
            return <UserStatistics />;
    }
};

export default DashboardHome;