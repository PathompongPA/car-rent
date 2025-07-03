import { createHashRouter } from "react-router";
import { Calendar, Contact, DescriptionCar, Filter, Footer, GalleryCar, JourneyBooking, NavigationBar, Promotion, ResultCar, Review } from "../components/frontEnd";
import { HomePage } from "../pages/frontEnd";
import { Admin, FormCar } from "../components/admin";
import { fetchApi } from "../utility";

async function adminLoader() {
    const [brandRes, carRes] = await Promise.all([
        fetchApi("GET", "/api/car/brand"),
        fetchApi("GET", "/api/car/")
    ])
    const Brand = await brandRes
    const Car = await carRes
    return { Brand, Car }
}

const router = createHashRouter([
    {
        path: "/224",
        element:
            <div className="bg-gray-900 text-white flex flex-col min-h-[100vh] items-center">
                <h1 className="text-title-1 ">Admin page</h1>
                <Admin />
            </div>,
        loader: adminLoader
    },
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "",
                element:
                    [
                        <Filter />,
                        <ResultCar />,
                        <JourneyBooking />,
                        <Review />,
                        <Contact />
                    ],
                loader: async () => {
                    return await fetchApi("GET", "/api/car/brand")
                }
            },
        ],
    },
    {
        path: "/car",
        element:
            <div className="flex flex-col justify-center items-center">
                <NavigationBar />
                <GalleryCar />
                <Calendar />
                <Promotion />
                <DescriptionCar />
                <Contact />
                <JourneyBooking />
                <Review />
                <Footer />
            </div>,

    },
    {
        path: "*",
        element: <GalleryCar />
    },
])

export { router }