import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import About from "./components/About.js";
import Error from "./components/Error.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const About = lazy( ()=> import("./components/About.js") );
const Grocery = lazy( ()=> import("./components/Grocery.js"))

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h1>Loading......</h1>}> 
                        <About />
                    </Suspense>
                )
            },
            // {
            //     path: '/about',
            //     element: <About />
            // },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: (
                    <Suspense>
                        <Grocery />
                    </Suspense>
                )
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRoute} />);