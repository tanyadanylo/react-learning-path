import {useEffect, useState} from "react";
import type {ICart} from "./cart.model.ts";
import {getCarts} from "./service.api.ts";
import {useParams} from "react-router-dom"

function CartsPage() {
    const [carts, setCarts] = useState<ICart[]>([])
    const {id} = useParams();

    useEffect(() => {
        async function loadCart() {
            if (!id) return;
            const carts = await getCarts(id);
            setCarts(carts.carts);

        }

        loadCart();
    }, [id])

    return (
        <div>
            {carts.map((cart) => (
                <div className='border-4 border-gray-400 m-4 p-4' key={cart.id}>
                    {cart.products.map((product) => (
                        <div key={product.id} className='border-4 border-gray-200 m-4 p-4'>
                            <h1>{product.title}, id: {product.id}</h1>
                            <h2>price: {product.price}</h2>
                            <h3>quantity: {product.quantity}</h3>
                            <h3>total: {product.total}</h3>
                            <p>discountPercentage: {product.discountPercentage},
                                discountedTotal: {product.discountedTotal}</p>
                            <img src={product.thumbnail} alt=""/>
                        </div>
                    ))}
                    <div className='italic font-semibold m-4 p-4'>
                        <h2>Total: {cart.total} </h2>
                        <h3>Discounted total {cart.discountedTotal}</h3>
                        <p>user id: {cart.userId}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartsPage;