import { useLoaderData } from "react-router"
import { FormCar } from "../../components/admin"

export default function CarPage() {
    const { Car } = useLoaderData()
    console.log("Car ::::", Car)
    return (
        <div className="flex gap-8">
            <div className="">
                <FormCar />
            </div>
            <div className="w-full flex flex-wrap max-h-[100vh] overflow-y-auto">
                {Car.data?.map((item) =>
                    <FormCar isCard={true} index={item.id} data={item} key={item.id} />
                )}
            </div>
        </div>
    )

};
