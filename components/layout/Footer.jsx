import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4 px-4">
      <div className="text-center text-white text-sm">
        <p>
          &copy; {new Date().getFullYear()} littlefish. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
