/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../../redux/features/product/productApi";
import ProductListTable from "../../components/ui/ProductListTable";
import ProductFormModal from "../../components/ui/ProductFormModal";
import { Product } from "../../types/product";

const ProductManagement = () => {
  const { data: response, refetch } = useGetProductsQuery();
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product> | null>(
    null
  );
  const products = response?.data || [];

  const handleCreate = () => {
    setCurrentProduct(null);
    setIsModalOpen(true);
  };

  const handleEdit = (product: any) => {
    setCurrentProduct(product);
    console.log(currentProduct);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      refetch();
    }
  };

  const handleFormSubmit = async (product: any) => {
    if (currentProduct) {
      await updateProduct({ ...currentProduct, ...product });
    } else {
      console.log(product);
      await addProduct(product);
    }
    setIsModalOpen(false);
    refetch();
  };

  return (
    <div className="max-w-[1230px] mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Product Management</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create New Product
        </button>
      </div>

      <ProductListTable
        products={products || []}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ProductFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        defaultValues={currentProduct || {}}
      />
    </div>
  );
};

export default ProductManagement;
