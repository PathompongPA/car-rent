import { useSearchParams } from "react-router";
import { mockup } from "../mockup";

export default function DescriptionCar() {
    const [search] = useSearchParams()
    let searchCarId = search.get("id")
    const { list } = mockup.car.all;
    let car = list.find((element) => element.carId === Number(searchCarId))
    return (
        <div className="description-car *** flex flex-col gap-4 font-black text-blue-1 w-full p-4 pb-8 md:max-w-7xl  lg:snap-center">
            <h1 className=" md:text-title-1 text-title-3">รายละเอียด</h1>
            <div className="px-4 md:px-8">{car.description}</div>
        </div>
    )
};
