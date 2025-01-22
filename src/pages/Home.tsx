import ParallaxHero from '../components/home/ParallaxHero';
import FeaturedServices from '../components/home/FeaturedServices';
import LatestProjects from '../components/home/LatestProjects';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Clock, Code, Database, Shield, Zap, NetworkIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <ParallaxHero />

      {/* Stats Section with Enhanced Animations */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Notre Impact en Chiffres
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '80+', label: 'Clients satisfaits', description: 'Entreprises qui nous font confiance' },
              { icon: Award, value: '100+', label: 'Projets réalisés', description: 'Livrés avec succès' },
              { icon: Clock, value: '5+', label: 'Années d\'expérience', description: 'D\'expertise technique' },
              { icon: NetworkIcon, value: '3+', label: 'Collaborateurs', description: 'Talents passionnés' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="relative p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl backdrop-blur-lg border border-gray-700 group hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300 font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedServices />
      <LatestProjects />
      <Testimonials />

      {/* Innovation Section with Enhanced Content and Animations */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-10" />
          
          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovation & Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre engagement envers l'innovation technologique nous permet de créer des solutions 
              qui transforment les défis en opportunités durables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: 'Technologies Émergentes',
                description: 'Adoption des dernières technologies pour des solutions d\'avant-garde.',
                features: ['IA & Machine Learning', 'Blockchain', 'IoT']
              },
              {
                icon: Shield,
                title: 'Sécurité Maximale',
                description: 'Protection avancée de vos données et systèmes.',
                features: ['Cryptage end-to-end', 'Tests d\'intrusion', 'Conformité RGPD']
              },
              {
                icon: Database,
                title: 'Architecture Scalable',
                description: 'Solutions conçues pour évoluer avec votre entreprise.',
                features: ['Cloud-native', 'Microservices', 'Load balancing']
              },
              {
                icon: Zap,
                title: 'Performance Optimale',
                description: 'Applications rapides et réactives.',
                features: ['Optimisation SEO', 'Cache avancé', 'CDN global']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <item.icon className="h-8 w-8 text-blue-400 mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="flex items-center text-gray-400"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;