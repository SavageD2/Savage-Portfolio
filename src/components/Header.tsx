import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">Savage Portfolio</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:underline hover:text-gray-200">
            Accueil
          </Link>
          <Link to="/projects" className="hover:underline hover:text-gray-200">
            Projets
          </Link>
          <Link to="/contact" className="hover:underline hover:text-gray-200">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
