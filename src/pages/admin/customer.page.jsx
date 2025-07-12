import { useLoaderData } from "react-router";
import { FormCustomer } from "../../components/admin";
import { useEffect, useState } from "react";

export default function CustomerPage() {
    const { Customer } = useLoaderData();
    const [data, setData] = useState(Customer.data)

    useEffect(() => {
        console.log("data : ", data)
    }, [data])

    function filterChange(e) {
        const searchValue = e.target.value.toLowerCase();
        const filtered = Customer.data.filter((customer) => customer.customerName.includes(searchValue));
        setData(filtered)
    }

    return (
        <div className="flex *:max-h-[100vh] *:flex-1/2 *:overflow-y-hidden ">
            <div className="">
                <FormCustomer />
            </div>
            <div className="max-h-[100vh] flex flex-col gap-4 p-2">
                <input className="border border-gray-800 p-2 w-full rounded-lg " type="text" placeholder="ค้นหาด้วยชื่อ" onChange={filterChange} />
                <div className=" max-h-[100vh] overflow-y-auto p-2">
                    {data?.map((item) => <FormCustomer index={item.id} isCard={true} data={item} key={item.id} />)}
                </div>
            </div>
        </div>
    )

};
