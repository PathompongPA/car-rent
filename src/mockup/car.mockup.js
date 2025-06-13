import img1 from '../assets/car/bmw/z4/img1.jpg'
import img2 from '../assets/car/bmw/z4/img2.jpg'
import img3 from '../assets/car/bmw/z4/img3.jpg'
import img4 from '../assets/car/bmw/z4/img4.jpg'
import img5 from '../assets/car/bmw/z4/img5.jpg'
import img6 from '../assets/car/bmw/z4/img6.jpg'
import img7 from '../assets/car/bmw/z4/img7.jpg'
import thumbnail from '../assets/car/bmw/z4/thumbnail.png'
import a2001 from '../assets/car/benz/a200/a2001.webp'
import a2002 from '../assets/car/benz/a200/a2002.webp'
import a2003 from '../assets/car/benz/a200/a2003.webp'
import a2004 from '../assets/car/benz/a200/a2004.webp'
import a2005 from '../assets/car/benz/a200/a2005.webp'
import a2006 from '../assets/car/benz/a200/a2006.webp'
import a2007 from '../assets/car/benz/a200/a2007.webp'
import a2008 from '../assets/car/benz/a200/a2008.webp'
import a200thumbnail from '../assets/car/benz/a200/a200thumbnail.webp'
import bmw from '../assets/logo/bmw.png'
import benz from '../assets/logo/benz.png'
import mini from '../assets/logo/mini.png'
import hyundai from '../assets/logo/hyundai.png'
import dayjs from 'dayjs'

let benzA200 = {
    carId: "2",
    carName: "A200",
    brandName: "Benz",
    description: "this is demo description.",
    thumbnail: a200thumbnail,
    offer: [
        {
            title: "1",
            price: 4200,
        },
        {
            title: "2-6",
            price: 3900
        },
        {
            title: "7-14",
            price: 3900
        },
        {
            title: "15+",
            price: 3900
        },
        {
            title: "30",
            price: 3900
        },
    ],
    booking: [],
    image: [a2001, a2002, a2003, a2004, a2005, a2006, a2007, a2008,]
}
benzA200.booking.push(dayjs().add(-7, "day"))
benzA200.booking.push(dayjs().add(-8, "day"))
benzA200.booking.push(dayjs().add(-9, "day"))
benzA200.booking.push(dayjs().add(-10, "day"))
benzA200.booking.push(dayjs().add(-11, "day"))
benzA200.booking.push(dayjs().add(-12, "day"))


let bmwZ4 = {
    carId: "1",
    carName: "z4",
    brandName: "Bmw",
    description: "this is demo description.",
    thumbnail: thumbnail,
    offer: [
        {
            title: "1",
            price: 4200,
        },
        {
            title: "2-6",
            price: 3900
        },
        {
            title: "7-14",
            price: 3900
        },
        {
            title: "15+",
            price: 3900
        },
        {
            title: "30",
            price: 3900
        },
    ],
    booking: [],
    image: [
        img1, img2, img3, img4, img5, img6, img7
    ]
}
bmwZ4.booking.push(dayjs().add(-2, "day"))
bmwZ4.booking.push(dayjs().add(-3, "day"))
bmwZ4.booking.push(dayjs().add(-4, "day"))
bmwZ4.booking.push(dayjs().add(-5, "day"))
bmwZ4.booking.push(dayjs().add(-6, "day"))
bmwZ4.booking.push(dayjs().add(-7, "day"))
bmwZ4.booking.push(dayjs().add(-8, "day"))
bmwZ4.booking.push(dayjs().add(-9, "day"))
bmwZ4.booking.push(dayjs().add(-10, "day"))

let car = {
    brand: {
        list: [
            {
                brandName: "bmw",
                img: bmw
            },
            {
                brandName: "benz",
                img: benz
            },
            {
                brandName: "mini",
                img: mini
            },
            {
                brandName: "hyundai",
                img: hyundai
            }
        ],
        amount: 0
    },
    all: {
        list: [],
        amount: 0
    },
}

car.all.list.push(benzA200)
car.all.list.push(benzA200)
car.all.list.push(benzA200)
car.all.list.push(benzA200)
car.all.list.push(bmwZ4)
car.all.list.push(bmwZ4)
car.all.list.push(bmwZ4)
car.all.list.push(bmwZ4)
car.all.amount = car.all.list.length

// car.all.list.map(({ brandName }) => {
//     let isBrand = car.brand.list.find((_params) => _params === brandName)
//     !isBrand ? car.brand.list.push(brandName) : ""
// })

car.brand.amount = car.brand.list.length

export { car }