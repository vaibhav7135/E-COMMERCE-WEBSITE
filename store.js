import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice setup
const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

// Export actions
export const { addToCart } = cartSlice.actions;

// Create and export the store
export const store = configureStore({
  reducer: cartSlice.reducer,
});
