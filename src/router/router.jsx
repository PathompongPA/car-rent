import { createBrowserRouter } from "react-router";
import { NavigationBar } from "../components";
import { HomePage } from "../pages";

const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />
}])

export { router }