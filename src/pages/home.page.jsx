import { Outlet } from "react-router"
import { Calendar, Contact, Footer, GalleryCar, JourneyBooking, NavigationBar, Promotion, QAndAComponent, ResultCar, Review, SearchCar } from "../components"

export default function HomePage() {
    return (
        <div className="home-page flex flex-col items-center justify-center">
            <NavigationBar />
            <SearchCar />
            <GalleryCar />
            <Calendar />
            <Promotion />
            <Outlet />
            <JourneyBooking />
            <Review />
            <Contact />
            <QAndAComponent />
            <Footer />
        </div>
    )
};
