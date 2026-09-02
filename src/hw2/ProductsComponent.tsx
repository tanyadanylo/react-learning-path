import {useEffect, useState} from "react";
import type {IProduct} from "./products.model.ts";
import {loadProducts} from "./service.api.products.ts";
import ProductComponent from "./ProductComponent.tsx";

function ProductsComponent() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const products = await loadProducts();
            setProducts(products);
        }

        fetchProducts();
    }, [])

    return (
        <div>
            {products.map((product) => (
                <ProductComponent key={product.id} {...product} />
            ))}
        </div>
    )
}

export default ProductsComponent;