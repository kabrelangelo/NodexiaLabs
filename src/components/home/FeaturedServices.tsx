import { Code, Server, Shield, Smartphone, Database, Cloud } from 'lucide-react';
import ServiceCard from '../services/ServiceCard';

const services = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Applications web sur mesure et sites vitrines modernes avec les dernières technologies.',
    color: 'blue',
    features: [
      'Applications React/Next.js',
      'APIs RESTful',
      'Progressive Web Apps',
      'Sites e-commerce'
    ]
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Applications natives et cross-platform pour iOS et Android.',
    color: 'green',
    features: [
      'Apps React Native',
      'Apps Flutter',
      'UI/UX Mobile',
      'Push Notifications'
    ]
  },
  {
    icon: Cloud,
    title: 'Solutions Cloud',
    description: 'Infrastructure cloud scalable et sécurisée pour votre entreprise.',
    color: 'purple',
    features: [
      'AWS/Azure/GCP',
      'Kubernetes',
      'Docker',
      'CI/CD Pipeline'
    ]
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Protection de vos données et systèmes contre les menaces.',
    color: 'red',
    features: [
      'Audit de sécurité',
      'Tests d\'intrusion',
      'Cryptage des données',
      'Conformité RGPD'
    ]
  },
  {
    icon: Database,
    title: 'Base de données',
    description: 'Conception et optimisation de bases de données performantes.',
    color: 'orange',
    features: [
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'Optimisation'
    ]
  },
  {
    icon: Server,
    title: 'DevOps',
    description: 'Automatisation et déploiement continu de vos applications.',
    color: 'indigo',
    features: [
      'CI/CD',
      'Monitoring',
      'Load Balancing',
      'Backup & Recovery'
    ]
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nos Services
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Des solutions innovantes pour propulser votre entreprise vers le futur numérique
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="transform hover:scale-105 transition-transform duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Bottom Section with Additional Info */}
        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fadeInUp"
          style={{ animationDelay: '500ms' }}
        >
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300">
            <div
              className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-6"
            >
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">Code Qualité</h3>
            <p className="text-gray-400">Standards de codage stricts et revues de code régulières</p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300">
            <div
              className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-6"
            >
              <Server className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">Support 24/7</h3>
            <p className="text-gray-400">Une équipe dédiée pour vous accompagner à chaque étape</p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300">
            <div
              className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-6"
            >
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">Sécurité Maximale</h3>
            <p className="text-gray-400">Protection avancée de vos données et applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
