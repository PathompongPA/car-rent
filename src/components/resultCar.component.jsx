import { mockup } from "../mockup";

export default function ResultCar() {
    const { car } = mockup;
    return (
        <div className="result-car >> flex flex-row flex-wrap items-center justify-center | max-w-7xl gap-2 p-2 py-8 | bg-linear-to-b from-white to-blue-2/10 | md:py-8 | md:bg-white md:bg-none">
            {car.all.list.map(({ thumbnail, brandName, carName }, index) => (
                <div className="result-car__card --btn >> flex flex-col items-center | p-1.5 | text-blue-1 rounded-lg | md:w-[30%] md:gap-5 md:pb-8 md:p-4 | active:text-white active:bg-blue-2" key={`result-car__card${index}`} >
                    <img className="result-car__img >> aspect-4/3 object-cover | max-w-[40vw] rounded-lg | md:w-full" src={thumbnail} alt={`thumbnail-${brandName}-${carName}`} />
                    <h1 className="result-car__title >> w-full text-center text-current font-bold text-xl | md:text-3xl">{`${brandName} ${carName}`}</h1>
                </div>
            ))}
        </div>)
};
