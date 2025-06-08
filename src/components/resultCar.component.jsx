import { mockup } from "../mockup";

export default function ResultCar() {
    const { car } = mockup;
    return (
        <div className="result-car >> flex flex-row flex-wrap items-center justify-center | max-w-7xl gap-2 p-2 py-8 | md:py-8">
            {car.all.list.map(({ thumbnail, brandName, carName }, index) => (
                <div className="result-car__card --btn >> flex flex-col items-center | text-blue-1 rounded-lg | md:w-[30%] md:gap-5 md:pb-8 md:p-4 | active:text-white active:bg-blue-2" key={`result-car__card${index}`} >
                    <img className="result-car__img >> aspect-4/3 object-cover | max-w-[45vw] rounded-lg | md:w-full" src={thumbnail} alt={`thumbnail-${brandName}-${carName}`} />
                    <h1 className="result-car__title >> text-current font-bold | md:text-2xl">{`${brandName} ${carName}`}</h1>
                </div>
            ))}
        </div>)
};
