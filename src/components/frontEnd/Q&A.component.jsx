import { useLoaderData } from "react-router";

export default function QAndAComponent() {
    let { Content } = useLoaderData();
    let title = Content.data.filter((item) => item.id === "Qa.title")[0]?.value.text
    let list = Content.data.filter((item) => item.id === "Qa.card")[0]?.value
    return (
        <div id="Qa" className="q-and-a >> flex flex-col w-full p-4 pt-24 pb-4 md:max-w-7xl lg:snap-center">
            <h1 className="q-and-a__title >> hidden  text-center text-6xl text-blue-1 font-black m-8 md:block ">{title}</h1>
            <div className="q-and-q__container-card >> flex flex-row flex-wrap justify-center items-center gap-4 w-full ">
                {list.map(({ question, answer }, index) =>
                    <details className=" h-fit text-xl text-blue-1 font-bold flex-1/2 " name={question} key={`Q ${index}`} open={index === 0}>
                        <summary className="bg-blue-1 text-white p-4 rounded-xl">{`${question}`}</summary>
                        <p className="px-4 p-8 md:p-8 lg:pl-16 lg:text-xl text-blue-1/80 font-black bg-gray-1/40 rounded">{`${answer}`}</p>
                    </details>
                )}
            </div>
        </div>
    )
};
