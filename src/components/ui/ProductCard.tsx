import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Product } from "../../types/product";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  console.log(product);
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "hsla(32, 100%, 50%, 1)",
    inactiveFillColor: "#888",
  };
  const randomNumber = Math.floor(Math.random() * (200 - 40 + 1)) + 40;

  return (
    <div className="card px-4 py-4 border border-blue-500 hover:scale-105 transition-all duration-300 bg-white shadow-xl relative">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover rounded-t-xl"
        />
      </figure>
      <div className="card-body py-4 space-y-2">
        <h2 className="card-title text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600 flex flex-col">
          <span>{product?.description?.substring(0, 50)}</span>
        </p>
        <div className="flex items-center gap-1">
          <Rating
            style={{ maxWidth: 100 }}
            itemStyles={myStyles}
            value={product?.ratings}
            readOnly
          />
          <span>({randomNumber})</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-blue-500">
            ${product.price}
            {product.price && (
              <del className="text-gray-500 ml-2">
                ${(product.price - (product.price * 30) / 100).toFixed(2)}
              </del>
            )}
          </div>

          <Link to={`/products/${product._id}`}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
