import { fetchApi, readFile } from "../../utility";

export default function FormBrandCar() {

    function resetForm() {
        document.getElementsByClassName("form__brand-create")[0].reset()
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const [brandName, img] = event.target
        const brandId = brandName.value.toLowerCase()

        let isHaveImage = img.files.length > 0
        let isHaveBrand = /\S+/.test(brandId)
        let msgAlert = !isHaveBrand ? "กรุณากรอก ยี่ห้อ " : !isHaveImage && "กรุณาเลือก รูป"

        if (isHaveBrand && isHaveImage) {
            const { isSuccess, msg } = await fetchApi("POST", "/api/car/brand/", { brandId: brandId, brandImg: await readFile(img.files[0]) })
            isSuccess && resetForm()
            msgAlert = isSuccess ? `เพิ่ม "${brandId}" สำเร็จ` : `เพิ่ม "${brandId} ไม่สำเร็จ <${msg}>`
        }
        alert(msgAlert)
    }

    return (
        <div className="border border-white bg-gray-900 text-white flex flex-col justify-center items-center gap-4 p-4">
            เพิ่มยี่ห้อรถ
            <form className="form__brand-create flex gap-4" onSubmit={handleSubmit}>
                <input className="border-white border" type="text" placeholder="กรุณากรอกชื่อ Brand" />
                <input className="border-white border" type="file" name="brand image" id="" placeholder="เลือกรูป" />
                <button type="submit" className="--btn">บันทึก</button>
            </form>
        </div>
    )
};
