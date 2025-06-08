import bigImg from '../assets/bigImg.jpg'
import logo from "../assets/logo.jpg"
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
    }
}

export {
    component
}