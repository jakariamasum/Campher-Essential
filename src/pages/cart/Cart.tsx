import ItemDetails from "../../components/ui/ItemDetails";

const Cart = () => {
  const products = ["add", "add"];

  return (
    <div className="max-w-[1230px] mx-auto px-2 min-h-screen">
      <h1 className="text-3xl text-center font-semibold my-5">
        Your Added Products in The<span className="text-[#22A1F0]"> Cart</span>
      </h1>

      {products.length > 0 ? (
        <div className="">
          {products.map((item, index) => (
            <ItemDetails key={index} item={item} />
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
          Selected Items: 0
        </h3>
        <h3 className="font-semibold pb-1 text-sm md:text-base">
          Total Price: 0
        </h3>
      </div>
    </div>
  );
};

export default Cart;
