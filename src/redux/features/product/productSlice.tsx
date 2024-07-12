import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../types/product";

export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  status: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct } =
  productSlice.actions;

export default productSlice.reducer;
