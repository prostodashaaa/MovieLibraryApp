import axios, { AxiosError } from "axios";
import { createBrowserRouter } from "react-router-dom";
import { PREFIX } from "../helpers/PREFIX";
import { RequireAuth } from "../helpers/RequireAuth";
import { Auth } from "../layouts/Auth/Auth";
import Layout from "../layouts/Layout/Layout";
import { ErrorPage } from "../pages/Error/Error";
import { Favorites } from "../pages/Favorites/Favorites";
import { Login } from "../pages/Login/Login";
import { Main } from "../pages/Main/Main";
import { Movie } from "../pages/Movie/Movie";

export const router = createBrowserRouter([
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
