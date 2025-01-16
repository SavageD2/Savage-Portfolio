import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="projet1.jpg" alt="Projet 1" className="w-full h-48 object-cover rounded-lg mb-4"/>
          <h3 className="text-2xl font-semibold mb-2">To-Do List</h3>
          <p className="text-gray-700 mb-4">Projet To-Do List réalisé avec React</p>
          <a href="https://savaged2.github.io/TodoList/" className="text-blue-600 hover:underline">Voir sur GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
