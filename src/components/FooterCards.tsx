import {location,phone,calendar} from "../assets/svgs/svgs";
import { FooterCard } from "./FooterCard";

export interface IFooterCard {
    title: string;
    subtitle: string;
    image: JSX.Element;
    description: string;
}
export const FooterCards = () => {
    const cardsData : IFooterCard[] = [
        {
            title: "BIENVENIDO",
            subtitle: "Crespo 3133, Santa Fe Capital",
            image: location,
            description: "Veni a visitarnos hoy"
        },
        {
            title: "LLAMANOS",
            subtitle: "3496 460785",
            image: phone,
            description: "Si tenes alguna pregunta sobre nuestro local no dudes en comunicarte con nosotros"
        },
        {
            title: "VISITANOS",
            subtitle: "Nuestros horarios",
            image: calendar,
            description: "Lun-Vier: 7am-8pm \n Sab-Dom: 8am-8pm"
        },
    ]
    return (
        <div className="pt-10">
            <div className="border-t border-gray-500 py-10 border-b flex flex-col md:flex-row gap-5">
                {cardsData.map( card =>(
                    <FooterCard key={card.title} card={card}/>
                ))}
            </div>
        </div>
    )
}
