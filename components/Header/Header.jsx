import React, { useState } from "react";
import logo from "../../public/abstract.png";
import Image from "next/image";
import Form from "../form/Form";
import Link from "next/link";

const MyHeader = ({ onFormOpen }) => {
  return (
    <header className="flex w-full items-center justify-between bg-gray-900 py-4 px-4">
      <div className="flex items-center">
        <div className="mr-2">
          <Image src={logo} alt="logo" className="w-10 h-10"></Image>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">| littlefish</h1>
        </div>
      </div>

      <nav>
        <ul className="flex w-full items-center text-xl">
          <li className="ml-4">
            <Link href="/" className="text-white hover:text-white-bold">
              Home
            </Link>
          </li>
          <li className="ml-4">
            <Link
              href="/characters"
              className="text-white hover:text-white-bold"
            >
              Characters
            </Link>
          </li>
          <li className="ml-4">
            <Link
              href="/ctas"
              className="text-white hover:text-white font-size:5"
            >
              CTAs
            </Link>
          </li>
          <li className="ml-4">
            <button
              onClick={onFormOpen}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Create a CTA
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (formData) => {
    // handle form submit here (e.g. submit to API or update state)
  };

  return (
    <div>
      <MyHeader onFormOpen={() => setShowForm(true)} />
      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <button
              className="z-10 right-5 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowForm(false)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.14 10l3.93-3.93a1 1 0 10-1.41-1.41L10.73 8 6.8 4.07a1 1 0 10-1.41 1.41L9.32 10l-3.93 3.93a1 1 0 001.41 1.41L10.73 12l3.93 3.93a1 1 0 001.41-1.41L12.14 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Form data={null} onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
