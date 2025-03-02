import { ReactNode } from "react";
import { User } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const data = localStorage.getItem("data");
  const storedData: User[] = data ? JSON.parse(data) : [];

  if (storedData.some((user) => user.isLogined == true)) {
    return children;
  }
  
  return <Navigate to="/login" />;
};
