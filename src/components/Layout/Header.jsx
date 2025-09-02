import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            My App
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="hover:text-blue-200 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;