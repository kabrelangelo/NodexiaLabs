import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Rocket,
  Code, Heart, Shield, Zap, ArrowRight,
  Brain
} from 'lucide-react';
import Button from '../components/common/Button';
import { fadeIn, staggerContainer } from '../utils/animations';

const stats = [
  { icon: Users, value: '70+', label: 'Clients Satisfaits' },
  { icon: Target, value: '100+', label: 'Projets Réalisés' },
  { icon: Award, value: '5+', label: 'Années d\'Expérience' },
  { icon: Brain, value: '3+', label: 'Collaborateurs' }
];

const values = [
  {
    icon: Code,
    title: 'Excellence Technique',
    description: 'Nous utilisons les dernières technologies et les meilleures pratiques pour créer des solutions robustes et évolutives.'
  },
  {
    icon: Heart,
    title: 'Satisfaction Client',
    description: 'Notre priorité est de dépasser les attentes de nos clients en offrant un service personnalisé et de qualité.'
  },
  {
    icon: Shield,
    title: 'Sécurité & Fiabilité',
    description: 'La sécurité et la confidentialité de vos données sont au cœur de notre approche de développement.'
  },
  {
    icon: Zap,
    title: 'Innovation Continue',
    description: 'Nous restons à la pointe de l\'innovation pour vous offrir les solutions les plus performantes.'
  }
];

const team = [
  {
    name: 'Jean Dupont',
    role: 'CEO & Fondateur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800',
    description: '15 ans d\'expérience en développement et gestion de projets IT.',
    links: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Marie Martin',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800',
    description: 'Experte en architecture cloud et développement full-stack.',
    links: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Lucas Bernard',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?fit=crop&w=800',
    description: 'Spécialiste React et Node.js avec 8 ans d\'expérience.',
    links: { linkedin: '#', twitter: '#' }
  }
];

const About = () => {
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
            <h1 className="text-5xl mt-10 md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                À Propos de Nous
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez l'équipe passionnée derrière Nodexia Labs et notre engagement 
              envers l'excellence technologique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                custom={index}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Nos Valeurs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des principes qui guident chacune de nos actions et décisions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeIn}
                custom={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Notre Équipe
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des experts passionnés par la technologie et l'innovation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeIn}
                custom={index}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-400 mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-4">{member.description}</p>
                    <div className="flex gap-4">
                      <a href={member.links.linkedin} className="text-gray-400 hover:text-white transition-colors">
                        LinkedIn
                      </a>
                      <a href={member.links.twitter} className="text-gray-400 hover:text-white transition-colors">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
            </div>
            <div className="relative p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Prêt à Collaborer ?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Discutons de votre projet et voyons comment nous pouvons vous aider à atteindre vos objectifs.
              </p>
              <Button
                variant="primary"
                size="lg"
                to="/contact"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              >
                Contactez-nous
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;