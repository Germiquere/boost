import React from "react";
import blackDots from "../assets/black-dots.png";
import { IProduct } from "../interfaces";

interface IProductProps {
    product: IProduct;
}

export const Product: React.FC<IProductProps> = ({ product }) => {
    const { descripcion, imagen, nombre } = product;
    
    return (
        <div className="flex flex-col max-w-56 min-w-44 gap-5 bg-gray-100 text-center group cursor-pointer overflow-hidden">
            <div className="w-56 h-56 bg-black flex items-center justify-center">
                <img src={imagen} alt={nombre} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col flex-grow items-center gap-5">
                <h3 className="font-NotoSants font-semibold text-sm">{nombre}</h3>
                <img src={blackDots} alt="separador de contenido" className="w-[50px] h-[5px]" />
                <p className="font-NotoSants text-sm">{descripcion}</p>
                <span className="p-3 w-full opacity-0 bg-green-600 text-white font-NotoSants font-semibold text-sm group-hover:opacity-100 mt-auto">COMPRAR</span>
            </div>
        </div>
    );
};
