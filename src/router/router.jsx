import { createHashRouter } from "react-router";
import { Calendar, Contact, DescriptionCar, Filter, Footer, GalleryCar, JourneyBooking, NavigationBar, Promotion, ResultCar, Review } from "../components/frontEnd";
import { HomePage } from "../pages/frontEnd";
import { Admin, FormBooking, FormCar, FormCustomer } from "../components/admin";
import { fetchApi } from "../utility";
import { CarPage, CustomerPage, HistoryBookingPage } from "../pages/admin";

async function adminLoader() {
    const [brandRes, carRes, customer, booking] = await Promise.all([
        fetchApi("GET", "/api/car/brand"),
        fetchApi("GET", "/api/car/"),
        fetchApi("GET", "/api/customer/"),
        fetchApi("GET", "/api/booking?car=e5fae1da-ceec-4121-a158-d6e4a2337d28"),
    ])
    const Brand = await brandRes
    const Car = await carRes
    const Customer = await customer
    const Booking = await booking
    return { Brand, Car, Customer, Booking }
}

const router = createHashRouter([
    {
        path: "/224",
        element: <Admin />,
        children: [
            {
                path: "booking",
                element: <FormBooking />,
                loader: adminLoader,
            },
            {
                path: "history/booking",
                element: <HistoryBookingPage />,
                loader: adminLoader,
            },
            {
                path: "car",
                element: <CarPage />,
                loader: adminLoader,
            },
            {
                path: "customer",
                element: <CustomerPage />,
                loader: adminLoader,
            },
            {
                path: "ui",
                element: <FormBooking />,
                loader: adminLoader,
            }
        ],
        loader: adminLoader,
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
                loader: adminLoader
            },
        ],
    },
    {
        path: "/car",
        loader: adminLoader,
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