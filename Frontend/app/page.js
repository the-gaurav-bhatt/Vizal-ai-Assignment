"use client";
import { useContext, useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { CartContext } from "./components/contexts/cartContext";
import Link from "next/link";

export default function Home() {
  const [sort, setSort] = useState(true); // true is for low to high
  const [searching, setSearching] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const findData = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:8000/getAll");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    findData();
  }, []);

  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) =>
      sort ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  }, [sort]);

  useEffect(() => {
    if (searchResult.length > 0) {
      setProducts(searchResult);
    } else {
      const findData = async () => {
        const response = await fetch("http://localhost:8000/getAll");
        const data = await response.json();
        setProducts(data);
      };
      findData();
    }
  }, [searchResult]);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
  };

  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold mb-5">Welcome to our store</h1>
      <Link href={"/cart"}>
        <span className="text-blue-500 hover:text-blue-700">Go to cart</span>
      </Link>
      {showNotification && (
        <div className="fixed top-0 right-0 mt-4 mr-4 z-50 bg-green-500 text-white py-2 px-4 rounded">
          Added to cart!
        </div>
      )}
      <div className="flex justify-around text-black my-4">
        <SearchBar
          setSearching={setSearching}
          setSearchResult={setSearchResult}
        />
        <button
          className="block relative pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 sm:text-sm"
          onClick={(e) => {
            e.preventDefault();
            setSort(!sort);
          }}
        >
          Sort
        </button>
      </div>
      <section className="grid px-10 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading && (
          <div className=" flex text-center text-2xl text-green-600">
            Loading...
          </div>
        )}
        {!loading &&
          products.map((prod) => (
            <div key={prod.id} className="bg-white shadow-lg rounded-lg">
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
                  onClick={() => handleAddToCart(prod)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}
