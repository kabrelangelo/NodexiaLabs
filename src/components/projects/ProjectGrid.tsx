import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { staggerContainer } from '../../utils/animations';

const categories = ['Tous', 'Web', 'Mobile', 'Cloud', 'IA'];

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Premium',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Plateforme e-commerce complète avec système de paiement intégré.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'App Mobile Santé',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Application mobile de suivi de santé et bien-être.',
    technologies: ['React Native', 'Firebase', 'HealthKit']
  },
  {
    title: 'IA Analyse Prédictive',
    category: 'IA',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Système d\'analyse prédictive pour la maintenance industrielle.',
    technologies: ['Python', 'TensorFlow', 'AWS']
  },
  {
    title: 'Cloud Infrastructure',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Infrastructure cloud hautement disponible et scalable.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes']
  }
];

const ProjectGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'Tous' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12">
      {/* Filters */}
      <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Rechercher un projet..."
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectGrid;