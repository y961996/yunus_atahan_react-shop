import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartReducer';

export default configureStore({
  reducer:{
    cartReducer: CartReducer,
  }
});