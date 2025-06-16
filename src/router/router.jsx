import { createHashRouter } from "react-router";
import { HomePage } from "../pages";
import { Calendar, Contact, DescriptionCar, GalleryCar, JourneyBooking, Promotion, ResultCar, Review } from "../components";

const router = createHashRouter([
    {
        path: "*",
        element: <GalleryCar />
    },
    {
        path: "/",
        title: "test",
        element: <HomePage />,
        children: [
            {
                path: "",
                element:
                    [
                        <ResultCar />,
                        <JourneyBooking />,
                        <Review />,
                        <Contact />
                    ]
            },
            {
                path: "/car",
                element:
                    [
                        <GalleryCar />,
                        <DescriptionCar />,
                        <Calendar />,
                        <Promotion />,
                        <Contact />,
                        <JourneyBooking />,
                        <Review />
                    ]
            }
        ]
    }])

export { router }