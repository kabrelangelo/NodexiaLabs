import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Laptop, Server, Shield, Database, BookAIcon } from 'lucide-react';
import Button from '../common/Button';

const ParallaxHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const features = [
    { icon: Code, label: 'Applications Web', color: 'from-blue-500 to-blue-600' },
    { icon: Laptop, label: 'Applications Mobiles', color: 'from-purple-500 to-purple-600' },
    { icon: Server, label: 'Solutions Cloud', color: 'from-indigo-500 to-indigo-600' },
    { icon: Shield, label: 'Cybersécurité', color: 'from-green-500 to-green-600' },
    { icon: Database, label: 'Base de Données', color: 'from-pink-500 to-pink-600' },
    { icon: BookAIcon, label: 'Formations', color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-indigo-500/30 to-pink-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content Container */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="text-center space-y-12">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-4xl font-bold tracking-tight">
              {/* <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Des Services De Qualités
              </span> */}
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions Numériques Innovantes
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Créons ensemble le futur numérique de votre entreprise avec des solutions 
              sur mesure et innovantes.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="group"
              >
                <div className="relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                  <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                    {feature.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Button
              variant="primary"
              size="lg"
              to="/contact"
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]"
            >
              <div className="relative bg-gray-900 rounded-[10px] p-4 transition-all duration-300 group-hover:bg-opacity-90">
                <span className="relative z-10 flex items-center justify-center text-white font-semibold">
                  Démarrer un projet
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </span>
              </div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/services"
              className="relative overflow-hidden rounded-xl border-2 border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <span className="relative z-10 flex items-center justify-center text-white">
                Découvrir nos services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ParallaxHero;