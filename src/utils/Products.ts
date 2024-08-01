import { IProduct } from "../interfaces";

// function to get all the products
export async function catalogLoader(): Promise<IProduct[]> {
    
    const response = await fetch('/data/data.json');
    if (!response.ok) {
        throw new Error('Failed to fetch catalog data');
    } 

    const data: IProduct[] = await response.json();

    // Simulates a delay of 2.5 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2500);
    });
}