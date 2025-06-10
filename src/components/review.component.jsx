import { useState } from "react";
import { mockup } from "../mockup";

export default function Review() {
    const { title, description, list, amount } = mockup.component.review;
    const [showMore, setShowMore] = useState(false)
    function handleBtnShowMore() {
        setShowMore(!showMore)
    }
    return (
        <div className="review >> flex flex-col | w-full gap-8  px-4 py-8 pt-20 | md:max-w-7xl md:gap-8">
            <h1 className="review__title >> text-center font-bold text-5xl text-blue-1">{title}</h1>
            <h3 className="review__description >> text-center font-bold text-blue-1">{`${description} ${amount} รีวิว`}</h3>
            <div className={`review__container-card >> flex flex-wrap justify-center relative overflow-hidden | w-full gap-4 p-4 | md:gap-8 ${showMore ? "h-full" : "h-[70vh] md:h-[50vh]"}`}>
                {list.map(({ img, reviewName, date, message }, index) =>
                    <div className="review__card --btn >> flex flex-col gap-4 w-full p-4 pb-8 | border-1 border-golden-1 rounded-lg | md:p-8 md:pt-4 md:max-w-[330px]" key={`review-card-${index}`}>
                        <div className="review__container-header-card >> flex items-center | w-full gap-4 ">
                            <img className="review_card-img >> aspect-1/1 | w-[60px] bg-gray-1 rounded-full" src={img} alt={`${reviewName} image`} />
                            <div className="review__container-title-card">
                                <h3 className="review__card-review-name >> font-bold text-blue-1">{reviewName}</h3>
                                <div className="review__card-date >> text-xs font-medium text-blue-1">{date.format("DD-MM-YYYY")}</div>
                            </div>
                        </div>
                        <h1 className="review__card-message >> text-center  text-xl font-bold text-blue-1 ">{`"${message}"`}</h1>
                    </div>
                )}
                <div className="review__btn-show-more --btn >> absolute bottom-2 | w-fit p-2 | bg-blue-2 | text-white | rounded-full " onClick={handleBtnShowMore}>{!showMore ? "แสดงเพิ่มเติม" : "แสดงให้น้อยลง"}</div>
            </div>
        </div>
    )

};
