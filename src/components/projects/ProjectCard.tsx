import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, description }) => {
  return (
    <Link to="/projets" className="block">
      <motion.div
        variants={fadeIn}
        whileHover={{ scale: 1.02 }}
        className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
      >
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500 rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;