import { useLoaderData } from "react-router";
import { FormCustomer } from "../../components/admin";
import { useEffect, useState } from "react";

export default function CustomerPage() {
    const { Customer } = useLoaderData();
    const [data, setData] = useState(Customer.data)

    useEffect(() => {
    }, [data])

    function filterChange(e) {
        const searchValue = e.target.value.toLowerCase();
        const filtered = Customer.data.filter((customer) => customer.customerName.includes(searchValue));
        setData(filtered)
    }

    return (
        <div className="flex flex-col  *:flex-1/2 *:overflow-y-hidden w-full gap-4 *:not-first:border *:border-gray-800  *:rounded-lg *:p-4 *:gap-4">
            <h1 className="text-title-3 font-bold">ข้อมูลลูกค้า</h1>
            <div className=" flex">
                <div className=" flex flex-col ">
                    <div className="py-4">
                        <h1 className=" p-1 text-description-1 font-bold">เพิ่มลูกค้า</h1>
                    </div>
                    <FormCustomer />
                </div>
                <div className="max-h-[100vh] flex flex-col gap-4 p-4" >
                    <div className=" flex justify-between items-center">
                        <h1 className="text-description-1 font-bold">ลูกค้าทั้งหมด</h1>
                        <input className="border border-gray-800 p-2  rounded-lg " type="text" placeholder="ค้นหาด้วยชื่อ" onChange={filterChange} />
                    </div>
                    <div className=" max-h-[100vh] overflow-y-auto p-2">
                        {data?.map((item) => <FormCustomer index={item.id} isCard={true} data={item} key={item.id} />)}
                    </div>
                </div>
            </div>
        </div>
    )

};
