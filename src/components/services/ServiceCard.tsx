import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight, Check } from 'lucide-react';
import { fadeIn } from '../../utils/animations';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  features: string[];
}

const colorVariants = {
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/20',
  green: 'bg-green-500/20 text-green-400 border-green-500/20',
  purple: 'bg-purple-500/20 text-purple-400 border-purple-500/20',
  red: 'bg-red-500/20 text-red-400 border-red-500/20',
  orange: 'bg-orange-500/20 text-orange-400 border-orange-500/20',
  indigo: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/20'
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, color, features }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="/services" className="block h-full">
      <motion.div
        variants={fadeIn}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative h-full bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 to-gray-900/95 opacity-95 group-hover:opacity-100 transition-opacity" />

        {/* Content */}
        <div className="relative p-6 h-full flex flex-col">
          {/* Icon */}
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
            className={`w-14 h-14 rounded-xl ${colorVariants[color]} border flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
          >
            <Icon className="h-7 w-7" />
          </motion.div>

          {/* Title & Description */}
          <motion.h3
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`text-xl font-semibold mb-3 ${colorVariants[color].split(' ')[1]} group-hover:text-white transition-colors`}
          >
            {title}
          </motion.h3>
          <p className="text-gray-400 mb-6 flex-grow">
            {description}
          </p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3 mb-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-gray-400"
              >
                <Check className={`w-4 h-4 mr-2 ${colorVariants[color].split(' ')[1]}`} />
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* Learn More Link */}
          <motion.div
            animate={isHovered ? { x: 5 } : { x: 0 }}
            className={`flex items-center ${colorVariants[color].split(' ')[1]} group-hover:text-white transition-colors mt-auto`}
          >
            <span className="mr-2">En savoir plus</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            className={`absolute top-0 right-0 w-32 h-32 rounded-full transform translate-x-16 -translate-y-16 ${colorVariants[color].split(' ')[0]}`}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            className={`absolute bottom-0 left-0 w-24 h-24 rounded-full transform -translate-x-12 translate-y-12 ${colorVariants[color].split(' ')[0]}`}
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;