import type {IProduct} from "./products.model.ts";

function ProductComponent(props: IProduct) {
    return (
        <div className="border-2 border-inherit m-2.5 p-4 rounded-lg flex flex-col gap-2">
            <img src={props.thumbnail}
                 alt={props.title}
                 className="w-full h-48 object-contain"/>
            <h2 className="text-xl font-bold"> {props.title}
                <span className="text-sm  text-gray-500"> (ID: {props.id}) </span>
            </h2>
            <h3 className="text-md text-blue-600"> {props.brand} | {props.category} </h3>

            <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
                <p> Price: ${props.price} </p>
                <p className="text-red-500"> Discount: {props.discountPercentage}% </p>
            </div>

            <p> {props.description} </p>

            <div className="text-sm mt-2">
                <p>Rating: {props.rating}</p>
                <p>Stock: {props.stock}</p>
                <p>Status: {props.availabilityStatus}</p>
                <p>SKU: {props.sku}</p>
                <p>Weight: {props.weight}</p>
                <p>Warranty: {props.warrantyInformation}</p>
                <p>Shipping: {props.shippingInformation}</p>
                <p>Return policy: {props.returnPolicy}</p>
                <p>Minimum order quantity: {props.minimumOrderQuantity}</p>
            </div>

            <div>
                <h4 className="font-bold">Tags:</h4>
                <ul> {props.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="font-bold">Dimensions:</h4>
                <p>Width: {props.dimensions.width}</p>
                <p>Height: {props.dimensions.height}</p>
                <p>Depth: {props.dimensions.depth}</p>
            </div>

            <div>
                <h4 className="font-bold">Reviews:</h4>
                {props.reviews.map((review, index) => (
                <div key={index} className="border p-2 rounded m-2">
                    <p>Rating: {review.rating}</p>
                    <p>Comment: {review.comment}</p>
                    <p>Date: {review.date}</p>
                    <p>Reviewer: {review.reviewerName}</p>
                    <p>Email: {review.reviewerEmail}</p>
                </div>
                ))}
            </div>

            <div>
                <h4 className="font-bold">Meta:</h4>
                <p>Created: {props.meta.createdAt}</p>
                <p>Updated: {props.meta.updatedAt}</p>
                <p>Barcode: {props.meta.barcode}</p>
                <img src={props.meta.qrCode}
                     alt="QR Code"
                     className="w-24 h-24"/>
            </div>

            <div>
                <h4 className="font-bold">Images:</h4>
                {props.images.map((image, index) => (
                <img key={index} src={image} alt={`${props.title} ${index + 1}`}
                     className="w-full h-48 object-contain"/>))}
            </div>
        </div>
    )
}

export default ProductComponent;