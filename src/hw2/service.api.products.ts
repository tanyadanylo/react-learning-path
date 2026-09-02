const BASE_URL = import.meta.env.VITE_API_PRODUCTS_BASE_URL;

export async function loadProducts() {
    try{
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Products not found");
        }
        const data = await response.json();
        return data.products;
    }catch(err: unknown){
        if(err instanceof Error){
            console.log(err.message);
        }
    }
}