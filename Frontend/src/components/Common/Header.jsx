import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    // <Header className="border-b border-gray-200">
    <header className="border-b border-gray-200">
      <Topbar />
      <Navbar />
    </header>

    // </Header>s
  );
};

export default Header;
