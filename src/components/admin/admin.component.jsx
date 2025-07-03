import { useLoaderData } from "react-router";
import FormBrandCar from "./formBrand.component";
import FormCar from "./formCar.component";
import { useEffect } from "react";

export default function Admin() {
    const { Brand, Car } = useLoaderData()
    useEffect(() => {
    }, [Brand, Car])

    console.log("car : ", Car)
    return (
        <div className="admin *** flex flex-col gap-4 h-[2000px] ">
            <div className="flex gap-4 overflow-hidden w-7xl">
                <div className="flex w-[20%]">
                    <FormBrandCar />
                </div>
                <div className="admin__container-card-brand *** w-[100%] flex gap-2 flex-nowrap relative overflow-x-auto ">
                    {Brand.data.map((item, index) =>
                        <FormBrandCar data={item} isCard={true} index={index} key={item.id} />
                    )}
                </div>
            </div>

            <div className="flex gap-4 overflow-hidden max-w-7xl overflow-x-hidden ">
                <FormCar />
                <div className="flex flex-nowrap overflow-x-auto snap-x relative gap-4">
                    {Car.data.map((item) => <FormCar data={item} isCard={true} index={item.id} key={item.id} />)}
                </div>

            </div>
        </div>
    )

};
