import dayjs from "dayjs";
import { unparse } from "papaparse";
import { useMemo, useState } from "react";
import { useLoaderData } from "react-router"
import { fetchApi } from "../../utility";

export default function HistoryBookingPage() {
    let { Booking, Car } = useLoaderData();
    const [filter, setFilter] = useState({
        carId: "",
        customerName: "",
        checkIn: "",
        checkOut: "",
        bookingSart: "",
        bookingEnd: ""
    })

    let filterData = useMemo(() => {
        let data = Booking?.data.filter((item) => {
            let matchCustomerName = filter.customerName === "" || item.customer.customerName.includes(filter.customerName)
            let matchCarId = filter.carId === "" || item.car.id.includes(filter.carId)
            let matchCheckIn = filter.checkIn === "" || item.checkInDate.includes(filter.checkIn)
            let matchCheckOut = filter.checkOut === "" || item.checkOutDate.includes(filter.checkOut)
            let matchBookingSTart = filter.bookingSart === "" || dayjs(item.createdAt).isAfter(dayjs(filter.bookingSart))
            let matchBookingEnd = filter.bookingEnd === "" || dayjs(item.createdAt).isBefore(dayjs(filter.bookingEnd))
            return matchCustomerName && matchCarId && matchCheckIn && matchCheckOut && matchBookingSTart && matchBookingEnd
        })
        return data.sort((a, b) => {
            let now = dayjs(a["createdAt"])
            let next = dayjs(b["createdAt"])
            console.log(a["createdAt"], b["createdAt"])
            return now.isAfter(next) ? 1 : -1
        })
    }, [filter]);

    function filterCarId(e) {
        const searchValue = e.target.value.toLowerCase();
        setFilter(state => ({ ...state, carId: searchValue }))
    }

    function filterByCustomer(e) {
        const searchValue = e.target.value.toLowerCase();
        setFilter(state => ({ ...state, customerName: searchValue }))
    }

    function filterByCheckIn(e) {
        const searchValue = e.target.value.toLowerCase();
        setFilter(state => ({ ...state, checkIn: searchValue }))
    }

    function filterByCheckOut(e) {
        const searchValue = e.target.value.toLowerCase();
        setFilter(state => ({ ...state, checkOut: searchValue }))
    }

    function filterByBookingStart(e) {
        const searchValue = e.target.value.toLowerCase();
        setFilter(state => ({ ...state, bookingSart: dayjs(searchValue).add(-1, "day").format("YYYY-MM-DD") }))
    }

    function filterByBookingEnd(e) {
        const searchValue = e.target.value.toLowerCase();
        setFilter(state => ({ ...state, bookingEnd: dayjs(searchValue).add(1, "day").format("YYYY-MM-DD") }))
    }

    async function deleteBooking(e) {
        const { isSuccess, msg } = await fetchApi("DELETE", "/api/booking", JSON.stringify({ "id": e }))
        if (isSuccess) {
            alert("ลบประวัติการจองสำเร็จ");
            location.reload(true)
        } else {
            alert(msg)
        }

    }

    const handleDownload = () => {
        const csv = unparse(filterData);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    // console.log("booking : ", Booking)

    return (
        <div className="flex flex-col md:gap-4 w-full h-full p-4 pt-20 ">
            <div className="flex justify-end  md:justify-between">
                <h1 className=" hidden md:block text-title-3 font-bold">ประวัติการจอง</h1>
                <div className="">
                    <button className="border rounded-lg p-1 border-gray-700 cursor-pointer hover:text-golden-1" onClick={handleDownload} type="button">export csv</button>
                </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 justify-end items-center *:flex *:flex-col *:md:not-last:col-span-1 ">
                <div className="col-span-4">
                    <label htmlFor="">ค้นหา</label>
                    <input className="w-full" type="text" name="" id="" placeholder="ชื่อลูกค้า" onChange={filterByCustomer} />
                </div>
                <div className="col-span-2">
                    <label htmlFor="">วันรับรถ</label>
                    <input className="p-0 md:p-2" type="date" name="" id="" onChange={filterByCheckIn} />
                </div>
                <div className="col-span-2">
                    <label htmlFor="">วันคืนรถ</label>
                    <input className="p-0 md:p-2" type="date" name="" id="" onChange={filterByCheckOut} />
                </div>
                <div className="col-span-4 md:col-span-2 flex">
                    <label htmlFor="">วันที่ทำการจอง</label>
                    <div className=" *:not-[label]:w-[120px] *:not-[label]:p-0 flex justify-between gap-0">
                        <label htmlFor="">วันที่</label>
                        <input type="date" name="" id="" onChange={(e) => { filterByBookingStart(e) }} />
                        <label htmlFor="">ถึง</label>
                        <input type="date" min={dayjs(filter.bookingSart).add(1, "day").format("YYYY-MM-DD")} name="" id="" onChange={(e) => { filterByBookingEnd(e) }} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 *:rounded-lg *:border-gray-800 overflow-x-auto *:w-[400vw] *:xl:w-full h-[40vh] xl:h-full pt-8 md:pt-0">
                <div className=" grid grid-cols-12 border md:py-4 *:font-bold *:text-center justify-center items-center bg-gray-700 ">
                    <span >จอง</span>
                    <span  >วันรับรถ </span>
                    <span > วันคืนรถ </span>
                    <span className="col-span-2"> หมายเหตุ</span>
                    <span >จำนวนวัน</span>
                    <select className="*:text-gray-800 *:p-2 cursor-pointer " name="" id="" defaultValue={"all"} onChange={filterCarId}>
                        <option value="">รถ</option>
                        {Car?.data?.map(({ id, carName, brand }, indexCarOption) => <option className="" value={id} key={id + indexCarOption}>{`${brand.brandName} - ${carName || "null"}`}</option>)}
                    </select>
                    <span >ชื่อ</span>
                    <span >นามสกุล</span>
                    <span >เบอร์ติดต่อ</span>
                    <span >หลักฐานการโอน</span>
                </div>
                <div className=" overflow-y-auto *:not-even:bg-gray-800">
                    {filterData?.map(({ createdAt, checkInDate, checkOutDate, customer, car, id, note, slip }, index) =>
                        <div className=" grid grid-cols-12 border border-gray-800 md:py-4 justify-center items-center *:text-center hover:bg-gray-500" key={id}>
                            <span>{dayjs(createdAt).format("H:mm - DD/MM/YYYY")}</span>
                            <span>{dayjs(checkInDate).format("DD/MM/YYYY")}</span>
                            <span>{dayjs(checkOutDate).format("DD/MM/YYYY")}</span>
                            <span className="col-span-2" >{note}</span>
                            <span>{dayjs(checkOutDate).diff(dayjs(checkInDate), "day") + 1}</span>
                            <span >{car?.carName} </span>
                            <span>{customer.customerName}</span>
                            <span>{customer.customerLastName}</span>
                            <span>{customer.customerPhone}</span>
                            <button className=" cursor-pointer " type="button" onClick={() => { document.getElementsByClassName(`image-slip-${index}`)[0].classList.toggle("hidden") }}  >ดูรูป</button>
                            <div className={`image-slip-${index} --- fixed top-0 left-0 h-[100vh] w-[100vw] cursor-pointer bg-gray-900/80 hidden flex justify-center items-center`} onClick={() => { document.getElementsByClassName(`image-slip-${index}`)[0].classList.toggle("hidden") }} >
                                <img className=" h-[80%] select-none " id={id} src={slip} alt="" onClick={() => { document.getElementsByClassName(`image-slip-${index}`)[0].classList.toggle("hidden") }} />
                            </div>
                            <button className=" bg-red-600 w-fit h-fit p-4 py-2 rounded-lg hover:text-golden-1 cursor-pointer" type="button" onClick={() => { deleteBooking(id) }}>ลบ</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

};
