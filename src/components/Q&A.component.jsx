import { mockup } from "../mockup"

export default function QAndAComponent() {
    const { list } = mockup.component.QA;
    return (
        <div id="q&a" className="q-and-a >> flex flex-col w-full p-4 pt-24 pb-4 md:max-w-7xl lg:snap-center">
            <h1 className="q-and-a__title >> hidden  text-center text-6xl text-blue-1 font-black m-8 md:block ">คำถามที่พบบ่อย</h1>
            <div className="q-and-q__container-card >> flex flex-row flex-wrap justify-center items-center gap-4 ">
                {list.map(({ q, a }, index) =>
                    <details className=" h-fit text-xl text-blue-1 font-bold flex-1/2 " name={q} key={`Q ${index}`} open={index === 0}>
                        <summary className="bg-blue-1 text-white p-4 rounded-xl">{`${q}`}</summary>
                        <p className="px-4 p-8 md:p-8 lg:pl-16 lg:text-xl text-blue-1/80 font-black bg-gray-1/40 rounded">{`${a}`}</p>
                    </details>
                )}
            </div>
        </div>
    )
};
