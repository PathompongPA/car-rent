import { useState } from "react";
import { mockup } from "../mockup";

export default function GalleryCar() {
    const { brandName, carName, image } = mockup.car.all.list[0]
    const amountImage = image.length
    const [indexBigImg, setIndexBigImg] = useState(0)

    function handleClickBtnScrollImage(e) {
        const isNext = e.target.getAttribute("next") === 'true'
        const percentOfImageSize = .8
        const imageSize = document.getElementsByClassName("gallery-car__mini-img")[0].clientWidth
        setIndexBigImg(isNext ? indexBigImg + 1 < amountImage ? indexBigImg + 1 : indexBigImg : indexBigImg - 1 >= 0 ? indexBigImg - 1 : indexBigImg)
        document.getElementsByClassName("gallery-car__container-mini-img")[0].scrollLeft += imageSize * percentOfImageSize * (isNext ? 1 : -1)
    }

    function handleOnClickMiniImage(e) {
        setIndexBigImg(Number(e.target.getAttribute("index")))
    }

    console.log(indexBigImg);
    return (
        <div className="gallery-car *** flex flex-col | px-4 gap-4 | lg:max-w-7xl ">
            <div className="gallery-car__container-title *** flex justify-between | text-title-3 font-black text-blue-1 | lg:px-8 ">
                <div className="gallery-car__btn-pre --btn">{`<`}</div>
                <h1 className="gallery-car__title *** lg:text-title-2 ">{`${brandName} ${carName}`}</h1>
                <div className="gallery-car__btn-next --btn">{`>`}</div>
            </div>
            <div className="gallery-car__container-img *** flex flex-col justify-center items-center relative lg:flex-row">
                <h1 className="gallery-car__amount-img ***  h-fit absolute right-[8px] top-[8px] z-10 | lg:left-[40px] lg:top-8 lg:bottom-[216px] text-white lg:text-2xl font-black text-shadow-black text-shadow-lg/50">{indexBigImg + 1} / {amountImage} </h1>
                <img className="gallery-car__big-img *** aspect-16/8 object-cover w-full | lg:h-[500px] rounded-lg" src={image[indexBigImg]} alt="" />
                <div className="gallery-car__container-mini-img *** flex flex-row justify-center relative overflow-x-auto snap-x scroll-smooth | p-2 gap-4 | lg:flex-col lg:overflow-y-scroll lg:h-[500px] lg:px-4 lg:pt-0 lg:gap-8">
                    {image.map((img, index) =>
                        <img className={`gallery-car__mini-img --btn *** w-[120px] aspect-16/8 lg:aspect-16/8 snap-center rounded-lg object-cover | lg:w-[250px] ${indexBigImg === index ? "" : "brightness-60 lg:brightness-40"} hover:brightness-95`} src={img} alt={`${brandName}-${carName}-${index}`} key={`${brandName}-${carName}-${index}`} index={index} onClick={handleOnClickMiniImage} />
                    )}
                </div>
                <div className="gallery-car__btn-pre-mini-img --btn *** flex justify-center items-center absolute | h-[70%]  p-2 top-0 left-0 | lg:hidden lg:w-[100px] lg:h-[20%] lg:bottom-0 lg:right-0 |  text-shadow-lg/50 text-3xl font-black lg:text-5xl |  text-white select-none | active:text-black/40" onClick={handleClickBtnScrollImage} next="false">{`<`}</div>
                <div className="gallery-car__btn-next-mini-img --btn *** flex justify-center items-center absolute | h-[70%] p-2 top-0 right-0 | lg:hidden lg:w-[100px]  lg:h-[20%] | text-3xl font-black lg:text-5xl | text-white select-none | active:text-black/40" onClick={handleClickBtnScrollImage} next="true">{`>`}</div>
            </div>
        </div>
    )
};
