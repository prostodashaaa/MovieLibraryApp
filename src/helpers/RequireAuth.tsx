import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const users = useSelector((s: RootState) => s.user.users);

  if (users.some((i) => i.isLogined == true)) {
    return children;
  }

  return <Navigate to="/login" />;
};
