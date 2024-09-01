import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
  };

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="navbar w-full bg-#F5DEB3 text-brown flex items-center justify-between px-6 py-4 shadow-md">
      <div className="navbar-brand text-lg font-bold text-brown cursor-pointer" onClick={goToHomePage}>
        Smart Recipe Generator
      </div>
      <div className="navbar-user relative flex items-center">
        <FaUserCircle size={28} onClick={toggleDropdown} />
        <div className={`dropdown-menu ${dropdownVisible ? 'show' : ''} absolute right-0 mt-2`}>
          <div className="dropdown-item px-4 py-2">
            {user ? (
              <>
                <p className="font-bold">{user.name}</p>
                <p>{user.email}</p>
              </>
            ) : (
              <p className="font-bold">User not logged in</p>
            )}
          </div>
          {user && (
            <button
              onClick={handleLogout}
              className="dropdown-item px-4 py-2 text-red-400 hover:bg-orange-200 w-full text-left"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;