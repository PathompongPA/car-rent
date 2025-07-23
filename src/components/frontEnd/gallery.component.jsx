import { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router";

export default function GalleryCar() {
    const [searchParame, setSearchParame] = useSearchParams()
    let parameCarId = searchParame.get("id")
    const { Car } = useLoaderData();
    const { brand, carName, Imgs } = Car.data.filter((item) => item.id === parameCarId)[0]
    const { brandName } = brand;
    const amount = Car.data.length;
    const amountImage = Imgs.length
    const [indexBigImg, setIndexBigImg] = useState(0)

    useEffect(() => {
        document.title = `${document.title} - ${brandName} ${carName} `
    }, [brandName, carName])

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

    return (
        <div id="gallery" className="gallery-car *** flex flex-col justify-center items-center | gap-2 | xl:gap-4  lg:max-w-7xl xl:min-w-7xl lg:snap-center ">

            <div className="gallery-car__container-title *** grid grid-cols-5 w-full items-center | text-title-3 font-black text-blue-1 ">
                <button className={`gallery-car__btn-pre --btn flex-1/6 h-full ${parameCarId === 0 && "invisible"}`} onClick={() => { setSearchParame({ "id": parameCarId > 0 ? parameCarId - 1 : parameCarId }) }}>{`<`}</button>
                <h1 className="gallery-car__title *** select-none text-center col-span-3 text-description-1 h-fit md:text-title-3 xl:text-title-2 text-nowrap truncate">{`${brandName} ${carName}`}</h1>
                <button className={`gallery-car__btn-next --btn flex-1/6  h-full ${amount - 1 === parameCarId && " invisible "} `} onClick={() => { setSearchParame({ "id": parameCarId < amount - 1 ? parameCarId + 1 : parameCarId }) }}>{`>`}</button>
            </div>

            <div className="gallery-car__container-img *** flex flex-wrap justify-center items-center relative  gap-0 px-4 w-full md:w-[70%] md:gap-4 ">

                <h1 className="gallery-car__amount-img ***  select-none h-fit absolute right-[26px] top-[8px] z-10 | md:left-[40px] lg:top-8 lg:bottom-[216px] text-white lg:text-2xl font-black text-shadow-black text-shadow-lg/50">{indexBigImg + 1} / {amountImage} </h1>
                <img className="gallery-car__big-img *** aspect-16/9 object-cover | md:w-full rounded-lg  " src={Imgs[indexBigImg]} alt="" />
                <div className="gallery-car__container-mini-img --scroll-hide *** flex flex-row justify-start relative overflow-x-scroll snap-x scroll-smooth | py-2 gap-4 |  md:pt-0 lg:gap-8">
                    {Imgs.map((img, index) =>
                        <img className={`gallery-car__mini-img --btn *** w-[120px] aspect-16/9 md:aspect-16/9 snap-center rounded-lg object-cover | lg:w-[200px] ${indexBigImg === index ? "" : "brightness-60 lg:brightness-40"} hover:brightness-95`} src={img} alt={`${brandName}-${carName}-${index}`} key={`${carName}-${index}`} index={index} onClick={handleOnClickMiniImage} />
                    )}
                </div>
                <button className="gallery-car__btn-pre-mini-img --btn *** hidden justify-center items-center absolute | p-2 bottom-0 left-0 | md:flex lg:w-[100px] lg:h-[25%] lg:bottom-0 lg:right-0 |  text-shadow-lg/50 text-3xl font-black lg:text-5xl |  text-white select-none | active:text-black/40" onClick={handleClickBtnScrollImage} next="false">{`<`}</button>
                <button className="gallery-car__btn-next-mini-img --btn *** hidden justify-center items-center absolute | p-2 bottom-0 right-0 | md:flex lg:w-[100px]  lg:h-[25%] | text-3xl font-black lg:text-5xl | text-white select-none | active:text-black/40" onClick={handleClickBtnScrollImage} next="true">{`>`}</button>

            </div>

        </div>
    )
};
