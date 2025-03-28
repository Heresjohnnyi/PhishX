import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <FaShieldAlt size={28} />
        <h1 className="text-xl font-bold">PhishX Realtime</h1>
      </div>
    </nav>
  );
};

export default Navbar;
