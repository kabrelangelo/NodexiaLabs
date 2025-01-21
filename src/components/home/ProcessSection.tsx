import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/animations';
import { Lightbulb, Code, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Découverte',
    description: 'Nous analysons vos besoins et objectifs pour proposer la meilleure solution.',
    color: 'text-yellow-400'
  },
  {
    icon: Code,
    title: 'Développement',
    description: 'Nous développons votre solution avec les meilleures pratiques du marché.',
    color: 'text-blue-400'
  },
  {
    icon: CheckCircle,
    title: 'Tests',
    description: 'Nous testons rigoureusement chaque fonctionnalité pour garantir la qualité.',
    color: 'text-green-400'
  },
  {
    icon: Rocket,
    title: 'Lancement',
    description: 'Nous déployons votre solution et assurons un suivi continu.',
    color: 'text-purple-400'
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Notre Processus
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une approche méthodique pour transformer vos idées en réalité
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeIn}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 h-full hover:bg-white/10 transition-colors duration-300">
                <step.icon className={`w-12 h-12 ${step.color} mb-6`} />
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent transform translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
