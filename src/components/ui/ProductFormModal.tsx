import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Product } from "../../types/product";

interface FormValues {
  name: string;
  price: number;
  category: string;
  image: FileList;
  imageUrl: string;
  stock: number;
  description: string;
  ratings: number;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormValues) => void;
  defaultValues?: Partial<Product>;
}

const ProductModal: React.FC<ProductModalProps> = ({
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
  } = useForm<FormValues>();

  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [useUrl, setUseUrl] = useState(false);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues as unknown as FormValues);
      if (defaultValues.image) {
        setCurrentImage(defaultValues.image as string);
      }
    }
  }, [defaultValues, reset]);

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    const productDetails: Partial<Product> = {
      name: data.name,
      category: data.category,
      price: Number(data.price),
      stock: Number(data.stock),
      ratings: Number(data.ratings),
      description: data.description,
    };

    if (useUrl && data.imageUrl) {
      productDetails.image = data.imageUrl;
    } else if (data.image && typeof data.image !== "string") {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=ee74842f81f029fb9561e589c2fe6b60`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      productDetails.image = result.data.url;
    } else {
      productDetails.image = currentImage as string;
    }

    onSubmit(productDetails as unknown as FormValues);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 flex items-center justify-center overflow-y-auto">
      <div className="bg-white p-8 mt-16 rounded shadow-lg w-full md:max-w-lg mx-4 max-h-full overflow-y-auto">
        <h2 className="text-2xl mb-4">
          {defaultValues ? "Edit Product" : "Create Product"}
        </h2>
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
                type="text"
                {...register("ratings", {
                  required: "Ratings are required",
                })}
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
              {...register("category", {
                required: "Category is required",
              })}
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
              Image
            </label>
            {useUrl ? (
              <>
                <input
                  type="text"
                  {...register("imageUrl", {
                    required: !currentImage ? "Image is required" : false,
                  })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                {errors.imageUrl && (
                  <span className="text-red-500 text-sm">
                    {errors.imageUrl.message}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setUseUrl(false)}
                  className="text-blue-500 mt-2"
                >
                  Use file upload
                </button>
              </>
            ) : (
              <>
                <input
                  type="file"
                  {...register("image", {
                    required: !currentImage ? "Image is required" : false,
                  })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
                {errors.image && (
                  <span className="text-red-500 text-sm">
                    {errors.image.message}
                  </span>
                )}
                {currentImage && (
                  <img
                    src={currentImage}
                    alt="Current"
                    className="mt-2 max-w-full h-24  object-contain"
                  />
                )}
                <button
                  type="button"
                  onClick={() => setUseUrl(true)}
                  className="text-blue-500 mt-2"
                >
                  Use URL
                </button>
              </>
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
              onClick={() => {
                onClose();
                reset();
              }}
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

export default ProductModal;
