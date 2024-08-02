import React from "react";
import blackDots from "../assets/black-dots.png";
import { IProduct } from "../interfaces";
import { motion } from 'framer-motion';
interface IProductProps {
    product: IProduct;
}

export const Product: React.FC<IProductProps> = ({ product }) => {
    const { description, image, name } = product;
    
    return (
        <motion.div
            className="flex flex-col max-w-56 min-w-44 gap-5 bg-gray-100 text-center group cursor-pointer overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-56 h-56 bg-white flex items-center justify-center">
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-80" />
            </div>
            <div className="flex flex-col flex-grow items-center gap-5">
                <h3 className="font-NotoSants font-semibold text-sm">{name}</h3>
                <img src={blackDots} alt="separador de contenido" className="w-[50px] h-[5px]" />
                <p className="font-NotoSants text-sm px-2">{description}</p>
                <span
                    className="p-3 w-full opacity-0 bg-green-600 text-white font-NotoSants font-semibold text-sm group-hover:opacity-100 mt-auto transition-all duration-300">
                    COMPRAR
                </span>
            </div>
        </motion.div>
    );
};
