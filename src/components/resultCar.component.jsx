import { mockup } from "../mockup/car.mockup"

export default function ResultCar() {
    const { allCar } = mockup;
    function Card({ carList }) {
        return carList.map((params, index) => {
            const { thumbnail, brandName, carName } = params;
            return (
                <div key={`result-car__card${index}`} className="result-car__card --btn gap-0 md:p-4 md:pb-8 md:gap-5 rounded-lg flex flex-col items-center ">
                    <img src={thumbnail} alt={`thumbnail-${brandName}-${carName}`} className="result-car__img aspect-4/3 max-w-[44vw] md:min-w-[300px] md:h-[200px] object-cover rounded-lg" />
                    <h1 className="result-car__title text-blue-1 text-l md:text-2xl">{`${brandName} ${carName}`}</h1>
                </div>
            )
        })
    }
    return (
        <div className="result-car --component flex-row items-center justify-center gap-2.5 ">
            <Card carList={allCar.list} />
        </div>
    )
};
