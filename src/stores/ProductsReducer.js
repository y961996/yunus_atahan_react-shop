import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'productSlice',
  initialState: {
    products: []
  },
  reducers: {
    addProduct: (state, product) => {
      state.products = [...state.products, product];
    },
    removeProduct: (state, productId) => {
      state.products = state.products.filter((product) => {
        return product.id !== productId
      })
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions

export default productsSlice.reducer