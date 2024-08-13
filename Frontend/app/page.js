"use client";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [sort, setSort] = useState(true); // true is for low to high
  const [searching, setSearching] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const findData = async () => {
      const response = await fetch("http://localhost:8000/getAll");
      const data = await response.json();
      setProducts(data);
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

  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold mb-5">Welcome to our store</h1>
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
        {products.map((prod) => (
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
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
