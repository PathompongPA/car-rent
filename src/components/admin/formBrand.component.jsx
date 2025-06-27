import { useNavigate } from "react-router";
import { fetchApi, readFile } from "../../utility";

export default function FormBrandCar({ index = "", data = { brandId: null, brandImg: null, brandName: null }, isCard = false }) {
    const navigate = useNavigate();
    const { brandId: id, brandName: name, brandImg: logo } = data;

    function resetForm() {
        document.getElementsByClassName(`form-${index}`)[0].reset()
        document.getElementsByClassName(`form__display-img-${index}`)[0].src = null;
    }

    function recallPage() {
        navigate(".", { replace: true })
    }

    function getForm() {
        return new FormData(document.getElementsByClassName(`form-${index}`)[0])
    }

    function validationForm(form) {
        let isHaveId = form.get("brandName").length > 0
        let isHaveImage = form.get("brandImg").name.length > 0 | isCard
        !isHaveId && alert("กรุณากรอก ยี่ห้อ")
        !isHaveImage && alert("กรุณากรอก รูป")
        return isHaveId && isHaveImage
    }

    async function handleBtnSave() {
        let form = getForm()
        !isCard && form.delete("brandId")
        if (validationForm(form)) {
            const { isSuccess, msg } = await fetchApi(isCard ? "PUT" : "POST", "/api/car/brand/", form, {});
            isCard ? isSuccess ? alert(`แก้ไขสำเร็จ`) : alert(`แก้ไขผิดพลาด <${msg}>`) : isSuccess ? alert(`บันทึกสำเร็จ`) : alert(`บันทึกผิดพลาด <${msg}>`)
            !isCard & isSuccess && resetForm() & recallPage()
            isCard & isSuccess && handleBtnEdit()
        }
    }

    async function handleBtnDelte() {
        let form = getForm()
        let brandName = form.get("brandName")
        let brandId = form.get("brandId")
        if (confirm(`คุณต้องการลบ ${brandName} ออกจากฐานข้อมูล ใช่ หรือ ไม่`) === true) {
            let body = JSON.stringify({ brandId: brandId })
            const { isSuccess, msg } = await fetchApi("DELETE", "/api/car/brand/", body)
            isSuccess ? alert(`ลบ ${brandName} สำเร็จ`) : alert(`ลบ ${brandName} ไม่สำเร็จ <${msg}>`)
            isSuccess && recallPage()
        }
    }

    function handleBtnEdit() {
        let inputName = document.getElementsByClassName(`form__brand-id-${index}`)[0]
        inputName.readOnly = !inputName.readOnly
        let inputFile = document.getElementsByClassName(`form__input-image-${index}`)[0]
        inputFile.classList.toggle("invisible")
        document.getElementsByClassName(`form__btn-delete-${index}`)[0].classList.toggle("hidden")
        document.getElementsByClassName(`form__btn-save-${index}`)[0].classList.toggle("hidden")
        document.getElementsByClassName(`form__btn-edit-${index}`)[0].classList.toggle("hidden")
        document.getElementsByClassName(`form__btn-cancel-${index}`)[0].classList.toggle("hidden")
    }

    async function handleInputImgChange(event) {
        try {
            let img = await readFile(event.target.files[0])
            document.getElementsByClassName(`form__display-img-${index}`)[0].src = img
        } catch (error) {
            error
            document.getElementsByClassName(`form__display-img-${index}`)[0].src = null;
        }
    }

    return (
        <form className={`form-${index} *** flex flex-col border-white w-[200px] border-2  `} key={index} onSubmit={(event) => { event.preventDefault() }} >

            <input type="hidden" value={isCard ? id : undefined} name="brandId" />
            <input className={`form__brand-id-${index} *** text-white border text-center`} type="text" placeholder="กรุณากรอกชื่อ Brand" defaultValue={name} readOnly={isCard} name="brandName" />

            <div className={`form__container-input-image-${index} *** relative flex flex-col justify-center items-center aspect-1/1 border w-[200px]`}>
                <input className={`form__input-image-${index} *** ${isCard && "invisible"} border border-red-600 absolute w-[200px] aspect-1/1`} type="file" id="" placeholder="เลือกรูป" onChange={handleInputImgChange} name="brandImg" />
                <img className={`form__display-img-${index} *** max-w-[200px] aspect-1/1 bg-gray-600  `} src={logo} alt="" />
            </div>

            <div className={`form__container-btn-${index} *** flex gap-4`}>
                <button className={`form__btn-save-${index} *** --btn flex-1/2 bg-lime-900 ${isCard && "hidden"} `} type="button" onClick={handleBtnSave}>บันทึก</button>
                <button className={`form__btn-delete-${index} *** --btn flex-1/2 ${!isCard && "hidden"} `} type="button" onClick={handleBtnDelte}>ลบ</button>
                <button className={`form__btn-cancel-${index} *** --btn flex-1/2 hidden `} type="button" onClick={handleBtnEdit}>ยกเลิก</button>
                <button className={`form__btn-edit-${index} *** --btn flex-1/2 bg-blue-800 ${!isCard && "hidden"}`} type="button" onClick={handleBtnEdit}>แก้ไข</button>
            </div>

        </form >
    )
};
