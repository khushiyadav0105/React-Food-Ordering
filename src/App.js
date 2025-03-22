import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";
import Header from './components/Header';
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import Cart from "./components/Cart"

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [UserName, setUserName] = useState("");

  useEffect(() => {
    const data = { name: "Khushi Yadav" };
    setUserName(data.name);
  }, []);

  return (
    // ✅ Correctly wrapped inside <Provider>
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: UserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// ✅ Correctly Defined Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart/>},
      
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
