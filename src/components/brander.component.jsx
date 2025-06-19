import { useEffect, useState } from "react";
import { mockup } from "../mockup";

export default function Brander() {
    const { list } = mockup.component.search.image;
    let [index, setIndex] = useState(0)

    useEffect(() => {
        let Scroll = setInterval(() => {
            handleScrollNext()
        }, 4000);
        return () => clearInterval(Scroll)
    }, [handleScrollNext])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handleScrollNext() {
        if (index === list.length - 1) {
            setIndex(0)
            scroll(0)
        } else {
            setIndex(index + 1)
            scroll(1)
        }
    }

    function handleScrollPre() {
        if (index !== 0) {
            setIndex(index - 1)
            scroll(-1)
        }
    }

    function scroll(position) {
        const percentOfImageSize = .8
        const imageSize = document.getElementsByClassName("brander__image")[0].clientWidth
        if (position === 0) {
            document.getElementsByClassName("brander__slide-image")[0].scrollLeft = 0
        } else {
            document.getElementsByClassName("brander__slide-image")[0].scrollLeft += imageSize * percentOfImageSize * position
        }
    }

    let isFristImage = index === 0
    let isOnlyOneImage = list.length === 1
    return (
        <div id="brander" className="brander ... relative items-start justify-center | w-full gap-4 |  md:max-w-7xl pt-20" >

            <div className="brander__interface ... flex flex-col justify-center absolute | w-full h-full top-0" >

                <div className={`brander__next-and-pre ... absolute flex | h-fit w-full p-4 || *:absolute *:justify-center *:items-center *:rounded-full *:aspect-1/1 *:font-black  *:w-[10vw] *:md:w-[3vw] *:lg:text-xl *:bg-white/30 *:text-black ${isOnlyOneImage & "hidden"}`} >
                    <div className={`brander__btn-pre-image --btn ... left-4 ${isFristImage ? "hidden" : "flex"}`} onClick={handleScrollPre} > {`<`} </div>
                    <div className={`brander__btn-next-image --btn ... right-4 flex`} onClick={handleScrollNext} > {`>`} </div>
                </div>

                <div className={`brander__display-dot ... absolute bottom-0 flex flex-row justify-center | h-[2vh] lg:h-[5vh] w-full gap-2 lg:gap-4 ${isOnlyOneImage && "hidden"} `} >
                    {list.map((param, _index) => {
                        let isLocation = index === _index
                        return (
                            <div className={`brander__dot ... h-[1vh] rounded-full  w-[1vh] aspect-1/1 ${isLocation ? "bg-blue-2" : "bg-white/50"} `} key={_index}></div>
                        )
                    })}
                </div>

            </div >

            <div className="brander__slide-image --scroll-hide ... flex flex-row snap-x snap-mandatory overflow-x-scroll lg:overflow-x-scroll overflow-y-hidden | w-full ">
                {list.map((image, _index) =>
                    <img className="brander__image ... snap-center md:h-[550px] aspect-4/3 md:aspect-21/9 object-cover" src={image} alt="big image" key={image + _index} />
                )}
            </div>

        </div >
    )
};
