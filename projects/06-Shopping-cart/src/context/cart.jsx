import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type: actionType, paylodad: actionPayload } = action;
  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productInCard = state.findIndex((item) => item.id === id);
      if (productInCard >= 0) {
        const newCard = structuredClone(state);
        newCard[productInCard].quantity += 1;
        return newCard;
      }
      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      return state.filter((item) => item.id !== id);
    }
    case "CLEAR_CART": {
      return initialState;
    }
  }
  return state;
};

export function CartProvider({ children }) {
  //state "global"
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      paylodad: product,
    });
  const clearToCart = () =>
    dispatch({
      type: "CLEAR_CART",
    });

  return (
    <CartContext.Provider value={{ cart: state, addToCart, clearToCart }}>
      {children}
    </CartContext.Provider>
  );
}
