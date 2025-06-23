import { useEffect, useState } from "react";
import { mockup } from "../../mockup";

export default function Promotion() {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        const { offer } = mockup.car.all.list[0]
        setPrices(offer)
    }, [])

    return (
        <div className="promotion flex flex-col w-full md:max-w-7xl text-description-1 font-black text-white bg-blue-2  p-4 md:px-4 md:py-8 md:snap-center">
            <div className="promotion__title *** border-b-4 pb-8 text-golden-1 text-title-1 text-center">โปรโมชั่น</div>
            <div className="promotion_container-card *** flex flex-row flex-wrap items-center justify-center py-4 gap-x-8 md:py-8 md:gap-16">
                {prices && prices.map(({ title, price }, index) =>
                    <button className="promotion__card --btn *** flex flex-col  items-center  gap-2 p-4 md:gap-2.5" key={title + index}>
                        <div className="text-sm md:text-description-3">{title} วัน</div>
                        <div className="text-title-3 xl:text-title-2 font-black">{price.toLocaleString()}.-</div>
                        <div className="text-sm md:text-description-3"> บาท/วัน
                        </div>
                    </button>
                )}
            </div>
        </div>
    )
};
