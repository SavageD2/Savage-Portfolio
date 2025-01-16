import React from "react";

const Home: React.FC = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Bienvenue sur mon Portfolio
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Découvrez mes projets et contactez-moi pour plus d'informations.
        </p>
        <a
  href="/projects"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
>
  Voir mes Projets
</a>
      </div>
    </section>
  );
};

export default Home;
