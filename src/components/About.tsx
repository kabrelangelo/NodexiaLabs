import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              À Propos de Prentisoft
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Basée à Bafoussam, Prentisoft est une entreprise leader dans le domaine des services informatiques au Cameroun. Notre mission est d'accompagner les entreprises dans leur transformation numérique avec des solutions innovantes et sur mesure.
            </p>

            <div className="mt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">Plus de 5 ans d'expérience</span>
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">Équipe d'experts qualifiés</span>
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">Solutions personnalisées</span>
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">Support technique 24/7</span>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="L'équipe Prentisoft au travail"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;