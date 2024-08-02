import { catalogLoader } from "../../src/utils/Products"
import { IProduct } from "../../src/interfaces";


// Mock of the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ type: "cafe", name: "latte", description: "rico cafe", image: "urldeimagen" } ] as IProduct []),
    })
) as jest.Mock;

describe("Tests in catalogLoader", () => {
    test("should return an array of products with length greater than 0", async () => {
        const products : IProduct [] = await catalogLoader();
        
        expect(Array.isArray(products)).toBe(true);
        expect(products.length).toBeGreaterThan(0);
    });

    test("should return an array where the first element is an IProduct", async () => {
        const products : IProduct[] = await catalogLoader();
        
        const product : IProduct = products[0];

        expect( product ).toEqual({
            type: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
            image: expect.any(String),
        })
    });
});
