import { Link, Outlet, useLoaderData } from "react-router";
import { useEffect } from "react";

export default function Admin() {
    const { Brand, Car, Customer } = useLoaderData()
    useEffect(() => {
    }, [Brand, Car, Customer])

    console.log("repage : ", Car, Brand, Customer)
    return (
        <div className="h-full bg-gray-900 text-white min-h-[100vh] *:not-first:w-7xl justify-center  grid grid-cols-10 gap-4 *:not-first:col-span-8 ">
            <ul className="flex flex-col border border-gray-800 rounded-lg col-span-2  gap-4 p-4 text-end *:p-4 *:not-first:hover:text-golden-1 *:rounded-lg  " >
                <span className="text-center text-description-1"> เมนู </span>
                <Link to={"booking"}>จองรถ</Link>
                <Link to={"history/booking"}>ประวัติการจอง</Link>
                <Link to={"car"}>รถ</Link>
                <Link to={"customer"}>ลูกค้า</Link>
                <Link to={"ui"}>หน้าบ้าน</Link>
            </ul>
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    )

};
