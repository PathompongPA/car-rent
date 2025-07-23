import { Link } from "react-router";

export default function OutOfPage() {
    return (
        <div className="w-full border h-[100vh] flex flex-col justify-center items-center *:not-[a]:text-gray-600">
            <h1 className="text-title-1 text-gray-800">404 Error</h1>
            <h1 className="text-title-3"> ขออภัยไม่พบหน้าที่คุณค้นหา</h1>
            <Link className=" hover:text-golden-1" to={"/"} >กลับสู่เว็บไซส์</Link>
        </div>
    )

};
