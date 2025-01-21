import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/animations';
import { Shield, Clock, Users, Zap, Heart, Target } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Expertise Technique',
    description: 'Une équipe d\'experts passionnés par les dernières technologies.',
    color: 'text-blue-400'
  },
  {
    icon: Clock,
    title: 'Livraison Rapide',
    description: 'Des délais optimisés pour une mise sur le marché rapide.',
    color: 'text-green-400'
  },
  {
    icon: Users,
    title: 'Support Dédié',
    description: 'Une équipe à votre écoute pour vous accompagner.',
    color: 'text-purple-400'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Des solutions optimisées pour des performances maximales.',
    color: 'text-yellow-400'
  },
  {
    icon: Heart,
    title: 'Satisfaction Client',
    description: 'Votre satisfaction est notre priorité absolue.',
    color: 'text-pink-400'
  },
  {
    icon: Target,
    title: 'Solutions Sur Mesure',
    description: 'Des solutions adaptées à vos besoins spécifiques.',
    color: 'text-red-400'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pourquoi Nous Choisir
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez ce qui fait notre différence et pourquoi nos clients nous font confiance
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <reason.icon className={`w-8 h-8 ${reason.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-semibold text-white ml-4">{reason.title}</h3>
              </div>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
