import { Link, Outlet, useLoaderData } from "react-router";
import { useEffect } from "react";
import { LoginPage } from "../../pages/admin";

export default function Admin() {
    const { Brand, Car, Customer } = useLoaderData()
    let isLogin = getCookie("token") !== null

    useEffect(() => {
    }, [Brand, Car, Customer])

    function getCookie(name) {
        return document.cookie.split('; ').map(cookie => cookie.split('=')).find(([key]) => key === name)?.[1] || null;
    }

    function logout() {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.assign("/#/224");
    }

    return (
        <div className="">
            {!isLogin ? <LoginPage /> :
                <div className="h-full bg-gray-900 text-white min-h-[100vh]  justify-center  grid grid-cols-10 gap-4 *:not-first:col-span-8 w-full ">
                    <ul className="flex flex-col  rounded-lg col-span-2  gap-4 p-4 text-end *:p-4 " >
                        <div className="border border-gray-800 flex flex-col sticky top-4 h-[95vh] gap-4 rounded-lg *:p-2 *:not-first:hover:text-golden-1 *:rounded-lg  ">
                            <span className="text-center text-description-1"> เมนู </span>
                            <Link to={"booking"}>จองรถ</Link>
                            <Link to={"history/booking"}>ประวัติการจอง</Link>
                            <Link to={"car"}>รถ</Link>
                            <Link to={"customer"}>ลูกค้า</Link>
                            <Link to={"ui"}>หน้าเว็บ</Link>
                            <button className=" cursor-pointer" type="button" onClick={logout}>ออกจากระบบ</button>
                        </div>
                    </ul>
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>
            }
        </div>
    )

};
