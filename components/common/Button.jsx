import React from "react";

export default function Button({ title, onClick }) {
  return (
    <button
      className="w-56 h-8 bg-whitesmoke border-2 border-blue-900 text-blue-700 rounded-full font-semibold text-sm my-2 hover:bg-gray-300 hover:border-blue-700 hover:text-blue-700"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
