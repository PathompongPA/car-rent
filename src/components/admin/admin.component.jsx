import { useLoaderData } from "react-router";
import FormBrandCar from "./formBrand.component";
import { useEffect } from "react";

export default function Admin() {
    let data = useLoaderData()
    useEffect(() => {
    }, [data])

    return (
        <div className="admin *** flex flex-col gap-4">
            <FormBrandCar />
            <div className="admin__container-card-brand *** flex flex-wrap gap-2">
                {data.map((item, index) =>
                    <FormBrandCar data={item} isCard={true} index={index} key={item.brandId} />
                )}
            </div>

        </div>
    )

};
