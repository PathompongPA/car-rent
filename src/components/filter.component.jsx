import { Link, useSearchParams } from "react-router";
import { mockup } from "../mockup";

export default function Filter() {
    const { brand } = mockup.car;
    const [searchParam] = useSearchParams();
    let searchBrand = searchParam.get('brand')
    return (
        <div
            className=" search-car__filter ...  
            bg-gray-1/50
                        md:bg-gradient-to-t md:from-gray-1 md:to-white 
                        w-full
                        md:w-fit
                        md:max-w-7xl
                        p-2
                        md:p-4
                        pt-4
                        py-3
                        md:px-16
                        gap-4
                        md:gap-4
                        md:rounded-lg
                        flex
                        flex-col
                        md:flex-row
                        "
        >


            <div
                className=" search-car__card ... 
                flex 
                flex-wrap
                items-center
                md:flex-11/12
                justify-center
                gap-2
                            md:gap-8
                            "
            >

                {brand.list.map(({ brandName, img }, index) =>
                    <Link
                        to={`/?brand=${brandName}`}
                        className={` search-car__brand-card --btn ${searchBrand === brandName && "active"} ... 
                            w-[65px]
                            p-1
                md:min-w-[150px]
                aspect-1/1
                md:p-4
                md:pb-1
                rounded-lg
                            
                                    `}
                        key={index}
                    >
                        <img className="search-car__brand-image >> w-full  aspect-1/1 object-scale-down | md:aspect-4/3 | md:object-scale-down | " src={img} alt="" />
                        <p className="search-car__brand-name >> hidden | text-center font-bold text-blue-1| md:block" >{brandName}</p>
                    </Link>
                )}
            </div>


            <Link to={`/?brand=all`} className={`search-car__btn-all --btn *** text-center ${searchBrand === "all" | searchBrand === null && "active"} >> py-2 px-4 w-full md:w-fit | font-bold | rounded-lg | md:py-2.5 md:px-4 `} > All </Link>

        </div>

    )

};
