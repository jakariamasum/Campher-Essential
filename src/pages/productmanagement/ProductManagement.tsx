/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../../redux/features/product/productApi";
import ProductListTable from "../../components/ui/ProductListTable";
import ProductModal from "../../components/ui/ProductFormModal";
import { Product } from "../../types/product";
import Swal from "sweetalert2";
import { toast, Toaster } from "sonner";

const ProductManagement = () => {
  const { data: response, refetch } = useGetProductsQuery(undefined, {
    pollingInterval: 500,
  });
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product> | null>(
    null
  );
  const products = response?.data || [];

  useEffect(() => {}, [currentProduct]);

  const handleCreate = () => {
    setCurrentProduct(null);
    setIsModalOpen(true);
  };

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProduct(id);
        refetch();
        toast.success("Product has been deleted.");
      }
    });
  };

  const handleFormSubmit = async (product: any) => {
    if (currentProduct && currentProduct._id) {
      await updateProduct({ ...currentProduct, ...product });
      toast.success("Product has been updated.");
    } else {
      await addProduct(product);
      toast.success("Product has been added.");
    }
    setIsModalOpen(false);
    refetch();
  };

  return (
    <div className="max-w-[1230px] mx-auto py-12 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold mb-4 lg:mb-0">
          Product Management
        </h1>
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 lg:mt-0 lg:ml-4"
        >
          Create New Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <ProductListTable
          products={products || []}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          defaultValues={currentProduct || undefined}
        />
      )}
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default ProductManagement;
