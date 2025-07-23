import { Outlet, useLocation } from "react-router"
import { Brander, Footer, NavigationBar, QAndAComponent } from "../../components/frontEnd"
import { useEffect } from "react"

export default function HomePage() {
    let location = useLocation()
    useEffect(() => {
        if (location.pathname === "/") { document.title = "รถเช่าบ้านคุณบี 88" }
    }, [location])

    return (
        <div className="home-page *:flex *:items-center *:justify-center flex flex-col justify-center items-center  ">
            <NavigationBar />
            <Brander />
            <Outlet />
            <QAndAComponent />
            <Footer />
        </div>
    )
};
