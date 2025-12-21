import { Navigate } from "react-router"; 
import useRole from "../../../Hooks/useRole";

const LibrarianRoute = ({ children }) => {
    const [role, isRoleLoading] = useRole();

    if (isRoleLoading) return null;

    if (role !== "librarian") {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default LibrarianRoute;
