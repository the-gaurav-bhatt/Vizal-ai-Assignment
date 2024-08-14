"use client";
import { CartContext } from "./contexts/cartContext";
import { useContext } from "react";

const Cart = () => {
  const { cartProducts, dispatch } = useContext(CartContext);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  console.log(cartProducts);

  return (
    <div className="cart">
      <h2 className="text-2xl text-white text-center m-3">Your Cart</h2>
      <section className="grid px-10 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cartProducts?.map((prod) => (
          <div
            key={prod.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={prod.imageUrl}
                alt={prod.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl text-blue-500 font-bold mb-2">
                {prod.name}
              </h2>
              <p className="text-gray-600 mb-2">{prod.description}</p>
              <p className="text-lg font-bold text-green-400">
                ${prod.price.toFixed(2)}
              </p>
              <button
                onClick={() => handleRemove(prod.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cart;
