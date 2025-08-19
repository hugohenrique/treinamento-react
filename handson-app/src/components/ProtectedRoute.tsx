import { ReactNode } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex-items justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-2">
            <p className="text-sm text-gray-600">Verificando autenticação...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="login" state={{ from: location }} replace />
  }

  return children;
}