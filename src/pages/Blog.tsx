import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag,
  ChevronRight, Search, Code,
  Database, Shield, Brain, Server
} from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const categories = [
  { id: 'all', name: 'Tous les articles', icon: Tag },
  { id: 'web', name: 'Développement Web', icon: Code },
  { id: 'mobile', name: 'Applications Mobiles', icon: Database },
  { id: 'security', name: 'Cybersécurité', icon: Shield },
  { id: 'ai', name: 'Intelligence Artificielle', icon: Brain },
  { id: 'cloud', name: 'Cloud Computing', icon: Server },
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Les Meilleures Pratiques de Développement Web en 2024",
    excerpt: "Découvrez les tendances et les meilleures pratiques à suivre pour le développement web moderne.",
    content: "Lorem ipsum dolor sit amet...",
    image: "/images/blog/web-dev.jpg",
    author: "Jean Dupont",
    date: "22 Dec 2024",
    readTime: "5 min",
    category: "web",
    tags: ["React", "Next.js", "Performance", "SEO"]
  },
  {
    id: 2,
    title: "Sécuriser son Application avec l'Intelligence Artificielle",
    excerpt: "Comment utiliser l'IA pour détecter et prévenir les menaces de sécurité dans vos applications.",
    content: "Lorem ipsum dolor sit amet...",
    image: "/images/blog/ai-security.jpg",
    author: "Marie Martin",
    date: "20 Dec 2024",
    readTime: "8 min",
    category: "security",
    tags: ["IA", "Sécurité", "Machine Learning", "Cybersécurité"]
  },
  {
    id: 3,
    title: "Guide Complet du Développement Mobile Cross-Platform",
    excerpt: "Comparaison des différentes approches pour le développement d'applications mobiles multi-plateformes.",
    content: "Lorem ipsum dolor sit amet...",
    image: "/images/blog/mobile-dev.jpg",
    author: "Paul Dubois",
    date: "18 Dec 2024",
    readTime: "10 min",
    category: "mobile",
    tags: ["React Native", "Flutter", "Mobile", "Cross-Platform"]
  },
  {
    id: 4,
    title: "L'Avenir du Cloud Computing : Tendances et Innovations",
    excerpt: "Les dernières innovations et tendances qui façonnent l'avenir du cloud computing.",
    content: "Lorem ipsum dolor sit amet...",
    image: "/images/blog/cloud.jpg",
    author: "Sophie Bernard",
    date: "15 Dec 2024",
    readTime: "7 min",
    category: "cloud",
    tags: ["Cloud", "AWS", "Azure", "DevOps"]
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl mt-10 md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Blog & Actualités
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez nos derniers articles, tutoriels et actualités sur les technologies innovantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-12"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Category Filter */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  variants={fadeIn}
                  custom={index}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={fadeIn}
                custom={index}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 h-full">
                  {/* Post Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Title and Excerpt */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Read More */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{post.author}</span>
                      </div>
                      <a
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>Lire plus</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Restez informé
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                >
                  S'abonner
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;