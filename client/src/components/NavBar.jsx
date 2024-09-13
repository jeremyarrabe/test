import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="w-full bg-gray-100 px-20 h-[80px] flex flex-row justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">Assessment App</h1>
    </nav>
  );
};

export default NavBar;
