import bigImg from '../assets/bigImg.jpg'
import logo from "../assets/logo.jpg"
import booking from '../assets/component/journeyBooking/booking.jpg'
import dayjs from 'dayjs'
import user1 from '../assets/component/review/img/user1.jpg'

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
    },
    "review": {
        title: "รีวิว",
        description: "จากผู้ใช้มากกว่า",
        list: [],
        amount: 0
    }
}
let review1 =
{
    img: user1,
    reviewName: "Panada chanupanarak",
    date: dayjs("05-12-24"),
    message: "บริการดีมากเลยค่ะ แอดมินเอาใจใส่ ไม่จุกจิก มีปัญหาพร้อมตอบตลอด 24 ชม"
}
let review2 = {
    img: user1,
    reviewName: "Panada chanupanarak",
    date: dayjs("05-12-24"),
    message: "เช่ารถที่นี่สะดวกสบายและรวดเร็ว รถหรูใหม่ ขับสนุก บริการก็เยี่ยมาก"
}
let review3 = {
    img: user1,
    reviewName: "Panada chanupanarak",
    date: dayjs("05-12-24"),
    message: "บริการดี ห้องน้ำสะอาด"
}
let review4 = {
    img: user1,
    reviewName: "Panada chanupanarak",
    date: dayjs("05-12-24"),
    message: "อาหารรสชาติจัดจ้านมาก บริการดี ห้องน้ำสะอาด"
}
component.review.list.push(review1)
component.review.list.push(review3)
component.review.list.push(review4)
component.review.list.push(review2)
component.review.list.push(review1)
component.review.list.push(review3)
component.review.list.push(review2)
component.review.list.push(review1)
component.review.list.push(review3)
component.review.list.push(review4)
component.review.list.push(review2)
component.review.list.push(review1)
component.review.list.push(review3)
component.review.list.push(review1)
component.review.list.push(review3)
component.review.list.push(review4)
component.review.list.push(review2)
component.review.list.push(review1)
component.review.list.push(review3)
component.review.list.push(review3)
component.review.amount = component.review.list.length

export {
    component
}