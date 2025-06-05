import logo from "../assets/logo.jpg"
export default function NavigationBar() {
    let mockUp = {
        title: [
            "จอง",
            "โปรโมชั่น",
            "รีวิว",
            "ข่าวสาร",
            "เกี่ยวกับเรา"
        ],
        logo: logo
    }

    function Logo(params) {
        let img = params.img
        return (
            <img
                className="
                    h-16
                    w-32
                    bg-gray-200
                    object-cover
                    "
                src={img}
                alt="รถเช่าบ้านคุณบี88"
            />
        )
    }

    function BtnHamburgerMenu() {
        function handleBtnHamburgerMenu() {
            document.getElementsByClassName("navigation-title")[0].classList.toggle("hidden")
        }
        return (
            <div
                className="
                NavigationBar__btn-hamburger-menu
                flex
                flex-col
                items-end
                justify-center
                gap-1
                md:hidden
                "
                onClick={handleBtnHamburgerMenu}
            >
                <div
                    className="
                    h-1
                    w-8
                    bg-blue-2
                    "
                ></div>
                <div
                    className="
                    h-1 
                    w-8
                    bg-blue-2
                    "
                ></div>
                <div
                    className="
                    h-1 
                    w-8
                    bg-blue-2
                    "
                ></div>
            </div>
        )
    }

    function Title(params) {
        return (
            <ul
                className="
                navigation-title
                flex-col
                gap-4
                w-full
                p-4
                flex
                hidden
                md:flex-row
                md:flex
                md:gap-8
                md:justify-end
                "
            >
                {
                    params.title.map((_params, index) => {
                        return (
                            <li
                                className="
                                text-right
                                "
                                key={_params + index}
                            >
                                {_params}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    function Box(params) {
        return (
            <div
                className="
                        flex 
                        flex-col
                        md:border-b-4
                        md:border-b-golden-1
                        md:flex-row
                        md:justify-between
                        md:items-center
                        "
            >
                {params.children}
            </div>
        )
    }
    function Menu(params) {
        return (
            <div
                className="
                flex  
                p-4
                border-b-4
                border-b-golden-1
                place-content-between
                md:place-content-start
                md:border-0
                "
            >
                {params.children}
            </div>

        )

    }

    return (
        <Box>
            <Menu>
                <Logo img={mockUp.logo} />
                <BtnHamburgerMenu />
            </Menu>
            <Title title={mockUp.title} />
        </Box>
    )
};
