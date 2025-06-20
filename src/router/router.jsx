import { createHashRouter } from "react-router";
import { HomePage } from "../pages";
import { Brander, Calendar, Contact, DescriptionCar, Filter, Footer, GalleryCar, JourneyBooking, NavigationBar, Promotion, ResultCar, Review } from "../components";

const router = createHashRouter([
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
                <DescriptionCar />
                <Calendar />
                <Promotion />
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