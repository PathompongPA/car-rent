import { Link, useSearchParams } from "react-router";
import { mockup } from "../../mockup";

export default function Filter() {
    const { brand } = mockup.car;
    const [searchParam] = useSearchParams();
    let searchBrand = searchParam.get('brand')
    return (
        <div
            className=" search-car__filter ...  
                        flex
                        flex-col
                        items-center
                        bg-gray-1/40
                        w-full
                        pt-2
                        px-4
                        pb-6
                        lg:w-fit
                        lg:p-4
                        lg:pr-10
                        xl:px-16
                        lg:gap-4
                        lg:rounded-lg
                        lg:flex-row
                        lg:bg-gradient-to-t md:from-gray-1 md:to-white 
                        lg:max-w-7xl
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
                h-[100px]
                w-full
                gap-1
                overflow-x-scroll
                overflow-y-hidden
                md:w-[80%]
                lg:flex-11/12
                lg:flex-row
                lg:flex-nowrap
                lg:h-fit
                md:p-4
                xl:overflow-visible
                lg:gap-8
                            "
            >

                {brand.list.map(({ brandName, img }, index) =>
                    <Link
                        to={`/?brand=${brandName}`}
                        className={` search-car__brand-card --btn ${searchBrand === brandName && "active"} ... 
                            
                            group
                            aspect-1/1
                            w-[100px]
                            p-1
                            xl:min-w-[150px]
                            xl:px-4
                            rounded-lg
                                    `}
                        key={index}
                    >
                        <img className="search-car__brand-image >> w-full  aspect-1/1 object-scale-down text-blue-2 | md:aspect-1/1 | md:object-scale-down | " src={img} alt="" />
                        <p className="search-car__brand-name  >> group-hover:text-golden-1 hidden | text-center font-bold text-blue-2 | xl:block" >{brandName}</p>
                    </Link>
                )}
            </div>


            <Link to={`/?brand=all`} className={`search-car__btn-all --btn *** text-center ${searchBrand === "all" | searchBrand === null && "active"} >> py-3 px-8 w-[95%] md:w-[80%] lg:w-fit | text-blue-2 font-bold | rounded-lg | md:py-2.5 md:px-4 `} > ทั้งหมด</Link>

        </div>

    )

};
