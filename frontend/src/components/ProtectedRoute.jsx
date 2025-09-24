import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
    const { authenticated, isLoading } = useAuth();

    if (!authenticated) {
        return (<Navigate to="/auth" replace />) ;
    }
    if (isLoading) {
        return (
            <>
                <div>
                    Loading...
                </div>
            </>
        )
    }

    return children;
}