import { useEffect, useState } from "react";
import { mockup } from "../mockup";

export default function Promotion() {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        const { offer } = mockup.car.all.list[0]
        setPrices(offer)
    }, [])

    return (
        <div className="promotion flex flex-col w-full lg:w-7xl text-description-1 font-black text-white bg-blue-2  px-4 py-8 lg:snap-center">
            <div className="promotion__title *** border-b-4 pb-8 text-golden-1 text-title-1 text-center">โปรโมชั่น</div>
            <div className="promotion_container-card *** flex flex-row flex-wrap items-center justify-center py-8 gap-16">
                {prices && prices.map(({ title, price }, index) =>
                    <div className="promotion__card*** flex flex-col  items-center p-4 gap-2.5" key={title + index}>
                        <div className="text-description-3">{title} วัน</div>
                        <div className="text-title-3">{price.toLocaleString()}.-</div>
                        <div className="text-description-3"> บาท/วัน
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};
