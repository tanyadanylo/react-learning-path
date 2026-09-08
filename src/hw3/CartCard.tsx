import type {ICart} from "./cart.model.ts";
import ProductCard from "./ProductCard.tsx";

function CartCard ({cart}: {cart:ICart}) {
    return (
        <div className='border-4 border-gray-400 m-4 p-4'>
            {cart.products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
            <div className='italic font-semibold m-4 p-4'>
                <h2>Total: {cart.total} </h2>
                <h3>Discounted total {cart.discountedTotal}</h3>
                <p>user id: {cart.userId}</p>
            </div>
        </div>
    )
}
export default CartCard;