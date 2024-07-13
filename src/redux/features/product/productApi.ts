import { Product } from "../../../types/product";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getProductsById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation<Product, Partial<Product>>({
      query: (product) => ({
        url: `/products/${product._id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation<{ success: boolean; id: string }, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsByIdQuery,
} = productApi;

export default productApi;
