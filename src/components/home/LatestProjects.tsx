import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/animations';
import ProjectCard from '../projects/ProjectCard';

const projects = [
  {
    title: 'Site Web de E-commerce',
    category: 'Web Development',
    image: '/images/commerce.jpeg',
    description: 'Plateforme e-commerce complète avec système de paiement intégré.'
  },
  {
    title: 'App Mobile Santé',
    category: 'Mobile',
    image: '/images/sante.avif',
    description: 'Application mobile de suivi de santé et bien-être.'
  },
  {
    title: 'Site vitrine',
    category: 'Web Application',
    image: '/images/vitrine.webp',
    description: 'Site web vitrine pour entreprise de web marketing.'
  }
];

const LatestProjects = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nos Derniers Projets
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations récentes et laissez-vous inspirer
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestProjects;