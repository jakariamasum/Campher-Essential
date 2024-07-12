/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { clearCart } from "../../redux/features/cart/cartSlice";
import axios from "axios";

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  paymentMethod: "cod" | "stripe";
}

const Checkout: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "abc",
      address: "sd",
      email: "a@d.com",
      phoneNumber: "455",
    },
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const decreaseStock = async (cartItems: any[]) => {
    console.log(cartItems);
    try {
      await Promise.all(
        cartItems.map((item) => {
          console.log(item.product._id);
          return axios.put(
            `http://localhost:5000/api/v1/products/decrease-stock/${item.product._id}`,
            {
              quantity: item.quantity,
            }
          );
        })
      );
    } catch (error) {
      console.error("Error decreasing stock:", error);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await decreaseStock(cartItems);

    if (data.paymentMethod === "cod") {
      dispatch(clearCart());
      navigate("/success");
    } else {
      // Handle Stripe payment
      dispatch(clearCart());
      navigate("/stripe-checkout");
    }
  };

  return (
    <div className="max-w-[800px] mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">
              {errors.phoneNumber.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Delivery Address
          </label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.address && (
            <span className="text-red-500 text-sm">
              {errors.address.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                {...register("paymentMethod", {
                  required: "Payment method is required",
                })}
                type="radio"
                value="cod"
                id="cod"
                className="form-radio"
              />
              <label htmlFor="cod" className="ml-2">
                Cash on Delivery
              </label>
            </div>
            <div className="flex items-center">
              <input
                {...register("paymentMethod", {
                  required: "Payment method is required",
                })}
                type="radio"
                value="stripe"
                id="stripe"
                className="form-radio"
              />
              <label htmlFor="stripe" className="ml-2">
                Stripe
              </label>
            </div>
            {errors.paymentMethod && (
              <span className="text-red-500 text-sm">
                {errors.paymentMethod.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </span>
          <button
            type="submit"
            className="bg-[#22A1F0] hover:bg-black text-white px-6 py-2 rounded-md"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
