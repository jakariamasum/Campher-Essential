import React from "react";
import { Product } from "../../types/product";

interface ProductListTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

const ProductListTable: React.FC<ProductListTableProps> = ({
  products,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-2 md:px-6 py-3 border-b-2 border-gray-200 text-left leading-4">
              Image
            </th>
            <th className="px-2 md:px-6 py-3 border-b-2 border-gray-200 text-left leading-4">
              Name
            </th>
            <th className="px-2 md:px-6 py-3 border-b-2 border-gray-200 text-left leading-4">
              Price
            </th>
            <th className="px-2 md:px-6 py-3 border-b-2 border-gray-200 text-left leading-4">
              Category
            </th>
            <th className="px-2 md:px-6 py-3 border-b-2 border-gray-200 text-left leading-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="px-2 md:px-6 py-4 border-b border-gray-200">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                />
              </td>
              <td className="px-2 md:px-6 py-4 border-b border-gray-200">
                {product?.name}
              </td>
              <td className="px-2 md:px-6 py-4 border-b border-gray-200">
                ${product?.price}
              </td>
              <td className="px-2 md:px-6 py-4 border-b border-gray-200">
                {product?.category}
              </td>
              <td className="px-2 flex gap-y-2 lg:block   lg:text-left md:px-6 py-4 border-b border-gray-200">
                <button
                  onClick={() => onEdit(product)}
                  className="bg-blue-500 text-white px-2 md:px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product._id)}
                  className="bg-red-500 text-white px-2 md:px-3 py-1 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListTable;
