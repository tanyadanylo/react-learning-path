import {useEffect, useState} from "react";
import type {IProduct} from "./product.model.ts";
import {getProducts} from "./service.api.product.ts";
import {useSearchParams} from "react-router-dom";
import ProductCard from "./ProductCard.tsx";

function ProductsPage() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [totalPage, setTotalPage] = useState(0);
    const [query, setQuery] = useSearchParams()
    const currentPage = Number(query.get('page')) || 1;
    const limit = 30;

    useEffect(() => {
        async function loadProducts() {
            const skip = (currentPage - 1) * limit;
            const response = await getProducts(limit, skip);
            setProducts(response.products);
            setTotalPage(response.total);
        }

        loadProducts();
    }, [currentPage])
    const totalCurrentPage =Math.ceil(totalPage / limit);

    return (
        <div>
            <div className=' flex justify-center'>
                <button className='bg-red-500 text-white px-4 py-2 m-2 rounded-md' disabled={currentPage === 1}
                        onClick={() => setQuery({page: String(currentPage - 1)})}>
                    Back
                </button>
                <button className='bg-sky-500 text-white px-4 py-2 m-2 rounded-md' disabled={currentPage === totalCurrentPage}
                        onClick={() => setQuery({page: String(currentPage + 1)})}>
                    Next
                </button>
            </div>

            {products.map((product => (
                <ProductCard key={product.id} product={product}/>
            )))}

        </div>
    )

}

export default ProductsPage;