import { createBrowserRouter } from "react-router";
import { NavigationBar } from "../components";

const router = createBrowserRouter([{
    path: "/",
    element: <NavigationBar />
}])

export { router }