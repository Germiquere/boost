import React from "react"
import { IFooterCard } from "./FooterCards"

interface IFooterCardProps {
    card : IFooterCard
}
export const FooterCard : React.FC <IFooterCardProps> = ( {card}) => {
    const {description,image,subtitle,title} = card
    return (
        <div className="flex flex-col gap-5 text-center items-center text-white w-full">
            <div className="text-green-600">
                {image}
            </div>
            <h3 className="font-semibold text-lg font-NotoSants">{title}</h3>
            <h3 className="font-semibold text-lg font-NotoSants">{subtitle}</h3>
            <p className="w-56   text-gray-500 font-NotoSants whitespace-pre-line text-sm md:text-base">{description}</p>
        </div>
    )
}
