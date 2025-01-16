import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2025 Savage Portfolio. Tous droits réservés.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-blue-400 hover:text-blue-500" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
