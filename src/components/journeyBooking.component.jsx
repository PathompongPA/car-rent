import { useState } from "react";
import { mockup } from "../mockup"

export default function JourneyBooking() {
    const { component } = mockup;
    const { journeyBooking } = component;
    const [locatoion, setLocatoion] = useState(0)

    function handleHoverCard(e) {
        setLocatoion(Number(e.target.getAttribute("index")))
    }

    return (
        <div className=" journey-booking >> flex flex-col justify-center items-center | p-4 py-8 gap-8 w-full h-fit | md:max-w-7xl md:py-16 " >
            <h1 className="journey-booking__title >> drop-shadow-2xl/50 text-blue-1 font-black text-[42px] | md:text-[64px]">{journeyBooking.title}</h1>
            <div className="journey-booking__container-card >> flex justify-center items-center flex-wrap | gap-4 w-full h-fit | md:gap-8 border">
                {journeyBooking.card.list.map(({ title, detail }, index) =>
                    <div className={`journey-booking__card --btn >> flex flex-col justify-center items-center | w-full min-h-[180px] | bg-blue-2 | drop-shadow-xl/50 rounded-lg | text-white text-xl font-extrabold | lg:w-[390px] text-center lg:h-[450px] `} onClick={handleHoverCard} key={`journey-booking-card-${index}`} index={index}>
                        <h1 className="journey-booking__card-title >> flex justify-center items-center | p-8 | md:w-full lg:h-[150px] | lg:text-4xl" index={index}> {title} </h1>
                        <div className={` jouryney-booking__container-detail >> flex flex-col justify-center| w-full p-4 gap-4 | bg-white | rounded-lg | md:items-start md:justify-start | md:min-h-[300px] md:max-w-full | ${locatoion === index ? "" : "lg:hidden"} `} index={index}>
                            {detail.map((param, _index) =>
                                <div className={`journey-booking__card-detail >> flex justify-start items-start | h-fit | text-base font-bold text-blue-1`} key={`journey-booking-card-detail-${_index}`} index={_index}>{`- ${param}`}</div>
                            )}
                        </div>
                    </div>
                )
                }
            </div >
        </div >
    )
};
