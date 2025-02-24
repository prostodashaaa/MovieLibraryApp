import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/use-localStorage.hook";

export interface User {
  name: string;
  isLogined: boolean;
}

export interface UserContextType {
  userNameData: User[];
  handleLogin: (name: string) => void;
  handleLogout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser должен использоваться внутри UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userNameData, setUserNameData] = useLocalStorage("data");

  const handleLogin = (name: string) => {
    setUserNameData((prevData: User[]) => {
      const updatedData = prevData.map((user) =>
        user.name === name ? { ...user, isLogined: true } : user
      );

      if (!prevData.some((user) => user.name === name)) {
        updatedData.push({ name, isLogined: true });
      }

      return updatedData;
    });
  };

  const handleLogout = () => {
    setUserNameData((prevData: User[]) =>
      prevData.map((user) => ({ ...user, isLogined: false }))
    );
  };

  return (
    <UserContext.Provider value={{ userNameData, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
