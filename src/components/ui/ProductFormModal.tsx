import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Product } from "../../types/product";

interface FormValues {
  name: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  description: string;
  ratings: number;
}

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormValues) => void;
  defaultValues?: Partial<Product>;
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: defaultValues as FormValues,
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues as FormValues);
    }
  }, [defaultValues, reset]);

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    // const { price, stock } = data;4
    const productDetails = {
      name: data.name,
      category: data.category,
      price: Number(data.price),
      stock: Number(data.stock),
      ratings: Number(data.ratings),
      image: data.image,
      description: data.description,
    };

    onSubmit(productDetails);
    reset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 bg-gray-500 bg-opacity-75 flex items-center justify-center overflow-y-auto">
      <div className="bg-white p-8 rounded shadow-lg w-1/2">
        <h2 className="text-2xl mb-4">Product Form</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="text"
                {...register("price", { required: "Price is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">
                  {errors.price.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Stock
              </label>
              <input
                {...register("stock", { required: "Stock is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              {errors.stock && (
                <span className="text-red-500 text-sm">
                  {errors.stock.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Ratings
              </label>
              <input
                type="number"
                {...register("ratings", { required: "Ratings is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              {errors.ratings && (
                <span className="text-red-500 text-sm">
                  {errors.ratings.message}
                </span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              {...register("category", { required: "Category is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.category && (
              <span className="text-red-500 text-sm">
                {errors.category.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              {...register("image", { required: "Image URL is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.image && (
              <span className="text-red-500 text-sm">
                {errors.image.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              name="description"
              id="description"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            ></textarea>

            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormModal;
