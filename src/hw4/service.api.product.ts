const BASE_URL_PRODUCTS = import.meta.env.VITE_API_PRODUCTS_BASE_URL;

export async function getProducts(limit: number, skip: number) {
    try {
        const response = await fetch(`${BASE_URL_PRODUCTS}?limit=${limit}&skip=${skip}`);
        if (!response.ok) {
            throw new Error("Products not found");
        }
        const data = await response.json();
        return data;
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
}