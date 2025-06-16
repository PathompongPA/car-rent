import { Link, useSearchParams } from "react-router";
import { mockup } from "../mockup";

export default function ResultCar() {
    const [searchParam] = useSearchParams();
    const { list } = mockup.car.all;

    let searchBrand = searchParam.get('brand')
    let isHomePage = searchBrand === "all" | searchBrand === null
    let cars = isHomePage ? list : list.filter((element) => element.brandName === searchBrand)

    return (
        <div className="result-car >> flex flex-row flex-wrap items-center justify-center | w-full lg:max-w-7xl gap-2 p-2 py-8 | bg-linear-to-b from-white to-blue-2/10  | md:bg-white md:bg-none ">
            {cars.map(({ thumbnail, brandName, carName, carId }, index) => {
                return (
                    <Link to={`/car?id=${carId}`} onClick={() => document.getElementById("gallery").scrollIntoView()} className="result-car__card --btn >> flex flex-col items-center | w-[48%] p-1.5 | text-blue-1 rounded-lg | md:w-[30%] md:gap-5 md:pb-8 md:p-4 | active:text-white active:bg-blue-2/70 hover:text-white hover:bg-blue-2" key={`result-car__${carId} ${index}`} >
                        <img className="result-car__img >> aspect-4/3 object-cover | max-w-[40vw] rounded-lg | md:w-full" src={thumbnail} alt={`thumbnail-${brandName}-${carName}`} />
                        <h1 className="result-car__title >> w-full text-nowrap text-start  overflow-ellipsis overflow-hidden font-bold text-description-3 | md:text-center md:text-3xl">{`${brandName} ${carName}`}</h1>
                    </Link>
                )
            })}
        </div>)
};
