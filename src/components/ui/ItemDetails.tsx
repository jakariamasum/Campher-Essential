import { FaPlus, FaMinus } from "react-icons/fa";
import { Product } from "../../types/product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface ItemDetailsProps {
  item: CartItem;
  handleIncreaseQuantity: (productId: string) => void;
  handleDecreaseQuantity: (productId: string) => void;
  handleRemoveFromCart: (productId: string) => void;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({
  item,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveFromCart,
}) => {
  return (
    <div className="border-b py-4">
      <div className="border-2 border-gray-100 rounded-md p-6 lg:w-[90%] w-full flex items-center gap-5">
        <img
          className="w-28 h-16 rounded"
          src={item.product.image}
          height={100}
          width={100}
          alt="Cart Product Pic"
        />
        <div className="flex flex-1 flex-col justify-evenly">
          <h1 className="text-xl font-semibold">{item.product.name}</h1>
          <h2 className="text-xl font-semibold"> $ {item.product.price}</h2>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => handleDecreaseQuantity(item.product._id)}
            className="bg-gray-200 px-2 py-1 rounded-l"
          >
            <FaMinus />
          </button>
          <input
            type="number"
            value={item.quantity}
            readOnly
            className="border border-gray-300 rounded-none px-3 py-1 w-20 text-center"
          />
          <button
            onClick={() => handleIncreaseQuantity(item.product._id)}
            className="bg-gray-200 px-2 py-1 rounded-r"
          >
            <FaPlus />
          </button>
        </div>
        <div>
          <button onClick={() => handleRemoveFromCart(item.product._id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12 p-3 hover:scale-90 transition-all bg-red-400 text-white rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
