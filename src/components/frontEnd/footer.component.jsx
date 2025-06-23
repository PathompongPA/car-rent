import { mockup } from "../../mockup";

export default function Footer() {
    const { img, p1, p2 } = mockup.component.footer;
    return (
        <div className="container-footer >> flex justify-center | w-full border-t-4 border-golden-1 ">
            <div className="footer >> flex flex-col justify-center items-center | p-4 | text-blue-1 | md:flex-row lg:max-w-7xl lg:items-start ">
                <div className="footer__container-logo >> flex justify-center | md:flex-1/3 ">
                    <img className="footer__logo >> w-full object-cover aspect-14/9 | md:w-[250px]" src={img} alt="logo" />
                </div>
                <div className="footer__contacts >> flex flex-col | p-4 gap-4 | md:gap-8 md:flex-1/3">
                    <h1 className="footer__title-contact >> text-description-3 font-bold text-center">{p1.title}</h1>
                    {p1.description}
                </div>
                <div className="footer__follows >> flex flex-wrap items-center justify-between | w-full p-4 px-8 gap-4 | md:gap-8 md:flex-1/3">
                    <h1 className="footer__follows-title >> w-full text-description-3 font-bold text-center">{p2.title}</h1>
                    {p2.list.map(({ link }, index) =>
                        <a className="footer__icon >> w-12 aspect-1/1 rounded-full bg-blue-1" key={"follow-icon" + index} href={link} />
                    )}
                </div>
            </div>
        </div>
    )
};
