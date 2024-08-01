import React from "react"
import { IProduct } from "../interfaces"
import { Product } from "./Product"
interface IProductsProps {
    products : IProduct[]
}
export const Products : React.FC<IProductsProps> = ( {products} ) => {
    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center pt-5">
            {products.map((product : IProduct) => (
                <Product key={product.nombre} product={product} />
            ))}
            </div>
           

    )
}
