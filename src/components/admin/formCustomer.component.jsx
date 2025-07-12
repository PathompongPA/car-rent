import { useState } from "react";
import { fetchApi } from "../../utility";
import { useNavigate } from "react-router";

export default function FormCustomer
    (
        {
            index = "",
            isCard = false,
            data = {
                id: undefined,
                customerName: undefined,
                customerLastName: undefined,
                customerDriverLicense: undefined,
                customerIdCard: undefined,
                customerPhone: undefined,
                customerFacebook: undefined
            }
        }
    ) {

    let { id, customerName, customerLastName, customerDriverLicense, customerIdCard, customerPhone, customerFacebook } = data;
    const [IsCard, setIsCard] = useState(isCard)
    const [driverLicense, setDriverLicense] = useState(customerDriverLicense)
    const [IdCard, setIdCard] = useState(customerIdCard)
    const [facebook, setFacebook] = useState(customerFacebook)
    let navitaion = useNavigate()

    function resetForm() {
        document.getElementsByClassName(`form-customer-${index}`)[0].reset()
        setDriverLicense(undefined)
        setIdCard(undefined)
        setFacebook(undefined)
    }

    function rePage() {
        navitaion(".", { replace: true })
    }

    function getForm() {
        return new FormData(document.getElementsByClassName(`form-customer-${index}`)[0])
    }

    function changeIdCard() {
        let form = getForm()
        let image = form.get("customerIdCard")
        let isHaveImage = image.name !== ""
        if (isHaveImage) {
            let urlImage = URL.createObjectURL(image)
            setIdCard(urlImage)
        }
        else {
            setIdCard(undefined)
        }
    }

    function changeFacebook() {
        let form = getForm()
        let image = form.get("customerFacebook")
        let isHaveImage = image.name !== ""
        if (isHaveImage) {
            let urlImage = URL.createObjectURL(image)
            setFacebook(urlImage)
        }
        else {
            setFacebook(undefined)
        }
    }

    function changeDriverLicense() {
        let form = getForm()
        let image = form.get("customerDriverLicense")
        let isHaveImage = image.name !== ""
        if (isHaveImage) {
            let urlImage = URL.createObjectURL(image)
            setDriverLicense(urlImage)
        }
        else {
            setDriverLicense(undefined)
        }
    }

    function validationForm(form) {
        let isHaveName = form.get("customerName").length > 0
        let isHaveLastName = form.get("customerLastName").length > 0
        let isHavePhone = form.get("customerPhone").length > 0
        let isHaveImageDriverLicense = form.getAll("customerDriverLicense")[0].name !== "" | index !== ""
        let isHaveImageIdCard = form.getAll("customerIdCard")[0].name !== "" | index !== ""
        let isHaveImageFacebook = form.getAll("customerFacebook")[0].name !== "" | index !== ""

        return isHaveName & isHaveLastName & isHavePhone & isHaveImageDriverLicense, isHaveImageIdCard, isHaveImageFacebook

    }

    async function submitBtn() {
        let form = getForm()
        let isFormValid = validationForm(form)
        if (isFormValid) {
            index === "" && form.delete("id")
            let { isSuccess, msg } = await fetchApi(index === "" ? "POST" : "PUT", "/api/customer/", form, {})
            isSuccess && rePage() & resetForm()
            isSuccess & index !== "" && editBtn()
            alert(!msg && "บันทึกสำเร็จ")
        } else {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        }
    }

    async function deleteBtn() {
        let form = getForm()
        let body = JSON.stringify({ id: form.get("id") })
        let { isSuccess, msg } = await fetchApi("DELETE", "/api/customer/", body)
        isSuccess && rePage()
        alert(!msg && "ลบสำเร็จ")
    }

    function editBtn() {
        rePage()
        setIsCard(!IsCard)
    }

    return (
        <form className={`form-customer-${index} *** *:bg-gray-700 *:p-2 *:rounded-lg rounded-lg bg-gray-800 p-4`}>
            <fieldset className=" grid grid-cols-3 *:not-first:bg-gray-600  *:p-2 *:rounded-lg gap-2">
                {/* <legend>ข้อมูลลูกค้า </legend> */}

                <input className={`form-customer__id-${index}`} type="hidden" name="id" defaultValue={id} />
                <input className={`form-customer__name-${index}`} type="text" name="customerName" placeholder="ชื่อ" defaultValue={customerName} readOnly={IsCard} />
                <input className={`form-customer__last-name-${index}`} type="text" name="customerLastName" placeholder="นามสกุล" defaultValue={customerLastName} readOnly={IsCard} />
                <input className={`form-customer__phone-${index} *** `} type="text" name="customerPhone" placeholder="เบอร์ติดต่อ" defaultValue={customerPhone} readOnly={IsCard} />
                <details className=" col-span-3 " open={!IsCard}>
                    <summary>เอกสาร</summary>

                    <details className="pl-4 relative col-span-3 " open={!IsCard}>
                        <summary>บัตรประชาชน</summary>
                        <label className={`form-customer__lable-id-card-${index} *** cursor-pointer absolute w-[400px] aspect-16/9 flex justify-center items-center bg-gray-800/70 rounded-lg `} htmlFor={`customerIdCard-${index}`} hidden={IsCard}>เลือกรูปใบขับขี่</label>
                        <input className={`form-customer__input-id-card-${index}`} type="file" name="customerIdCard" id={`customerIdCard-${index}`} hidden onChange={changeIdCard} />
                        <img className={`form-customer__img-id-card-${index} *** w-[400px] aspect-16/9 bg-gray-400 rounded-lg object-cover `} src={IdCard} alt="" />
                    </details>

                    <details className="pl-4 relative col-span-3" open={!IsCard}  >
                        <summary>ใบขับขี่</summary>
                        <label className={`form-customer__lable-driver-license-${index} *** cursor-pointer absolute w-[400px] aspect-16/9 flex justify-center items-center bg-gray-800/70 rounded-lg `} htmlFor={`customerDriverLicense-${index}`} hidden={IsCard}>เลือกรูปใบขับขี่</label>
                        <input className={`form-customer__input-driver-license-${index}`} type="file" name="customerDriverLicense" id={`customerDriverLicense-${index}`} hidden onChange={changeDriverLicense} />
                        <img className={`form-customer__img-dirver-license-${index} *** w-[400px] aspect-16/9 bg-gray-400 rounded-lg object-cover `} src={driverLicense} alt="" />
                    </details>

                    <details className="pl-4 relative col-span-3" open={!IsCard}>
                        <summary>facebook</summary>
                        <label className={`form-customer__lable-facebook-${index} *** cursor-pointer absolute w-[400px] aspect-16/9 flex justify-center items-center bg-gray-800/70 rounded-lg `} htmlFor={`customerFacebook-${index}`} hidden={IsCard}>เลือกรูปใบขับขี่</label>
                        <input className={`form-customer__input-facebookk-${index}`} type="file" name="customerFacebook" id={`customerFacebook-${index}`} hidden onChange={changeFacebook} />
                        <img className={`form-customer__img-facebook-${index} *** w-[400px] aspect-16/9 bg-gray-400 rounded-lg object-cover `} src={facebook} alt="" />
                    </details>
                </details>

            </fieldset>

            <fieldset>
                <div className={`form-customer__container-btn-${index} *** flex gap-4 *:rounded-lg *:p-2 `}>
                    <button className={`form-customer__btn-save-${index} *** --btn flex-1/2 bg-lime-800 ${IsCard && "hidden"} `} type="button" onClick={submitBtn}>บันทึก</button>
                    <button className={`form-customer__btn-delete-${index} *** --btn flex-1/2 bg-red-800 ${!IsCard && "hidden"} `} type="button" onClick={deleteBtn}>ลบ</button>
                    <button className={`form-customer__btn-cancel-${index} *** --btn flex-1/2 ${IsCard & index !== "" && "hidden"} ${!IsCard & index === "" && "hidden"} `} type="button" onClick={editBtn}>ยกเลิก</button>
                    <button className={`form-customer__btn-edit-${index} *** --btn flex-1/2 bg-blue-800 ${!IsCard && "hidden"}`} type="button" onClick={editBtn}>แก้ไข</button>
                </div>
            </fieldset>
        </form>
    )
};
