import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/FirestoreAPI";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    getAllUsers(dispatch, event.target.value);
  };

  return (
    <form onSubmit={handleSearchChange} className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded py-2 px-4 bg-white text-gray-700 focus:outline-none"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-2 mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
