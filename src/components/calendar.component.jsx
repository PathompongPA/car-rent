import dayjs from "dayjs";
import { useEffect, useState } from "react"
import { mockup } from "../mockup";
import { useSearchParams } from "react-router";

export default function Calendar() {
    const [arrayDay, setArrayDay] = useState(genArrayDay(dayjs()))
    const [calendarNow, setCalendarNow] = useState(dayjs())
    const [toDay, setToDay] = useState(dayjs().format("YYYY-MM-DD"))
    const [booking, setBooking] = useState([])
    const [searchParame] = useSearchParams()

    useEffect(() => {
        setToDay(dayjs().format("YYYY-MM-DD"))
        setArrayDay(genArrayDay(calendarNow))
        setBooking(mockup.car.all.list[0].booking)
    }, [calendarNow, searchParame])

    let listMonth = ["มกราคม", "กุมภาพันธ์", "มิถุนายน", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
    let listDayInWeek = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"]

    function genArrayDay(now) {
        let firstDay = now.date(1).get("days")
        let amountWeek = Math.ceil((31 + firstDay) / 7)
        let listDay = []
        for (let index = -firstDay + 1; index < amountWeek * 7 - firstDay + 1; index++) {
            listDay.push(now.set('date', index))
        }
        return listDay
    }

    function handleNextMonth() {
        setCalendarNow(calendarNow.add(1, "month"))
    }

    function handlePreMonth() {
        setCalendarNow(calendarNow.add(-1, "month"))
    }
    function handleBtnToDay() {
        setCalendarNow(dayjs())

    }

    let nextMonth = listMonth[Number(calendarNow.add(1, "month").format("MM")) - 1]
    let preMonth = listMonth[Number(calendarNow.add(-1, "month").format("MM")) - 1]
    let nowMonth = listMonth[Number(calendarNow.format("MM")) - 1]
    let year = calendarNow.format("YYYY")

    return (
        <div className="calendar *** flex flex-col | gap-4 w-full p-4 min-h-[50vh] | font-black text-blue-1 | lg:max-w-7xl lg:py-8 lg:snap-center" >

            <div className="calendar__title-component *** flex flex-row justify-between items-center">
                <h1 className="calendar__calendar-booking *** text-title-3 lg:text-title-1"> ปฎิทินการจอง </h1>
                <h1 className="calendar__btn-to-day --btn *** text-description-3 lg:text-title-3" onClick={handleBtnToDay}>วันนี้</h1>
            </div>

            <div className="calendar__title *** flex justify-between items-center | font-black text-blue-1 ">
                <div className="calendar__btn-pre --btn *** text-sm lg:text-description-1" onClick={handlePreMonth}>{`${preMonth} `}</div>
                <div className="calendar__month *** text-2xl font-black lg:text-title-2">{`${nowMonth} ${year}`}</div>
                <div className="calendar__btn-next --btn *** text-sm lg:text-description-1" onClick={handleNextMonth}>{`${nextMonth} `}</div>
            </div>

            <div className="calendar__table *** flex flex-col gap-4 ">

                <div className="calendar__week *** grid grid-cols-7 | gap-1 | lg:gap-4 ">
                    {listDayInWeek.map((dayInWeek, index) =>
                        <h1 className="calendar__day-in-week *** rounded-lg p-2 | text-center font-black text-white bg-blue-2 | lg:p-0 lg:text-title-3 " key={`day-in-week-${index}`}>{dayInWeek}</h1>)}
                </div>

                <div className={`calendar__container-day *** grid grid-rows grid-cols-7 items-center | gap-1 max-h-[55vh] | text-description-1  `}>
                    {booking && arrayDay.map((day) => {
                        let isBooking = booking.some((element) => element.format("YYYY-MM-DD") === day.format("YYYY-MM-DD"))
                        let isToday = toDay === day.format("YYYY-MM-DD")
                        let isOutOfMonth = calendarNow.format("MM") === day.format("MM")
                        let Day = Number(day.format("DD"))
                        let highlightToDay = "rounded-lg bg-blue-2 text-white"
                        let highlightBooking = "text-red-500 "
                        let highlightFree = "text-lime-700 "
                        return (
                            <div className={`calendar__day --btn *** flex flex-col items-center | p-4 rounded-lg | text-description-3 font-black | lg:justify-center lg:items-center ${isToday && highlightToDay} ${isBooking ? highlightBooking : isOutOfMonth && highlightFree}`} key={day}>
                                <div className={`text-sm lg:text-description-1`} > {isOutOfMonth && Day} </div>
                                <div className={`calendar__status-booking *** text-xs lg:text-description-3`}>{isBooking ? isOutOfMonth && "จอง" : isOutOfMonth && "ว่าง"}</div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div >
    )

};
