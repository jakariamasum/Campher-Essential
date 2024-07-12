import { Rating, Star } from "@smastrom/react-rating";
import { Product } from "../../types/product";
// import { useAppDispatch } from "../../redux/hooks";

const ProductCard = ({ product }: { product: Product }) => {
  //   const dispatch = useAppDispatch();
  const randomNumber = Math.floor(Math.random() * (200 - 40 + 1)) + 40;
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "hsla(32, 100%, 50%, 1)",
    inactiveFillColor: "#888",
  };

  const handleAddToCart = () => {
    console.log(product);
  };

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
        <p className="text-gray-600">{product.description}</p>
        <div className="flex items-center space-x-1">
          <Rating
            style={{ maxWidth: 140 }}
            itemStyles={myStyles}
            value={5}
            readOnly
          />
          <span>({randomNumber})</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-blue-500">
            ${product.price}
            {product.price && (
              <del className="text-gray-500 ml-2">${product.price}</del>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
