import type {IProduct} from "./product.model.ts";

function ProductCard({product}: { product: IProduct }) {
    return (
        <div className="border-2 border-inherit m-2.5 p-4 rounded-lg flex flex-col gap-2">
            <h1> ID: {product.id}</h1>
            <img src={product.thumbnail}
                 alt={product.title}
                 className="w-full h-48 object-contain"/>
            <h2 className="text-xl font-bold"> {product.title}
                <span className="text-sm  text-gray-500"> (ID: {product.id}) </span>
            </h2>
            <h3 className="text-md text-blue-600"> {product.brand} | {product.category} </h3>

            <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
                <p> Price: ${product.price} </p>
                <p className="text-red-500"> Discount: {product.discountPercentage}% </p>
            </div>

        </div>
    )
}

export default ProductCard;