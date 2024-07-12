import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import productSlice from "./features/product/productSlice";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    product: productSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
