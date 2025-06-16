import { Outlet, useLocation } from "react-router"
import { Footer, NavigationBar, QAndAComponent, SearchCar } from "../components"
import { useEffect } from "react"

export default function HomePage() {
    let location = useLocation()
    useEffect(() => {
        if (location.pathname === "/") { document.title = "รถเช่าบ้านคุณบี 88" }
    }, [location])

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
