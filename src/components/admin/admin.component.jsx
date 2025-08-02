import { Outlet, useLoaderData } from "react-router";
import { useEffect } from "react";
import { LoginPage } from "../../pages/admin";
import NavbarAdmin from "./navbar.admin..component";

export default function Admin() {
    const { Brand, Car, Customer } = useLoaderData()
    let isLogin = getCookie("token") !== null

    useEffect(() => {
    }, [Brand, Car, Customer])

    function getCookie(name) {
        return document.cookie.split('; ').map(cookie => cookie.split('=')).find(([key]) => key === name)?.[1] || null;
    }


    return (
        <div className="">
            {!isLogin ? <LoginPage /> :
                <div className=" min-h-[100vh] bg-gray-900 text-white md:min-h-[100vh] flex  justify-center   gap-4  w-full ">
                    <NavbarAdmin />
                    <Outlet />
                </div>
            }
        </div>
    )

};
