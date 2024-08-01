import { Await, useLoaderData} from "react-router-dom";
import { Products } from "../components/Products"
import { IProduct } from "../interfaces";
import { ProductsSkeleton } from "../components/ProductsSkeleton";
import React from "react";



export const CatalogProducts = () => {
    const data = useLoaderData() as { products: Promise<IProduct[]> }
    

    return (
        <section className="mx-auto max-w-7xl w-full">
               <React.Suspense fallback={<ProductsSkeleton />}>
                <Await
                resolve={data.products}
                errorElement={<p>Error al cargar los datos</p>}>
                    {(products: IProduct[]) => <Products products={products} />}
                </Await>
            </React.Suspense>
        </section>
    )
}
