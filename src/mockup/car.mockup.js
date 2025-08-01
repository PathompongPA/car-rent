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




let car = {
    brand: {
        list: [
            {
                brandName: "Mercedes Benz",
                img: benz
            },
            {
                brandName: "Bmw",
                img: bmw
            },
            {
                brandName: "Mini",
                img: mini
            },
            {
                brandName: "Hyundai",
                img: hyundai
            },
            {
                brandName: "Toyota",
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

for (let index = 0; index < 5; index++) {
    let benzA200 = {
        carId: index,
        carName: "A200-demo-" + index,
        brandName: car.brand.list[0].brandName,
        description: " this is demo description. this is demo description. this is demo description. this is demo description. this is demo description. this is demo description. this is demo description. ",
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
                price: 3600
            },
            {
                title: "15+",
                price: 3500
            },
            {
                title: "30",
                price: 3000
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
    benzA200.booking.push(dayjs().add(2, "day"))
    benzA200.booking.push(dayjs().add(4, "day"))
    benzA200.booking.push(dayjs().add(7, "day"))
    benzA200.booking.push(dayjs().add(9, "day"))
    benzA200.booking.push(dayjs().add(10, "day"))
    benzA200.booking.push(dayjs().add(11, "day"))
    benzA200.booking.push(dayjs().add(12, "day"))
    benzA200.booking.push(dayjs().add(18, "day"))
    benzA200.booking.push(dayjs().add(17, "day"))
    car.all.list.push(benzA200)
}

for (let index = 5; index < 10; index++) {
    let bmwZ4 = {
        carId: index,
        carName: "z4-demo-" + index,
        brandName: "Bmw",
        description: " this is demo description. this is demo description. this is demo description. this is demo description. this is demo description. this is demo description. this is demo description. ",
        thumbnail: thumbnail,
        offer: [
            {
                title: "1",
                price: 4000,
            },
            {
                title: "2-6",
                price: 3700
            },
            {
                title: "7-14",
                price: 3500
            },
            {
                title: "15+",
                price: 3000
            },
            {
                title: "30",
                price: 2800
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
    bmwZ4.booking.push(dayjs().add(10, "day"))
    bmwZ4.booking.push(dayjs().add(11, "day"))
    bmwZ4.booking.push(dayjs().add(16, "day"))
    bmwZ4.booking.push(dayjs().add(14, "day"))
    bmwZ4.booking.push(dayjs().add(9, "day"))
    car.all.list.push(bmwZ4)
}

car.all.amount = car.all.list.length
car.brand.amount = car.brand.list.length

car.all.list.sort((a, b) => {
    a.carId - b.carId
})

export { car }