"use client";
// import { useRouter,Link } from 'next/navigation';
import Link from "next/link";
import { useState, React } from "react";
const getCourseName = async (query) => {
  try {
    const res = await fetch("http://localhost:8000/hi" + `?data=${query}`);

    const data = await res.json();
    return data;
  } catch (err) {
    return [{}];
    // console.log(err);
  }
};
const SearchBar = ({ setSearching, setSearchResult }) => {
  const [showModel, setShowModel] = useState(false);
  const handleInputChange = async (event) => {
    const result = await getCourseName(event.target.value);
    setSearchResult(result);
    if (event.target.value.length === 0) {
      setSearching(false);
    } else {
      setSearching(true);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="block w-full relative pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 sm:text-sm"
        placeholder="Search..."
        onClick={() => setShowModel(!showModel)}
        onChange={handleInputChange}
        list="options"
        // onSubmit={}
      />
    </div>
  );
};

export default SearchBar;
