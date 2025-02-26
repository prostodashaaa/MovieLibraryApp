import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Login } from "./pages/Login/Login";
import Layout from "./layouts/Layout/Layout";
import { Favorites } from "./pages/Favorites/Favorites";
import { Movie } from "./pages/Movie/Movie";
import { ErrorPage } from "./pages/Error/Error";
import axios, { AxiosError } from "axios";
import { PREFIX } from "./helpers/PREFIX";
import { RequireAuth } from "./helpers/RequireAuth";
import { Auth } from "./layouts/Auth/Auth";
import { UserProvider } from "./context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
        errorElement: <ErrorPage>Что-то пошло не так</ErrorPage>,
        loader: async ({ params }) => {
          try {
            const { data } = await axios.get(`${PREFIX}tt=${params.id}`);
            return data;
          } catch (e) {
            if (e instanceof AxiosError) {
              console.error(e.message);
            }
          }
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Auth />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  { path: "*", element: <ErrorPage>{"Страница не найдена"}</ErrorPage> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
