const { createContext, useReducer, useEffect } = require("react");

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("Reached Add to cart");
      console.log(action.payload);
      const updatedStateAdd = [...state, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedStateAdd));
      return updatedStateAdd;
    case "REMOVE_FROM_CART":
      const updatedStateRemove = state.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedStateRemove));
      return updatedStateRemove;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartProducts, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <CartContext.Provider value={{ cartProducts, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
