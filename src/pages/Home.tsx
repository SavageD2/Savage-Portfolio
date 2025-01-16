import React from "react";

const Home: React.FC = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center p-5">
      <div className="text-center p-8 max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-blue-600 mb-6 animate__animated animate__fadeIn">
          Bienvenue sur mon Portfolio
        </h2>
        <p className="text-xl text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Je suis développeur web spécialisé dans la création de sites et d'applications modernes. Explorez mes projets ci-dessous et contactez-moi pour plus d'informations.
        </p>
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Voir mes Projets
        </a>
      </div>
    </section>
  );
};

export default Home;
