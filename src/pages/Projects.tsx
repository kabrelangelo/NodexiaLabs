import { useState } from 'react';
import { ExternalLink, Code, Database, Server, Shield, Brain } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
  features: string[];
}

const categories = [
  { id: 'all', name: 'Tous les projets' },
  { id: 'web', name: 'Applications Web' },
  { id: 'mobile', name: 'Applications Mobiles' },
  { id: 'ai', name: 'Intelligence Artificielle' },
  { id: 'cloud', name: 'Cloud & DevOps' },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Système de Gestion Hospitalière",
    description: "Une application web complète pour la gestion des patients, des rendez-vous et des dossiers médicaux.",
    image: "/images/projects/hospital.jpg",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://hospital.prentisoft.com",
    features: [
      "Gestion des rendez-vous en temps réel",
      "Dossiers médicaux électroniques",
      "Tableau de bord analytique",
      "Interface responsive"
    ]
  },
  {
    id: 2,
    title: "Application Mobile E-commerce",
    description: "Une application mobile de commerce électronique avec paiement intégré et suivi des commandes.",
    image: "/images/projects/ecommerce.jpg",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Stripe", "Redux"],
    link: "https://ecommerce.prentisoft.com",
    features: [
      "Paiement sécurisé",
      "Suivi des commandes en temps réel",
      "Catalogue de produits dynamique",
      "Notifications push"
    ]
  },
  {
    id: 3,
    title: "Système de Reconnaissance Faciale",
    description: "Un système de reconnaissance faciale basé sur l'IA pour la sécurité et le contrôle d'accès.",
    image: "/images/projects/ai.jpg",
    category: "ai",
    technologies: ["Python", "TensorFlow", "OpenCV", "Docker"],
    link: "https://ai.prentisoft.com",
    features: [
      "Détection en temps réel",
      "Haute précision",
      "Interface web de gestion",
      "API REST"
    ]
  },
  {
    id: 4,
    title: "Infrastructure Cloud DevOps",
    description: "Une infrastructure cloud automatisée pour le déploiement continu d'applications.",
    image: "/images/projects/cloud.jpg",
    category: "cloud",
    technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins"],
    link: "https://cloud.prentisoft.com",
    features: [
      "Déploiement automatisé",
      "Monitoring en temps réel",
      "Scalabilité automatique",
      "Sécurité renforcée"
    ]
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'web':
      return Code;
    case 'mobile':
      return Database;
    case 'ai':
      return Brain;
    case 'cloud':
      return Server;
    default:
      return Shield;
  }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center animate-fadeIn"
          >
            <h1 className="text-5xl mt-10 md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nos Projets
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mobile:text-lg pc:text-xl">
              Découvrez nos réalisations et projets innovants dans différents domaines technologiques.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap justify-center gap-4 animate-fadeIn"
          >
            {categories.map((category, index) => {
              const Icon = getCategoryIcon(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="relative group animate-fadeInUp"
                style={{animationDelay: `${index * 200}ms`}}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Project Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>Voir le projet</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center animate-fadeInUp"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Discutons de votre projet et voyons comment nous pouvons vous aider à le réaliser.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
