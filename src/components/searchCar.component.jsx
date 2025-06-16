import { mockup } from "../mockup";
import { Link, useSearchParams } from "react-router";

export default function SearchCar() {
    const { bigImg } = mockup.component.search;
    const { brand } = mockup.car;
    const [searchParame] = useSearchParams()
    let searchBrand = searchParame.get("brand")

    return (
        <div className="search-car >> relative | w-full | md:flex md:justify-center | md:pt-0 md:h-[680px] lg:snap-center" >
            <div className="search-car__container >> flex flex-col | w-full gap-4 | items-start justify-center md:flex-row md:w-7xl" >
                <img id="booking" className="search-car__big-image >> aspect-16/9 object-cover | md:h-[500px] md:w-full " src={bigImg} alt="big image" />
                <div className="search-car__filter >> flex justify-center items-center flex-wrap | w-[95%] p-4 pt-8 gap-4 | bg-gradient-to-t from-5% from-gray-1 to-55%% to-white drop-shadow-xl/50 | md:flex-nowrap md:absolute md:bottom-8 | md:w-fit md:px-8 md:py-4 md:gap-8 md:rounded-lg ">
                    <div className="search-car__card >> flex justify-between flex-wrap | w-full gap-4 | md:gap-8">
                        {brand.list.map(({ brandName, img }, index) =>
                            <Link to={`/?brand=${brandName}`} className={`search-car__brand-card --btn ${searchBrand === brandName ? "active" : searchBrand === null ? "active" : searchBrand === "all" && "active"} >> flex flex-col justify-center items-center flex-wrap | p-2 | backdrop-blur-lg bg-white/15 rounded-lg | md:px-4 md:py-2.5 md:gap-2.5 | active:bg-blue-1 `} key={index} >
                                <img className="search-car__brand-image >> aspect-1/1 object-scale-down | max-w-[12vw] | md:object-scale-down md:aspect-1/1 | md:max-w-[100px] " src={img} alt="" />
                                <p className="search-car__brand-name >> hidden | text-center font-bold text-blue-1| md:block" >{brandName}</p>
                            </Link>
                        )}
                    </div>
                    <Link to={`/?brand=all`} className={`search-car__btn-all --btn *** text-center ${searchBrand === "all" | searchBrand === null && "active"} >> py-1 w-full backdrop-blur-lg  bg-white/15 | font-bold text-description-2 | rounded-lg | md:w-fit md:py-2.5 md:px-4`} > All </Link>
                </div>
            </div>
        </div>
    )
};
