import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    currentProduct: null
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload
    },
  }
});

export const { setCurrentProduct } = productSlice.actions;
export default productSlice.reducer;