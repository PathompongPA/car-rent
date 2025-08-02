import { useLoaderData } from "react-router";
import { fetchApi } from "../../utility";
import { useEffect, useState } from "react";

export default function FormCar({
    index = "",
    isCard = false,
    data = {
        id: undefined,
        brandId: undefined,
        carName: undefined,
        carDescription: undefined,
        carThumbnail: undefined,
        Imgs: [],
        offers: [
            {
                id: undefined,
                offerPrice: undefined,
                offerAmountDay: undefined
            }
        ]
    } }) {

    const { id, carName, carDescription, brandId, Imgs, offers, carThumbnail } = data;
    const { Brand } = useLoaderData();
    // let navigate = useNavigate()

    const [images, setImages] = useState(Imgs)
    const [stateOffer, setOffers] = useState(offers)
    const [IsCard, setIsCard] = useState(isCard)
    const [thumbnail, setThumbnail] = useState(carThumbnail)

    useEffect(() => {
    }, [IsCard])


    // function resetForm() {
    //     document.getElementsByClassName(`form-car-${index}`)[0].reset()
    //     document.getElementsByClassName(`form-car__container-image-${index}`)[0].src = null;
    // }

    // function recallPage() {
    //     navigate(".", { replace: true })
    // }

    function getForm(className) {
        let form = new FormData(document.getElementsByClassName(className)[0])
        !IsCard && form.delete("carId")
        return form
    }
    async function fileChange() {
        let arrImage = []
        let files = getForm(`form-car-${index}`).getAll("carImage")
        let inputEmpty = files[0].name === ""
        if (!inputEmpty) {
            for (const file of files) {
                arrImage.push(URL.createObjectURL(file))
            }
        }
        setImages(arrImage)
    }

    function validateDayPrice(form) {
        const days = form.getAll("day[]");
        const prices = form.getAll("price[]");

        let isValid = true;

        for (let index = 0; index < days.length; index++) {
            const day = days[index];
            const price = prices[index];

            const dayNum = Number(day);
            const priceNum = Number(price);

            if (day === "" || isNaN(dayNum) || dayNum < 0) {
                alert(`ระดับราคาที่ ${index + 1}: จำนวนวันไม่ถูกต้อง`);
                isValid = false;
            }

            if (price === "" || isNaN(priceNum) || priceNum <= 0) {
                alert(`ระดับราคาที่ ${index + 1}: ราคาต้องมากกว่า 0`);
                isValid = false;
            }
        }

        return isValid;
    }

    function validateCarForm(form) {
        let isCarNameNotNull = form.get("carName").length > 0
        let isBrandIdNotNull = form.get("brandId") !== null
        let isCarDescriptionNotNull = form.get("carDescription").length > 0
        let isHaveCarThumbnail = (form.get("carThumbnail").name !== "") | !IsCard
        !isHaveCarThumbnail && alert("กรุณาเลือกรูปปก รถ")
        !isCarNameNotNull && alert("กรุณากรอกชื่อ รถ")
        !isBrandIdNotNull && alert("กรุณาเลือกยี่ห้อ รถ")
        !isCarDescriptionNotNull && alert("กรุณากรอกคำอธิบาย รถ")

        return isCarNameNotNull & isBrandIdNotNull
    }

    function genOffer(form) {
        const days = form.getAll("day[]");
        const prices = form.getAll("price[]");
        return days
            .map((day, index) => ({
                offerAmountDay: day,
                offerPrice: prices[index]
            }))
            .filter(item => item.offerAmountDay !== "" && item.offerPrice !== "");

    }

    async function handleBtnSave() {
        let formCar = getForm(`form-car-${index}`)
        let isFormCarValid = validateCarForm(formCar)
        let isTairPriceValid = validateDayPrice(formCar);

        let offer = genOffer(formCar)
        formCar.append("offer", JSON.stringify(offer))
        formCar.delete("day[]")
        formCar.delete("price[]")

        if (isFormCarValid & isTairPriceValid) {
            const { isSuccess, msg } = await fetchApi((index !== "") ? "PUT" : "POST", "/api/car/", formCar, {})
            isSuccess ? alert("บันทึกสำเร็จ") : alert(msg)
            isSuccess && location.reload(true)
            // recallPage() & resetForm()
            isSuccess & index !== "" && toggleEdit()
        }
    }

    function addNewTair() {
        setOffers([
            ...stateOffer,
            { id: undefined, offerAmountDay: 0, offerPrice: 0 }
        ]);
    }

    async function handleBtnDelete() {
        let form = getForm(`form-car-${index}`)
        let id = form.get("id")
        let body = JSON.stringify({ id: id })
        const { isSuccess, msg } = await fetchApi("delete", "/api/car/", body)
        isSuccess ? alert("บันทึกสำเร็จ") : alert(msg)
        isSuccess && location.reload(true)
        // & recallPage()
    }

    function toggleEdit() {
        setIsCard(!IsCard)
    }

    function handleBtnDeleteTair(e) {
        let position = e.target.getAttribute("data-index")
        let newOffer = [...stateOffer]
        newOffer.splice(position, 1)
        setOffers(newOffer)
    }

    async function handleInputThumbnailChange() {
        let form = getForm(`form-car-${index}`)
        let file = form.get("carThumbnail")
        file.name !== "" && setThumbnail(URL.createObjectURL(file))
    }

    return (

        <form className={`form-car-${index} *** snap-center min-w-[300px] h-fit border border-gray-800 *:bg-gray-900 flex flex-col gap-2 p-4 rounded-lg *:p-2 *:rounded-lg `} onSubmit={(event) => { event.preventDefault() }}  >

            <fieldset className="  grid grid-cols-2 *:not-first:bg-gray-900  gap-4 p-4 *:p-2 *:rounded-lg *:w-full overflow-x-hidden ">

                <input className="form-car__car-id" type="hidden" value={id} name="id" />

                <div className="col-span-2 relative ">
                    <label className=" absolute text-center top-0 left-0 w-full h-full bg-gray-800/40 cursor-pointer justify-center items-center flex" htmlFor={`input-car-thumbnail-${index}`} hidden={IsCard} >เลือกรูปปก</label>
                    <input className="" id={`input-car-thumbnail-${index}`} name="carThumbnail" type="file" hidden onChange={handleInputThumbnailChange} />
                    <img className={`form-car__thumbnail-${index} *** w-full aspect-16/9 object-cover `} src={thumbnail} alt="" />
                </div>


                <select className={`form-car__select-brand-${index} *:text-white`} name="brandId" defaultValue={brandId} disabled={IsCard}  >
                    <option value={undefined} disabled>เลือกยี่ห้อ</option>
                    {Brand.data.map(({ brandName, id }, _index) => {
                        return <option className="" key={_index} value={id} >{brandName}</option>

                    })}
                </select>

                <input className={`form-car__car-name-${index} ***`} type="text" name="carName" defaultValue={carName} placeholder={!IsCard ? "ชื่อ" : ""} readOnly={IsCard} />

                <textarea className={`form-car__car-description-${index} *** col-span-2 bg-white`} name="carDescription" placeholder="รายละเอียด" defaultValue={carDescription} readOnly={IsCard}></textarea>

            </fieldset>

            <details className=" w-full ">
                <summary> รูป</summary>
                <div className=" col-span-2  w-full relative  group *:group-hover:cursor-pointer overflow-hidden flex flex-col justify-center items-center gap-4 pt-4 h-fit pb-4 ">
                    <label className={`form-car__label-input-car-image-${index} *** p-4 ${IsCard && "hidden"} bg-gray-800/40 rounded-lg w-full h-full flex flex-1/2 text-center items-center justify-center`} htmlFor={`input-car-image-${index}`}>คลิกเพื่อเลือกไฟล์ / วางไฟล์ที่นี้</label>
                    <input className={`form-car__input-image-${index} hidden`} type="file" name="carImage" id={`input-car-image-${index}`} multiple onChange={fileChange} />
                    <div className={`form-car__container-image-${index} *** overflow-x-auto h-full gap-4 w-full flex flex-nowrap snap-x snap-mandatory pb-4 `}>
                        {images.map((item, _index) =>
                            < img className={`form-car__imag-${index}-${_index} w-[200px] aspect-16/9 object-cover bg-gray-800/40 rounded-lg snap-center`} src={item} alt="" key={item + _index} />
                        )}

                    </div>
                </div>
            </details>

            <details className={`form-car__container-tair-${index} ***  flex flex-col`} >
                <summary className="">ระดับราคา</summary>
                <div className={`form-car__container-tair-${index} ***  flex flex-col gap-2 pt-2 ${IsCard && "max-h-[150px]"} overflow-y-auto overflow-x-hidden pt-4 `}>
                    {stateOffer.map((offer, _index) => {
                        return (
                            <div className={`form-car__container-tair-${index}  grid grid-cols-7  gap-1 *:rounded-lg *:py-2 items-center *:text-center`} key={`${index}-${offer.id}`}>
                                <input type="hidden" defaultValue={offer.id} />
                                <input className={`form-car__tair-${index}-day-${_index} *** col-span-2 `} type="number" placeholder="จำนวน" name="day[]" readOnly={IsCard} defaultValue={offer.offerAmountDay} min={0} />
                                <label >วัน</label>
                                <input className={`form-car__tair-${index}-price-${_index} *** col-span-2 `} type="number" placeholder="ราคา" name="price[]" readOnly={IsCard} defaultValue={offer.offerPrice} min={0} />
                                <label >บาท</label>
                                <button className={`form-car__btn-delete-tair-${index} --btn col-span-1 bg-red-800 text-white p-2 rounded-lg hover:bg-red-600 btn-delete-tair ${IsCard && "hidden"}`} data-index={_index} onClick={handleBtnDeleteTair}>ลบ</button>
                            </div>
                        )
                    })}
                    <button className={` hover:text-golden-1 cursor-pointer bg-gray-800 p-2 rounded-lg w-full ${IsCard && "hidden"}`} onClick={addNewTair}>เพิ่มระดับราคา</button>
                </div>
            </details>

            <fieldset className="container-btn-${index} flex gap-4 *:p-2 *:flex-1/2 *:rounded-lg *:hover:cursor-pointer justify-center">
                <button className={`form-car__btn-save-${index} *** --btn flex-1/2 bg-lime-800 ${IsCard && "hidden"} `} type="button" onClick={handleBtnSave}>บันทึก</button>
                <button className={`form-car__btn-delete-${index} *** --btn flex-1/2 bg-red-800 ${!IsCard && "hidden"} `} type="button" onClick={handleBtnDelete} >ลบ</button>
                <button className={`form-car__btn-cancel-${index} *** --btn flex-1/2 ${IsCard & index !== "" && "hidden"} ${!IsCard & index === "" && "hidden"}`} type="button" onClick={toggleEdit}>ยกเลิก</button>
                <button className={`form-car__btn-edit-${index} *** --btn flex-1/2 bg-blue-800 ${!IsCard && "hidden"}`} type="button" onClick={toggleEdit} >แก้ไข</button>
            </fieldset>
        </form >
    )
};