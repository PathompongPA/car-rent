import { Outlet } from "react-router"
import { Footer, NavigationBar, QAndAComponent, SearchCar } from "../components"

export default function HomePage() {
    return (
        <div className="home-page flex flex-col items-center justify-center">
            <NavigationBar />
            <SearchCar />
            <Outlet />
            <QAndAComponent />
            <Footer />
        </div>
    )
};
