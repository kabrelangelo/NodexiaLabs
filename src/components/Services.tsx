import React from 'react';
import { Code, Server, Shield, Users, Database, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Développement Web',
    description: 'Applications web sur mesure et sites vitrines professionnels',
    icon: Code
  },
  {
    title: 'Solutions Cloud',
    description: 'Hébergement et services cloud sécurisés',
    icon: Server
  },
  {
    title: 'Cybersécurité',
    description: 'Protection et sécurisation de vos données',
    icon: Shield
  },
  {
    title: 'Formation',
    description: 'Formation professionnelle en informatique',
    icon: Users
  },
  {
    title: 'Gestion de Base de Données',
    description: 'Conception et optimisation de bases de données',
    icon: Database
  },
  {
    title: 'Applications Mobiles',
    description: 'Développement d\'applications Android et iOS',
    icon: Smartphone
  }
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions complètes pour répondre à vos besoins informatiques
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;