import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Cloud, Shield, 
  Smartphone, Server, Braces, 
  LineChart, Users, Settings,
  Monitor, Cpu, Network, Lock,
  Bot, Brain
} from 'lucide-react';
import Button from '../components/common/Button';
import { fadeIn, staggerContainer } from '../utils/animations';

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  color: string;
  category: 'development' | 'infrastructure' | 'security' | 'ai';
}

const services: Service[] = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Applications web modernes et performantes adaptées à vos besoins',
    features: [
      'Applications React/Next.js',
      'APIs RESTful',
      'Progressive Web Apps',
      'Sites e-commerce',
      'Interfaces administrateur'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL'],
    color: 'blue',
    category: 'development'
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Apps natives et cross-platform pour iOS et Android',
    features: [
      'Apps React Native',
      'Apps Flutter',
      'UI/UX Mobile',
      'Push Notifications',
      'Offline Mode'
    ],
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    color: 'purple',
    category: 'development'
  },
  {
    icon: Database,
    title: 'Base de données',
    description: 'Solutions de stockage optimisées et sécurisées',
    features: [
      'Conception de schémas',
      'Optimisation des requêtes',
      'Réplication et backup',
      'Migration de données',
      'Monitoring'
    ],
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'ElasticSearch'],
    color: 'orange',
    category: 'infrastructure'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Infrastructure cloud scalable et haute disponibilité',
    features: [
      'Architecture cloud',
      'Containers Docker',
      'Orchestration K8s',
      'Load Balancing',
      'Auto-scaling'
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
    color: 'sky',
    category: 'infrastructure'
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Protection complète de vos systèmes et données',
    features: [
      'Audit de sécurité',
      'Tests d\'intrusion',
      'Chiffrement',
      'Conformité RGPD',
      'Formation'
    ],
    technologies: ['OAuth', 'JWT', 'SSL/TLS', 'WAF', 'IDS/IPS'],
    color: 'red',
    category: 'security'
  },
  {
    icon: Bot,
    title: 'Intelligence Artificielle',
    description: 'Solutions IA pour optimiser vos processus',
    features: [
      'Machine Learning',
      'Analyse prédictive',
      'NLP',
      'Computer Vision',
      'Chatbots'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Keras'],
    color: 'emerald',
    category: 'ai'
  }
];

const categories = [
  { id: 'all', label: 'Tous les services' },
  { id: 'development', label: 'Développement' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'security', label: 'Sécurité' },
  { id: 'ai', label: 'Intelligence Artificielle' }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = services.filter(
    service => activeCategory === 'all' || service.category === activeCategory
  );

  const colorVariants: Record<string, string> = {
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/20',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/20',
    orange: 'bg-orange-500/20 text-orange-400 border-orange-500/20',
    sky: 'bg-sky-500/20 text-sky-400 border-sky-500/20',
    red: 'bg-red-500/20 text-red-400 border-red-500/20',
    emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl my-10 md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nos Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des solutions technologiques innovantes pour propulser votre entreprise vers le futur
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                variants={fadeIn}
                custom={index}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-white/10 border-white/40 text-white'
                    : 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeIn}
                custom={index}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer"
              >
                <div className="h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${colorVariants[service.color]} border flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-semibold mb-3 ${colorVariants[service.color].split(' ')[1]}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-400">
                        <div className={`w-2 h-2 rounded-full ${colorVariants[service.color].split(' ')[0]} mr-3`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-400 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <Button
                      variant="outline"
                      size="sm"
                      to={`/contact?service=${service.title}`}
                      className="w-full justify-center"
                    >
                      Demander un devis
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
              Notre équipe d'experts est là pour vous accompagner.
            </p>
            <Button
              variant="primary"
              size="lg"
              to="/contact"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >
              Nous contacter
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;