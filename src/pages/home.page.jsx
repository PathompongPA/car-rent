import { JourneyBooking, NavigationBar, ResultCar, Review, SearchCar } from "../components"

export default function HomePage() {
    return (
        <div className="home-page flex flex-col items-center justify-center">
            <NavigationBar />
            <SearchCar />
            <ResultCar />
            <JourneyBooking />
            <Review />
        </div>
    )
};
