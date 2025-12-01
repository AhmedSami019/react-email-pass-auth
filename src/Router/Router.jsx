import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true, 
                Component: App
            }
        ]
    }
])