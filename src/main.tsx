import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Login } from "./pages/Login/Login";
import Layout from "./layouts/Layout/Layout";
import { Favorites } from "./pages/Favorites/Favorites";
import { Error } from "./pages/Error/Error";
import { Movie } from "./pages/Movie/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
  },
  { path: "*", element: <Error /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
