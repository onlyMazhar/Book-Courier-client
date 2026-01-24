import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const CustomerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isRoleLoading] = useRole();
    const location = useLocation();

    // Still checking auth or role
    if (loading || isRoleLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    // Not logged in
    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }

    // Logged in but not customer (user role)
    if (role !== "user") {
        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );
    }

    // Authorized customer
    return children;
};

export default CustomerRoute;