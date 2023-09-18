import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantBody from "./components/RestaurantBody";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContex from "./util/UserContext";

const Groceries = lazy(() => import("./components/Groceries"));
const About = lazy(() => import("./components/About"));

const App = () => {
  const [userName, setUsername] = useState("Deepak");

  return (
    <div>
      <UserContex.Provider
        value={{ loggidInUser: userName, setUsername: setUsername }}
      >
        <Header />

        <Outlet />
      </UserContex.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <RestaurantBody /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "groceries",
        element: (
          <Suspense fallback={<h1>Loader...</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
      { path: "/restaurant/:restId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
