import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { UserProvider } from "../../context/UserContext";

function Layout() {
  return (
    <UserProvider>
      <Header />
      <Outlet />
    </UserProvider>
  );
}

export default Layout;
