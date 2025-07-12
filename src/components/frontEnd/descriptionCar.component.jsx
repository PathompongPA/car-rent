import { useLoaderData, useSearchParams } from "react-router";

export default function DescriptionCar() {
    const [search] = useSearchParams()
    let searchCarId = search.get("id")
    const { Car } = useLoaderData();
    // let car = Car.data.find((element) => element.id === searchCarId)
    let car = Car.data[searchCarId]
    // .find((element) => element.id === searchCarId)
    console.log(car)
    return (
        <div className="description-car *** flex flex-col gap-4 font-black text-blue-1 w-full p-4 pb-8 md:max-w-7xl  lg:snap-center">
            <h1 className=" md:text-title-1 text-title-3">รายละเอียด</h1>
            <div className="px-4 md:px-8">{car.carDescription}</div>
        </div>
    )
};
