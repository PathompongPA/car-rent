import { Link, useSearchParams } from "react-router";
import { mockup } from "../mockup";

export default function ResultCar() {
    const [searchParam] = useSearchParams();
    const { list } = mockup.car.all;

    let searchBrand = searchParam.get('brand')
    let isHomePage = searchBrand === "all" | searchBrand === null
    let cars = isHomePage ? list : list.filter((element) => element.brandName === searchBrand)

    return (
        <div className="result-car >> flex flex-col  gap-4 flex-wrap justify-center  | min-w-[150px]  lg:min-h-[300px] w-full lg:gap-4  p-4 | bg-linear-to-b from-white to-blue-2/10  | lg:max-w-7xl md:bg-white md:bg-none snap-start ">
            <div className="flex flex-wrap justify-center min-h-[50vh] md:min-h-[200px] gap-4">
                {cars.map(({ thumbnail, brandName, carName, carId }, index) =>
                    <Link to={`/car/?id=${carId}`} onClick={() => { window.scrollTo(0, 0) }}
                        className="result-car__card --btn >> flex flex-col items-center |
                                bg-gray-1/40
                                md:bg-transparent
                                  text-blue-2
                                   rounded-lg |
                                   pb-6
                                  w-full
                                  sm:w-[350px]
                                  active:text-white active:bg-blue-2/70 
                                  hover:text-white hover:bg-blue-2/90
                                   "
                        key={`${carId}+${index}`} >
                        <img className="result-car__img >> aspect-3/2 lg:aspect-16/9 object-cover | w-full rounded-lg | md:w-full " src={thumbnail} alt={`thumbnail-${brandName}-${carName}`} />
                        <h1 className="result-car__title >> w-full text-nowrap text-center overflow-ellipsis overflow-hidden font-thin | md:text-center md:p-4">{`${brandName} ${carName}`}</h1>
                    </Link>
                )}
            </div>
        </div>
    )
};
