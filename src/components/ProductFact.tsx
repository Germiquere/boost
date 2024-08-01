import React from "react";
import { IFact } from "./ProductFacts";

interface IFactItemProps {
    fact: IFact;
}

export const ProductFact: React.FC<IFactItemProps> = ({fact}) => {
    const {img,text,title} = fact

    return (
        <div className="flex flex-col items-center justify-center gap-5 relative">
            <div className="rounded-full bg-white border-green-600 w-44 h-44 border-4 flex justify-center items-center text-green-600">
                {img}
            </div>
            <h3 className="font-semibold text-lg font-NotoSants">{title}</h3>
            <p className="w-56 font-NotoSants text-center">{text}</p>
        </div>
    )
}
