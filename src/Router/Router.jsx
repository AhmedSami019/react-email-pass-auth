import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true, 
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: "signUp",
                Component: Register
            }
        ]
    }
])