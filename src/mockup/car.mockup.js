import img1 from '../assets/car/bmw/z4/img1.jpg'
import img2 from '../assets/car/bmw/z4/img2.jpg'
import img3 from '../assets/car/bmw/z4/img3.jpg'
import img4 from '../assets/car/bmw/z4/img4.jpg'
import img5 from '../assets/car/bmw/z4/img5.jpg'
import img6 from '../assets/car/bmw/z4/img6.jpg'
import img7 from '../assets/car/bmw/z4/img7.jpg'
import thumbnail from '../assets/car/bmw/z4/thumbnail.png'
let allCar = {
    list: [
        {
            carId: "1",
            carName: "z4",
            brandName: "Bmw",
            description: "this is demo description.",
            thumbnail: thumbnail,
            offer: [
                {
                    day: 1,
                    price: 4000,
                }
            ],
            image: [
                img1, img2, img3, img4, img5, img6, img7
            ]
        },
    ],
    amount: 1
}
let brand = {}

allCar.list.push(allCar.list[0])
allCar.list.push(allCar.list[0])
allCar.list.push(allCar.list[0])
allCar.list.push(allCar.list[0])
allCar.list.push(allCar.list[0])
allCar.list.push(allCar.list[0])
allCar.list.push(allCar.list[0])
allCar.list.push(allCar.list[0])
allCar.list.push(allCar.list[0])
allCar.list.push(allCar.list[0])
allCar.amount = allCar.list.length

export { allCar }