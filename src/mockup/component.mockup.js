import bigImg from '../assets/bigImg.jpg'
import logo from "../assets/logo.jpg"
import booking from '../assets/component/journeyBooking/booking.jpg'
import dayjs from 'dayjs'
import user1 from '../assets/component/review/img/user1.jpg'
import doc from "../assets/component/journeyBooking/doc.jpg"
import handCheck from "../assets/component/journeyBooking/handCheck.jpg"

let component = {
    "navbar": {
        logo: logo,
        title: {
            list:
                [
                    {
                        text: "จอง",
                        link: "brander"
                    },
                    {
                        text: "ขั้นตอนการจอง",
                        link: "booking-step"
                    },
                    {
                        text: "รีวิว",
                        link: "review"
                    },
                    {
                        text: "เกี่ยวกับเรา",
                        link: "about"
                    },
                    {
                        text: "คำถามที่พบบ่อย",
                        link: "q&a"
                    },
                ],
            amount: 0
        }
    },
    "search": {
        image: {
            list: [
                bigImg,
                bigImg,
                bigImg,
                bigImg,
            ]
        }

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
                    image: doc,
                    detail: [
                        "บัตรประชาชน",
                        "ใบขับขี่",
                        "เบอร์ติดต่อ",
                        "facebook profile"
                    ]
                },
                {
                    title: "โอนเงินจอง",
                    image: handCheck,
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
    },
    "contact": {
        title: "ติดต่อเรา",
        list: [
            {
                name: "โทรศัพท์",
                color: "D4903B",
                list: [
                    {
                        message: "092-847-0991",
                        link: "092-847-0991",
                    },
                    {
                        message: "098-926-9669",
                        link: "098-926-9669",
                    }
                ]
            },
            {
                name: "facebook",
                color: "011179",
                list: [
                    {
                        message: "รถเช่า บ้านคุณบี88",
                        link: "https://www.facebook.com/profile.php?id=61563865480190"
                    }
                ]
            },
            {
                name: "line",
                color: "2EAC00",
                list: [
                    {
                        message: "@CARRENT88",
                        link: "https://line.me/R/ti/p/@271xryvl?oat_content=url&ts=08110024"
                    }
                ]
            },
        ],
        amount: 0
    },
    "QA": {
        list: [], amount: 0
    },
    "footer": {
        img: logo,
        "p1": {
            title: "Contact",
            description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis debitis laudantium esse labore natus fugiat nam quibusdam, fuga qui nostrum amet,"
        },
        "p2": {
            title: "Follows me",
            list: [],
            amount: 0
        }
    }
}

let review1 = {
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
component.contact.amount = component.contact.list.length

let qa1 = {
    q: "ทำอย่างไรเมื่อเกิดอุบัติเหตุุเมื่อเช่ารถไปแล้ว",
    a: "ทำใจแล้วติดต่อกลับมาหาเราครับ"
}

component.QA.list.push(qa1)
component.QA.list.push(qa1)
component.QA.list.push(qa1)
component.QA.list.push(qa1)
component.QA.list.push(qa1)
component.QA.list.push(qa1)

component.QA.amount = component.QA.list.length

let follow1 = {
    icon: "",
    link: ""
}
component.footer.p2.list.push(follow1)
component.footer.p2.list.push(follow1)
component.footer.p2.list.push(follow1)
component.footer.p2.list.push(follow1)
component.footer.p2.amount = component.footer.p2.list.length

export {
    component
}