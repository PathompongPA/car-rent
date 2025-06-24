import { createHashRouter } from "react-router";
import { Calendar, Contact, DescriptionCar, Filter, Footer, GalleryCar, JourneyBooking, NavigationBar, Promotion, ResultCar, Review } from "../components/frontEnd";
import { HomePage } from "../pages/frontEnd";
import { FormBrandCar, FormCar } from "../components/admin";

const router = createHashRouter([
    {
        path: "/224",
        element:
            <div className="">
                <FormBrandCar />
                <FormCar />
            </div>
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