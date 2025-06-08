import { Link } from "react-router"
import { mockup } from "../mockup";

export default function NavigationBar() {
    const { component } = mockup;

    function BtnHamburgerMenu({ className }) {
        function handleBtnHamburgerMenu() {
            document.getElementsByClassName("navigation__menu")[0].classList.toggle("hidden")
        }
        return (
            <a onClick={handleBtnHamburgerMenu} className={className} >
                <div className={`navigation__element-hamburger-menu >> bg-blue-2 w-[40px] h-[7px] rounded-lg`} ></div>
                <div className={`navigation__element-hamburger-menu >> bg-blue-2 w-[40px] h-[7px] rounded-lg`} ></div>
                <div className={`navigation__element-hamburger-menu >> bg-blue-2 w-[40px] h-[7px] rounded-lg`} ></div>
            </a>
        )
    }

    function Title({ TitleList, className }) {
        return TitleList.map(({ text, link }, index) => {
            return <Link className={className} key={text + index} href={link} > {text} </Link>
        })
    }

    return (
        <div className="navigation >> flex justify-center fixed | top-0 z-10 w-full | md:sticky | md:border-b-4 md:border-golden-1 md:bg-white md:drop-shadow-xl/25">
            <div className="navigation__container >> flex flex-col grow bg-transparent | max-w-7xl  max-h-[80px] | md:items-center md:flex-row">
                <div className="navigation__container-logo >> flex grow justify-between items-center | py-2 pr-2 | bg-white | border-b-4 border-golden-1 | md:border-b-0 ">
                    <img className="navigation__logo >> aspect-16/9 object-cover | max-h-[60px]" src={component.navbar.logo} alt="logo" />
                    <BtnHamburgerMenu className={"navigation__btn-hamburger-menu >> flex flex-col items-end | gap-[5px] | md:hidden"} />
                </div>
                <div className="navigation__menu >> hidden flex flex-col items-end | p-4 gap-6 grow | bg-blue-1/5 backdrop-blur-lg | md:flex md:flex-row md:justify-end | md:gap-8 | md:bg-transparent">
                    <Title className={"navigation__title >> --btn >> w-fit | text-blue-1 font-extrabold "} TitleList={component.navbar.title.list} />
                </div>
            </div>
        </div>
    )
};
