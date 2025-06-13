import { mockup } from "../mockup"

export default function QAndAComponent() {
    const { list } = mockup.component.QA;
    return (
        <div className="q-and-a >> w-full p-4 pt-20 pb-16 lg:max-w-7xl ">
            <h1 className="q-and-a__title >> text-center text-6xl text-blue-1 font-black m-8">คำถามที่พบบ่อย</h1>
            <div className="q-and-q__container-card >> flex flex-row flex-wrap justify-center items-center gap-4 ">
                {list.map(({ q, a }, index) =>
                    <details className=" h-fit text-xl text-blue-1 font-bold flex-1/2 " name={q} key={`Q ${index}`} open={index === 0}>
                        <summary className="bg-blue-2 text-white p-4 rounded-xl">{`${q}`}</summary>
                        <p className="px-4 p-8 lg:p-8 lg:pl-16 lg:text-xl text-blue-2/80 font-black bg-gray-1/40 rounded">{`${a}`}</p>
                    </details>
                )}
            </div>
        </div>
    )
};
