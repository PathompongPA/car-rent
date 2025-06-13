import { Outlet } from "react-router"
import { Contact, Footer, GalleryCar, JourneyBooking, NavigationBar, QAndAComponent, ResultCar, Review, SearchCar } from "../components"

export default function HomePage() {
    return (
        <div className="home-page flex flex-col items-center justify-center">
            <NavigationBar />
            <SearchCar />
            <GalleryCar />
            <Outlet />
            <JourneyBooking />
            <Review />
            <Contact />
            <QAndAComponent />
            <Footer />
        </div>
    )
};
