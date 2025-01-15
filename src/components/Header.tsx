import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Mon Portfolio</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Accueil
          </Link>
          <Link to="/projects" className="hover:underline">
            Projets
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
