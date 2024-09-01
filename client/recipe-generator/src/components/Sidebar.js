import React, { useState } from "react";
import { FaHome, FaUtensils, FaUpload, FaClipboardList, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"} w-64 h-screen bg-#F5DEB3 shadow-lg transition-transform`}>
      <button onClick={toggleSidebar} className="sidebar-toggle absolute top-4 right-4 text-2xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className="sidebar-menu mt-8">
        <Link
          to="/"
          className="sidebar-link flex items-center p-4"
        >
          <FaHome className="mr-3" />
          Generate Recipes
        </Link>
        <Link
          to="/my"
          className="sidebar-link flex items-center p-4"
        >
          <FaUtensils className="mr-3" />
          My Recipes
        </Link>
        <Link
          to="/add"
          className="sidebar-link flex items-center p-4"
        >
          <FaUpload className="mr-3" />
          Add your Recipes
        </Link>
        <Link
          to="/generated-recipes"
          className="sidebar-link flex items-center p-4"
        >
          <FaClipboardList className="mr-3" />
          Generated Recipes
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
