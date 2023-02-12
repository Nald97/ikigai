import React from "react";
import logo from "../../public/abstract.png";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between bg-gray-900 py-8 px-8">
      <div className="flex items-center">
        <div className="mr-2">
          <Image src={logo} alt="logo" className="w-20 h-20"></Image>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">| littlefish</h1>
        </div>
      </div>

      <nav>
        <ul className="flex w-full items-center text-2xl">
          <li className="ml-4">
            <a href="/" className="text-white hover:text-white-bold">
              Home
            </a>
          </li>
          <li className="ml-4">
            <a href="/about" className="text-white hover:text-white-bold">
              About
            </a>
          </li>
          <li className="ml-4">
            <a
              href="/contact"
              className="text-white hover:text-white font-size:5"
            >
              Contact
            </a>
          </li>
          <li className="ml-4">
            <a
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
