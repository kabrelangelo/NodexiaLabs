import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/animations';

const technologies = [
  {
    name: 'React',
    icon: '/icons/react.svg',
    color: 'text-blue-400'
  },
  {
    name: 'Node.js',
    icon: '/icons/nodejs.svg',
    color: 'text-green-400'
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    color: 'text-blue-600'
  },
  {
    name: 'Python',
    icon: '/icons/python.svg',
    color: 'text-yellow-400'
  },
  {
    name: 'Flutter',
    icon: '/icons/flutter.svg',
    color: 'text-blue-500'
  },
  {
    name: 'AWS',
    icon: '/icons/aws.svg',
    color: 'text-orange-400'
  }
];

const TechStack = () => {
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
            Notre Stack Technologique
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nous utilisons les technologies les plus modernes pour créer des solutions robustes et évolutives
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeIn}
              className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
              </div>
              <span className={`font-medium ${tech.color}`}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
