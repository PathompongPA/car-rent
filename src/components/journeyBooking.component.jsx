import { mockup } from "../mockup"

export default function JourneyBooking() {
    const { component } = mockup;
    const { journeyBooking } = component;
    // const [locatoion, setLocatoion] = useState(0)

    // function handleHoverCard(e) {
    //     setLocatoion(Number(e.target.getAttribute("index")))
    // }
    return (
        <div id="booking-step" className=" journey-booking >> flex flex-col justify-center items-center | p-4 py-8  pb-0 gap-8 w-full h-full | md:max-w-7xl lg:snap-center" >
            <h1 className="journey-booking__title >> text-blue-1 font-black text-title-2 | md:text-title-1">{journeyBooking.title}</h1>
            <div className="journey-flex -card >> flex justify-center items-center flex-wrap | gap-4 w-full h-full | md:gap-8 ">
                {journeyBooking.card.list.map(({ title, detail }, index) =>
                    <div
                        // style={{ backgroundImage: `url(${image})` }}
                        className={`journey-booking__card --btn >> backdrop-brightness-100 backdrop-contrast-30 bg-cover group ease-in flex flex-col justify-end items-center | w-full p-1 h-full | bg-gradient-to-tr from-blue-2 to-blue-1/80 | rounded-lg | text-white text-xl font-extrabold | lg:w-[390px] text-center lg:h-[450px] `} key={`journey-booking-card-${index}`} index={index}>
                        <h1 className="journey-booking__card-title >> group-hover:md:text-title-3  group-focus:text-title-3 duration-300  flex justify-center items-center | md:h-full w-full h-fit p-4  md:p-0| text-title-3 | md:w-full  | lg:text-title-2" index={index}> {title} </h1>
                        <div className={`jouryney-booking__container-detail >> backdrop-blur-lg  overflow-hidden 
                            h-full p-4
                            group-hover:md:visible group-hover:md:h-[1000px]  group-hover:md:p-4 
                            duration-100 md:duration-300 flex flex-col justify-start  items-start | w-full  gap-4 md:h-0 | bg-white/70 md:bg-white | rounded-lg | md:items-start md:justify-start | md:p-0 md:max-w-full  md:invalid:`} index={index}>
                            {detail.map((param, _index) =>
                                <div className={`journey-booking__card-detail >> flex justify-start items-start | h-fit | font-light text-blue-1 text-[16px] `} key={`journey-booking-card-detail-${_index}`} index={_index}>{`- ${param}`}</div>
                            )}
                        </div>
                    </div>
                )
                }
            </div >
        </div >
    )
};
