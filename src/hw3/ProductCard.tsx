import type {ICartProduct} from "./cart.model.ts";

function ProductCard({product}:{product:ICartProduct}) {
    return(
        <div className='border-4 border-gray-200 m-4 p-4'>
            <h1>{product.title}, id: {product.id}</h1>
            <h2>price: {product.price}</h2>
            <h3>quantity: {product.quantity}</h3>
            <h3>total: {product.total}</h3>
            <p>discountPercentage: {product.discountPercentage},
                discountedTotal: {product.discountedTotal}</p>
            <img src={product.thumbnail} alt="product photo"/>
        </div>
    )
}
export default ProductCard;