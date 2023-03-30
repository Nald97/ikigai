import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
     
    </div>
  );
};

export default Layout;
