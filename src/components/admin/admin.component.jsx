import { useLoaderData } from "react-router";
import FormBrandCar from "./formBrand.component";
import FormCar from "./formCar.component";
import { useEffect } from "react";
import FormCustomer from "./formCustomer.component";

export default function Admin() {
    const { Brand, Car, Customer } = useLoaderData()
    useEffect(() => {
    }, [Brand, Car, Customer])

    console.log("repage : ", Car, Brand, Customer)
    return (
        <div className="max-w-7xl *:flex *:gap-4 *:p-4 border h-[300vh]">
            <div className="">
                <div className="">
                    <FormBrandCar />
                </div>
                <div className="admin__container-card-brand *** w-full flex flex-wrap gap-2 justify-center">
                    {Brand.data.map((item, index) =>
                        <FormBrandCar data={item} isCard={true} index={index} key={item.id} />
                    )}
                </div>
            </div>

            <div className="">
                <div className="">
                    <FormCar />
                </div>
                <div className="flex flex-wrap gap-2 w-full ">
                    {Car.data.map((item) => <FormCar data={item} isCard={true} index={item.id} key={item.id} />)}
                </div>

            </div>
            <div className="">
                <FormCustomer />
                <div className="">
                    {Customer.data.map((item) => <FormCustomer data={item} isCard={true} index={item.id} key={item.id} />)}
                </div>
            </div>
        </div>
    )

};
