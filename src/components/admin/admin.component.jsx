import { useLoaderData } from "react-router";
import FormBrandCar from "./formBrand.component";
import { useEffect } from "react";

export default function Admin() {
    let data = useLoaderData()
    useEffect(() => {
    }, [data])

    return (
        <div className="admin *** flex gap-4 overflow-hidden w-7xl ">
            <div className="flex w-[20%]">
                <FormBrandCar />
            </div>
            <div className="admin__container-card-brand *** w-[100%] flex gap-2 flex-nowrap relative overflow-x-auto ">
                {data.data.map((item, index) =>
                    <FormBrandCar data={item} isCard={true} index={index} key={item.brandId} />
                )}
            </div>
        </div>
    )

};
