import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token } = useAuth();

  // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
  if (!token) {
    return <Navigate to="/login" />;
  }

  // 로그인 상태일 경우 children을 렌더링
  return <>{children}</>;
};

export default ProtectedRoute;
