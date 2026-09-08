import {useEffect, useState} from "react";
import type {ICart} from "./cart.model.ts";
import {getCarts} from "./service.api.ts";
import {useParams} from "react-router-dom"
import CartCard from "./CartCard.tsx";

function CartPage() {
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
                <CartCard key={cart.id} cart={cart}/>
            ))}
        </div>
    )
}

export default CartPage;