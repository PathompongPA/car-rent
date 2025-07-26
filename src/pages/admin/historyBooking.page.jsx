import dayjs from "dayjs";
import { useState } from "react";
import { useLoaderData } from "react-router"

export default function HistoryBookingPage() {
    const [carId, setCarId] = useState("all")
    let { Booking, Car } = useLoaderData();
    Booking = carId === "all" ? Booking.data : Booking?.data.filter((item) => item.car.id === carId & dayjs(item.checkInDate).month() === dayjs().month() & dayjs(item.checkInDate).year() === dayjs().year())
    return (
        <div className="flex flex-col gap-4 w-full h-full p-4 ">
            <div className=" flex justify-between">
                <h1 className="text-title-3 font-bold">ประวัติการจอง</h1>
                <select className="*:text-gray-800 *:p-2 " name="" id="" defaultValue={"all"} onChange={(e) => { setCarId(e.target.value) }}>
                    <option value="all">ทุกคัน</option>
                    {Car?.data?.map(({ id, carName, brand }, indexCarOption) => <option className="" value={id} key={id + indexCarOption}>{`${brand.brandName} - ${carName || "null"}`}</option>)}
                </select>
            </div>
            <div className="flex flex-col gap-4 *:rounded-lg *:border-gray-800 overflow-hidden h-full">
                <div className=" grid grid-cols-8 border py-4 *:font-bold *:text-center ">
                    <span >วันรับรถ </span>
                    <span > วันคืนรถ </span>
                    <span > เวลารับรถ </span>
                    <span >จำนวนวัน</span>
                    <span >รถ</span>
                    <span >ชื่อ</span>
                    <span >นามสกุล</span>
                    <span >เบอร์ติดต่อ</span>
                </div>
                <div className=" overflow-y-auto *:not-even:bg-gray-800">
                    {Booking?.map(({ checkInDate, checkOutDate, customer, car, id }) =>
                        <div className=" grid grid-cols-8 border border-gray-800 py-4 *:text-center " key={id}>
                            <span>{dayjs(checkInDate).format("DD/MM/YYYY")}</span>
                            <span>{dayjs(checkOutDate).format("DD/MM/YYYY")}</span>
                            <span >{"test"} </span>
                            <span>{dayjs(checkOutDate).diff(dayjs(checkInDate), "day") + 1}</span>
                            <span >{car?.carName} </span>
                            <span>{customer.customerName}</span>
                            <span>{customer.customerLastName}</span>
                            <span>{customer.customerPhone}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

};
