import { mockup } from "../mockup";

export default function Contact() {
    const { title, list } = mockup.component.contact;
    return (
        <div className="contact >> flex flex-col justify-center items-center | w-full p-4 pt-20 pb-16 gap-8 | lg:max-w-7xl" id="contact">
            <h1 className="contact__title >> w-full | text-center font-black text-6xl text-blue-1">{title}</h1>
            <div className="contact__container >> flex flex-2/3 justify-center flex-wrap | w-full | lg:gap-0 lg:flex-nowrap ">
                {list.map(({ name, list }, index) =>
                    <div className={`contact__card >> flex flex-col flex-1 lg:flex-1/3 | py-4 gap-4 | border-golden-1 bg-white | text-blue-1 ${index === 0 ? "" : "lg:border-l-2"}`} key={name + index}>
                        <h1 className={`contact__card-title >> text-center font-bold text-2xl ${name === "โทรศัพท์" ? "text-golden-1" : name === "facebook" ? "text-blue-700" : name === "line" ? "text-lime-500" : ""}`} >{name}</h1>
                        <div className="contact__card-link-container >> flex flex-col justify-center items-center | gap-4 h-full | lg:flex-1">
                            {list.map(({ message }, index) =>
                                <a className="contact__card-link >> text-2xl font-bold" href={name === "โทรศัพท์" ? "tel:" + message : message} target="_black" key={message + index}>{message}</a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div >
    )

};
