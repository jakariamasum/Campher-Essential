/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../../redux/features/product/productApi";
import ProductListTable from "../../components/ui/ProductListTable";
import ProductFormModal from "../../components/ui/ProductFormModal";
import { Product } from "../../types/product";
import Swal from "sweetalert2";

const ProductManagement = () => {
  const { data: response, refetch } = useGetProductsQuery();
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product> | null>(
    {}
  );
  const products = response?.data || [];

  useEffect(() => {
    console.log("Current Product:", currentProduct);
  }, [currentProduct]);

  const handleCreate = () => {
    setCurrentProduct({});
    setIsModalOpen(true);
  };

  const handleEdit = (product: any) => {
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
        Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleFormSubmit = async (product: any) => {
    if (currentProduct && currentProduct._id) {
      await updateProduct({ ...currentProduct, ...product });
    } else {
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
