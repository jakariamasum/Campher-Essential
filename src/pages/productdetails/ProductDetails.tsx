import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsByIdQuery } from "../../redux/features/product/productApi";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { RootState } from "../../redux/store";
import { Toaster, toast } from "sonner";

import { FaPlus, FaMinus } from "react-icons/fa";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const {
    data: response,
    error,
    isLoading,
  } = useGetProductsByIdQuery(productId, { pollingInterval: 1000 });
  const product = response?.data || [];

  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (item) => item.product._id === productId
    );
    if (existingItem) {
      const newQuantity = Math.min(
        existingItem.quantity + quantity,
        product.stock
      );
      dispatch(
        addToCart({ product, quantity: newQuantity - existingItem.quantity })
      );
    } else {
      dispatch(addToCart({ product, quantity }));
    }
    setIsAddedToCart(true);
    toast.success("Product added to cart!");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleQuantityChange = (e: any) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const myStyles = {
    itemShapes: Star,
    activeFillColor: "hsla(32, 100%, 50%, 1)",
    inactiveFillColor: "#888",
  };

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8">Error</div>;

  return (
    <div className="max-w-[1230px] mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center items-center">
          <img
            src={product.image || "/placeholder-image.jpg"}
            alt={product.name}
            className="w-full h-96 rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">
            {product.name || "Product Name"}
          </h1>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Category:</span>{" "}
            {product.category || "Category"}
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Price:</span> $
            {product.price || "Price"}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Stock Quantity:</span>{" "}
            {product.stock || "Stock Quantity"}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Description:</span>{" "}
            {product.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo metus non erat tristique, in ultricies orci rhoncus."}
          </p>
          <div className="flex items-center gap-1 mb-4">
            <Rating
              style={{ maxWidth: 100 }}
              itemStyles={myStyles}
              value={product?.ratings}
              readOnly
            />
            <span>(600)</span>
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label>
            <button
              onClick={handleDecreaseQuantity}
              className="bg-gray-200 px-2 py-1 rounded-l"
            >
              <FaMinus />
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="border border-gray-300 rounded-none px-3 py-1 w-20 text-center"
            />
            <button
              onClick={handleIncreaseQuantity}
              className="bg-gray-200 px-2 py-1 rounded-r"
            >
              <FaPlus />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={
              isAddedToCart || quantity > product.stock || quantity <= 0
            }
            className={`bg-[#22A1F0] hover:bg-black text-white px-8 py-2 rounded ${
              isAddedToCart || quantity > product.stock || quantity <= 0
                ? "disabled:bg-gray-400 disabled:pointer-events-none"
                : ""
            }`}
          >
            {isAddedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default ProductDetailsPage;
