import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Contactez-moi</h2>
      <p className="text-center mb-6">N'hésitez pas à me contacter via le formulaire ci-dessous.</p>
      
      <div className="max-w-lg mx-auto">
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Nom</label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              placeholder="Votre message"
              rows={4}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
