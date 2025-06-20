import { Link, useSearchParams } from "react-router";
import { mockup } from "../mockup";

export default function Filter() {
    const { brand } = mockup.car;
    const [searchParam] = useSearchParams();
    let searchBrand = searchParam.get('brand')
    return (
        <div
            className=" search-car__filter ...  
                        flex
                        flex-col
                    bg-gray-1/40
                    w-full
                        md:bg-gradient-to-t md:from-gray-1 md:to-white 
                        md:w-fit
                        md:max-w-7xl
                        pt-2
                        px-4
                        pb-6
                        md:px-16
                        md:gap-4
                        md:rounded-lg
                        md:flex-row
                        "
        >


            <div
                className=" search-car__card ... 
                --scroll-hide
                flex 
                flex-col
                flex-wrap
                items-center
                justify-center
                md:flex-11/12
                h-[100px]
                overflow-x-scroll
                overflow-y-hidden
                md:h-fit
                md:flex-row
                md:flex-nowrap
                md:pt-4
                md:overflow-visible
                w-full
                gap-1
                            md:gap-8
                            "
            >

                {brand.list.map(({ brandName, img }, index) =>
                    <Link
                        to={`/?brand=${brandName}`}
                        className={` search-car__brand-card --btn ${searchBrand === brandName && "active"} ... 
                            aspect-1/1
                            w-[100px]
                            p-1
                            md:min-w-[150px]
                            md:px-4
                            rounded-lg
                                    `}
                        key={index}
                    >
                        <img className="search-car__brand-image >> w-full  aspect-1/1 object-scale-down text-blue-2 | md:aspect-1/1 | md:object-scale-down | " src={img} alt="" />
                        <p className="search-car__brand-name >> hidden | text-center font-bold text-blue-2 | md:block" >{brandName}</p>
                    </Link>
                )}
            </div>


            <Link to={`/?brand=all`} className={`search-car__btn-all --btn *** text-center ${searchBrand === "all" | searchBrand === null && "active"} >> py-3 px-8 w-[95%] md:w-fit | text-blue-2 font-bold | rounded-lg | md:py-2.5 md:px-4 `} > ทั้งหมด</Link>

        </div>

    )

};
