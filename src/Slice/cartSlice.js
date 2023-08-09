import { createSlice } from "@reduxjs/toolkit";
const items =
  localStorage.getItem("cartItem") !== null
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];
const wishlistItem =
  localStorage.getItem("wishlist") !== null
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];
const initialState = {
  cart: items,
  wishlist: wishlistItem,
  totalQuantity: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex >= 0) {
        state.cart[findIndex].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
      localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cart.map((item) => item))
      );
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          //   console.log("carttotal", cartTotal);
          //   console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          //   console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem(
        "cartItem",
        JSON.stringify(state.cart.map((item) => item))
      );
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map(
        (item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        },
        console.log(state.cart),
        localStorage.setItem(
          "cartItem",
          JSON.stringify(state.cart.map((item) => item))
        )
      );
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity === 1 ? item.quantity : item.quantity - 1,
          };
        }

        return item;
      },
      console.log(state.cart),
      localStorage.setItem("cartItem", JSON.stringify(state.cart.map((item) => item))));
    },
    addToWishList: (state, action) => {
      state.wishlist.push(action.payload);
      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlist.map((item) => item))
      );
    },
    removeWishList: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlist.map((item) => item))
      );
    },
  },
});
export const {
  addToCart,
  removeItem,
  getCartTotal,
  increaseItemQuantity,
  decreaseItemQuantity,
  addToWishList,
  removeWishList,
} = cartSlice.actions;
export default cartSlice.reducer;
