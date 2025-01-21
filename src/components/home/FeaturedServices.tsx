import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Shield, Smartphone, Database, Cloud } from 'lucide-react';
import { staggerContainer, fadeIn } from '../../utils/animations';
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
      
      {/* Animated Background Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des solutions innovantes pour propulser votre entreprise vers le futur numérique
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn}
              custom={index}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section with Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <Code className="w-6 h-6 text-blue-400" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Code Qualité</h3>
            <p className="text-gray-400">Standards de codage stricts et revues de code régulières</p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <Server className="w-6 h-6 text-purple-400" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Support 24/7</h3>
            <p className="text-gray-400">Une équipe dédiée pour vous accompagner à chaque étape</p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4"
            >
              <Shield className="w-6 h-6 text-green-400" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Sécurité Maximale</h3>
            <p className="text-gray-400">Protection avancée de vos données et applications</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;