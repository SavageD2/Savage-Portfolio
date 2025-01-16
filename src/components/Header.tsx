import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center p-5">
        {/* Alignement du titre à gauche */}
        <h1 className="text-3xl font-bold tracking-wide text-left">Savage Portfolio</h1>
        
        {/* Navigation avec icônes */}
        <div className="space-x-8 flex items-center">
          <Link to="/" className="flex items-center space-x-2 hover:underline hover:text-gray-200">
            <FaHome /> <span>Accueil</span>
          </Link>
          <Link to="/projects" className="flex items-center space-x-2 hover:underline hover:text-gray-200">
            <FaProjectDiagram /> <span>Projets</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-2 hover:underline hover:text-gray-200">
            <FaEnvelope /> <span>Contact</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
