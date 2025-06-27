import { createHashRouter } from "react-router";
import { Calendar, Contact, DescriptionCar, Filter, Footer, GalleryCar, JourneyBooking, NavigationBar, Promotion, ResultCar, Review } from "../components/frontEnd";
import { HomePage } from "../pages/frontEnd";
import { Admin, FormCar } from "../components/admin";
import { fetchApi } from "../utility";

const router = createHashRouter([
    {
        path: "/224",
        element:
            <div className="bg-gray-900 text-white flex flex-col border-4 min-h-[100vh] justify-center items-center">
                <Admin />
                <FormCar />
            </div>,
        loader: async () => {
            return await fetchApi("GET", "/api/car/brand")
        }
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
                    ]
            },
        ]
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
            </div>
    },
    {
        path: "*",
        element: <GalleryCar />
    },
])

export { router }