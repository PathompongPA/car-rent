import bigImg from "../assets/bigImg.jpg"
import bmw from "../assets/logo/bmw.png"
import benz from "../assets/logo/benz.png"
import mini from "../assets/logo/mini.png"
import hyundai from "../assets/logo/hyundai.png"
import { useState } from "react"

export default function SearchCar() {
    const [location, setLocation] = useState(4)

    let mockUp = {
        layout: {
            bigImg: bigImg
        },
        brand: [
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
        ]
    }

    function Box(params) {
        return (
            <div
                className="
                pt-[70px]
                relative
                md:pt-0
                md:flex
                md:justify-center
                md:h-[650px]
                "
            >
                {params.children}
            </div>
        )
    }
    function Farm(params) {
        return (
            <div
                className="
                flex
                flex-col
                md:justify-center
                md:flex-row
                w-full
                md:w-7xl
                "
            >
                {params.children}
            </div>
        )
    }
    function BigImg(params) {
        let img = params.img
        return (
            <img
                className="
                md:h-[540px]
                md:w-full
                md:object-cover
                "
                src={img}
                alt="big image"
            />
        )
    }

    function Filter(params) {
        let amountBrand = params.brand.length
        function handleBtnFilter(e) {
            setLocation(e)
        }

        return (
            <div
                className="
                search-car__filter

                flex
                justify-center
                items-center
                flex-wrap

                gap-4
                py-4
                bottom-4

                bg-gradient-to-t
                from-5%
                from-gray-1
                to-55%%
                to-white

                drop-shadow-xl/50
                hover:cursor-pointer

                md:flex-nowrap
                md:absolute
                md:p-4
                md:gap-16
                md:rounded-lg
                ">
                {params.brand.map((params, index) => {
                    const { brandName, img } = params;
                    return (
                        <div
                            className={`
                            gap-2.5
                            px-4
                            py-2.5
                            w-[45%]
                            drop-shadow-xl/10
                            flex
                            rounded-lg
                            flex-col
                            justify-center
                            items-center
                            ${location === index ? "active" : ""}
                            `}
                            key={index}
                            onClick={() => { handleBtnFilter(index) }}
                        >
                            <img
                                className="
                                w-[100px]
                                h-[100px]
                                object-scale-down
                                "
                                src={img}
                                alt=""
                            />
                            <p
                                className="
                                text-center
                                "
                            >{brandName}</p>
                        </div>
                    )
                })}
                <button
                    className={`
                    py-2.5
                    px-4
                    h-fit
                    w-fit
                    rounded-lg
                    hover:cursor-pointer
                    ${location === amountBrand ? "active" : ""}
                    `}
                    onClick={() => {
                        handleBtnFilter(amountBrand)
                    }}
                >
                    ALL
                </button>
            </div>
        )
    }

    return (
        <Box>
            <Farm>
                <BigImg img={mockUp.layout.bigImg} />
                <Filter brand={mockUp.brand} />
            </Farm>
        </Box>
    )
};
