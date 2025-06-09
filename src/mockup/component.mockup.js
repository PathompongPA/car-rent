import bigImg from '../assets/bigImg.jpg'
import logo from "../assets/logo.jpg"
import booking from '../assets/component/journeyBooking/booking.jpg'
let component = {
    "navbar": {
        logo: logo,
        title: {
            list:
                [
                    {
                        text: "จอง",
                        link: ""
                    },
                    {
                        text: "โปรโมชั่น",
                        link: ""
                    },
                    {
                        text: "รีวิว",
                        link: ""
                    },
                    {
                        text: "ข่าวสาร",
                        link: ""
                    },
                    {
                        text: "เกี่ยวกับเรา",
                        link: ""
                    },
                ],
            amount: 0
        }
    },
    "search": {
        bigImg: bigImg
    },
    "journeyBooking": {
        title: "เช่าง่ายเพียง 3 นาที",
        card: {
            list: [
                {
                    title: "ขั้นตอนการจอง",
                    image: booking,
                    detail: [
                        "เลือกรุ่นที่่สนใจ",
                        "ระบุวันที่ใช้งาน",
                        "ระบุสถานที่รับรถ",
                        "โอนเงินจอง",
                        "ส่งเอกสาร",
                        "รับรถพร้อม ชำระค่าเช่าและเงืนมัดจำเต็มจำนวน"
                    ]
                },
                {
                    title: "เอกสารที่ต้องใช้",
                    image: "",
                    detail: [
                        "บัตรประชาชน",
                        "ใบขับขี่",
                        "เบอร์ติดต่อ",
                        "facebook profile"
                    ]
                },
                {
                    title: "โอนเงินจอง",
                    image: "",
                    detail: [
                        "เงินจอง 1000",
                        "ประกัน 5000"
                    ]
                }

            ],
            amount: 0
        }
    }
}

export {
    component
}