import { useState } from "react";
import { mockup } from "../mockup";

export default function Review() {
    const { title, description, list, amount } = mockup.component.review;
    const [showMore, setShowMore] = useState(false)
    function handleBtnShowMore() {
        setShowMore(!showMore)
    }
    return (
        <div id="review" className="review >> flex flex-col justify-center items-center | w-full gap-8  px-4 py-8 pt-8 | md:max-w-7xl md:gap-8 lg:snap-center ">

            <h1 className="review__title >> text-center font-bold text-6xl text-blue-1">{title}</h1>

            <h3 className="review__description >> text-center font-bold text-blue-1">{`${description} ${amount} รีวิว`}</h3>

            <div className={`review__container-card >> flex flex-col md:grid md:grid-cols-3 relative overflow-hidden items-center justify-self-center self-center | w-full md:p-4 gap-4  ${showMore ? "h-full" : "h-[70vh] md:h-[50vh]"}`}>

                {list.map(({ img, reviewName, date, message }, index) =>
                    <div className="review__card >> flex flex-col gap-2 w-full h-full p-4 pb-8 | border border-golden-1 rounded-lg " key={`review-card-${index}`}>

                        <div className="review__container-header-card >> flex items-center | w-full md:gap-8 ">
                            <img className="review_card-img >> aspect-1/1 | w-[60px] bg-gray-1 rounded-full" src={img} alt={`${reviewName} image`} />
                            <div className="review__container-title-card">
                                <h3 className="review__card-review-name >> font-bold text-blue-1">{reviewName}</h3>
                                <div className="review__card-date >> text-xs font-medium text-blue-1">{date.format("DD-MM-YYYY")}</div>
                            </div>
                        </div>

                        <h1 className="review__card-message >> text-center  text-lg font-light text-blue-1 h-full items-center p-4 ">{`"${message}"`}</h1>

                    </div>
                )}

                <div className="review__btn-show-more --btn >> absolute bottom-4 left-[43%] | w-fit p-4 | bg-blue-2 | font-bold text-white text-[18px] | rounded-xl " onClick={handleBtnShowMore}>{!showMore ? "แสดงผลลัพธ์เพิ่มเติม" : "แสดงให้น้อยลง"}</div>

            </div>

        </div>
    )

};
