import { Link } from "react-router"
import { mockup } from "../mockup";

export default function NavigationBar() {
    const { component } = mockup;
    const { navbar } = component;
    let handleBtnHamburgerMenu = () => setTimeout(() => { document.getElementsByClassName("navigation__menu")[0].classList.toggle("hidden") }, 75);

    return (
        <div className="navigation >> flex justify-center fixed | top-0 z-10 w-full |  | md:border-b-4 md:border-golden-1 md:bg-white md:drop-shadow-xl/25">
            <div className="navigation__container >> flex flex-col grow bg-transparent | max-w-7xl  md:h-[80px] | md:items-center md:flex-row">
                <div className="navigation__container-logo >> flex grow justify-between items-center | py-2 pr-4 | bg-white | border-b-4 border-golden-1 | md:border-b-0 ">
                    <img className="navigation__logo >> aspect-16/9 object-cover | max-h-[60px]" src={component.navbar.logo} alt="logo" />
                    <a className="navigation__btn-hamburger-menu --btn >> flex flex-col items-end | gap-[5px] | md:hidden" onClick={handleBtnHamburgerMenu} >
                        <div className={`navigation__element-hamburger-menu >> bg-blue-1 w-[40px] h-[5px] rounded-lg `} ></div>
                        <div className={`navigation__element-hamburger-menu >> bg-blue-1 w-[40px] h-[5px] rounded-lg `} ></div>
                        <div className={`navigation__element-hamburger-menu >> bg-blue-1 w-[40px] h-[5px] rounded-lg `} ></div>
                    </a>
                </div>
                <div className="navigation__menu >> hidden flex flex-col items-end | h-[100vh] p-4 gap-8 grow | bg-white/40 backdrop-blur-lg | md:flex md:flex-row md:justify-end | md:gap-8 md:h-fit | md:bg-transparent " onClick={handleBtnHamburgerMenu}>
                    {navbar.title.list.map(({ text, link }, index) =>
                        <Link className="navigation__title --btn >> w-full text-end | text-blue-1 text-xl font-extrabold | md:w-fit | active:text-golden-1" key={text + index} href={link} > {text} </Link>
                    )}
                </div>
            </div>
        </div>
    )
};
