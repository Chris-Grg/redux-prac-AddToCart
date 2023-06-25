import { createStore } from "redux";

const initData = {
  products: [
    { id: 1, name: "laptop", price: 1000 },
    { id: 2, name: "mobile", price: 500 },
    { id: 3, name: "watch", price: 100 },
  ],
  cart: [],
  total: 0,
};
const reducer = (state = initData, action) => {
  if (action.type === "PURCHASE") {
    return {
      ...state,
      cart: [...state.cart, action.payLoad],
      total: state.total + parseInt(action.payLoad.price),
    };
  }
  if (action.type === "DELETE") {
    return {
      ...state,
      cart: state.cart.filter((i, index) => index !== action.itemIndex),
      total: state.total - parseInt(action.price),
    };
  }
  return state;
};
const store = createStore(reducer);

export default store;
