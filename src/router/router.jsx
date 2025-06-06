import { createHashRouter } from "react-router";
import { HomePage } from "../pages";

const router = createHashRouter([{
    path: "/",
    element: <HomePage />
}])

export { router }