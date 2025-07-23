import { useLoaderData } from "react-router"
import { FormBrandCar, FormCar } from "../../components/admin"
import { useState } from "react"

export default function CarPage() {
    let { Car, Brand } = useLoaderData()
    const [brand, setbrand] = useState("all")
    Car = brand === "all" ? Car.data : Car.data.filter((element) => element.brandId === brand)
    return (
        <div className="flex flex-col  *:flex *:p-4 *:gap-4  pb-64 ">
            <h1 className="text-title-3 font-bold ">แก้ไขข้อมูลรถ</h1>

            <div className=" *:p-4  *:border rounded-lg border-gray-800 *:border-gray-800 ">
                <div className="flex-2/5 flex flex-col gap-4 rounded-lg h-fit">
                    <h1 className="text-description-1 font-bold ">เพิ่มยี่ห้อ</h1>
                    <div className=" flex justify-center p-2">
                        <FormBrandCar />
                    </div>
                </div>
                <div className=" flex-4/5 flex flex-col gap-4 rounded-lg overflow-hidden relative justify-center p-4  ">
                    {/* <div className="hidden absolute w-full left-0 px-8 z-30 flex justify-between *:p-2 *:px-4 *:bg-gray-700 *:rounded-full *:hover:text-golden-1 *:cursor-pointer *:active:bg-gray-800 ">
                        <button className="" type="button" onClick={() => { document.getElementsByClassName("contaner-card-brand")[0].scrollLeft -= 200 }}>{`<`}</button>
                        <button className="" type="button" onClick={() => { document.getElementsByClassName("contaner-card-brand")[0].scrollLeft += 200 }}>{`>`}</button>
                    </div> */}
                    <h1 className="text-description-1 font-bold ">ยี่ห้อทั้งหมด</h1>
                    <div className="contaner-card-brand flex gap-4 overflow-x-auto  p-2 flex-wrap ">
                        {Brand?.data.map((item, indexBrand) => <FormBrandCar data={item} isCard={true} index={item.id + indexBrand} key={item.id} />)}
                    </div>
                </div>
            </div>

            <div className="flex w-full *:border *:border-gray-800 *:p-4 *:gap-4  *:rounded-lg ">
                <div className=" flex-2/5 flex justify-start flex-col p-4  ">
                    <h1 className="text-description-1  font-bold">เพิ่มรถ</h1>
                    <div className=" flex  p-4 justify-center ">
                        <FormCar />
                    </div>
                </div>
                <div className=" flex-4/5 w-full flex flex-col flex-wrap  overflow-y-auto border ">
                    <div className="flex justify-between">
                        <h1 className="text-description-1 font-bold">รถทั้งหมด</h1>
                        <select className="p-1" name="" id="" defaultValue={"all"} onChange={(e) => { setbrand(e.target.value) }}>
                            <option className="text-gray-800" value="all">all</option>
                            {Brand?.data.map(({ id, brandName }, indexBrand) => (<option className="text-gray-800" value={id} key={id + indexBrand}>{brandName}</option>))}
                        </select>
                    </div>
                    <div className="flex flex-wrap p-4 gap-4">
                        {Car?.map((item) => < FormCar isCard={true} index={item.id} data={item} key={item.id} />)}
                    </div>
                </div>
            </div>
        </div>
    )

};
