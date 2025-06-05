import { NavigationBar, SearchCar } from "../components"

export default function HomePage() {
    function Box(params) {
        return (
            <div
                className="
                home-page
                "
            >
                {params.children}
            </div>
        )

    }
    return (
        <Box>
            <NavigationBar />
            <SearchCar />
        </Box>
    )
};
