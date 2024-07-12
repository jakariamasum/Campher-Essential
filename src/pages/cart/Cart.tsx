import { RootState } from "../../redux/store";
import ItemDetails from "../../components/ui/ItemDetails";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleIncreaseQuantity = (productId: string) => {
    const item = cartItems.find((item) => item.product._id === productId);
    if (item && item.quantity < item.product.stock) {
      dispatch(updateCartQuantity({ productId, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (productId: string) => {
    const item = cartItems.find((item) => item.product._id === productId);
    if (item && item.quantity > 1) {
      dispatch(updateCartQuantity({ productId, quantity: item.quantity - 1 }));
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    navigate("/checkout");
  };

  const isPlaceOrderDisabled = cartItems.some(
    (item) => item.product.stock === 0
  );

  return (
    <div className="max-w-[1230px] mx-auto px-2 min-h-screen">
      <h1 className="text-3xl text-center font-semibold my-5">
        Your Added Products in The <span className="text-[#22A1F0]">Cart</span>
      </h1>

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <ItemDetails
              key={item.product._id}
              item={item}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
          <span className="text-center text-orange-600">
            There is No Data in Cart
          </span>
        </div>
      )}

      <div className="bg-slate-50 lg:mt-0 mt-8 ml-3 rounded-md fixed lg:w-64 w-[90%] md:w-72 top-100 md:top-40 md:right-5 h-auto md:h-72 border border-[#21A0F3] shadow-lg p-4 z-[999]">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4">
          Order <span className="text-[#21A0F3]">Summary</span>
        </h1>
        <h3 className="font-semibold pb-1 text-sm md:text-base">
          Selected Items: {totalItems}
        </h3>
        <h3 className="font-semibold pb-1 text-sm md:text-base">
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
        <button
          onClick={handlePlaceOrder}
          disabled={isPlaceOrderDisabled || cartItems.length === 0}
          className={`bg-[#22A1F0] hover:bg-black text-white px-8 py-2 rounded mt-4 ${
            isPlaceOrderDisabled || cartItems.length === 0
              ? "disabled:bg-gray-400 disabled:pointer-events-none"
              : ""
          }`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
