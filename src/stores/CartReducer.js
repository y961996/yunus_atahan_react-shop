import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    test: false
  },
  reducers: {
    toggleTest: state => {state.test = !state.test},
  },
});

export const { toggleTest } = cartSlice.actions;

export default cartSlice.reducer;