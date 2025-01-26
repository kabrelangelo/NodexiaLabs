import { lazy, Suspense } from 'react';
import { Award, Users, Clock, NetworkIcon, Code, Database, Shield, Zap } from 'lucide-react';

// Lazy load heavy components
const ParallaxHero = lazy(() => import('../components/home/ParallaxHero'));
const FeaturedServices = lazy(() => import('../components/home/FeaturedServices'));
const LatestProjects = lazy(() => import('../components/home/LatestProjects'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const CTASection = lazy(() => import('../components/home/CTASection'));

const LoadingPlaceholder = () => (
  <div className="h-96 bg-gray-800 animate-pulse" />
);

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Suspense fallback={<LoadingPlaceholder />}>
        <ParallaxHero />
      </Suspense>

      {/* Stats Section with Optimized Animations */}
      <section className="py-12 md:py-24 relative overflow-hidden">
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Notre Impact en Chiffres
    </h2>
    
    <div className="grid grid-cols-1 mx-6 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
      {[
        { icon: Users, value: '80+', label: 'Clients satisfaits', description: 'Entreprises qui nous font confiance' },
        { icon: Award, value: '100+', label: 'Projets réalisés', description: 'Livrés avec succès' },
        { icon: Clock, value: '5+', label: 'Années d\'expérience', description: 'D\'expertise technique' },
        { icon: NetworkIcon, value: '3+', label: 'Collaborateurs', description: 'Talents passionnés' }
      ].map((stat, index) => (
        <div
          key={index}
          className="relative p-4 md:p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl backdrop-blur-lg border border-gray-700 group hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-400 mx-auto mb-2 md:mb-4 transform group-hover:scale-110 transition-transform duration-300" />
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2 text-center">
            {stat.value}
          </div>
          <div className="text-gray-300 font-medium mb-1 md:mb-2 text-center text-sm md:text-base">
            {stat.label}
          </div>
          <div className="text-gray-400 text-center text-xs md:text-sm leading-tight md:leading-normal">
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <Suspense fallback={<LoadingPlaceholder />}>
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <FeaturedServices />
      </Suspense>
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <LatestProjects />
      </Suspense>
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <Testimonials />
      </Suspense>

      {/* Innovation Section with Optimized Content */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovation & Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre engagement envers l'innovation technologique nous permet de créer des solutions 
              qui transforment les défis en opportunités durables.
            </p>
          </div>

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
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105"
              >
                <item.icon className="h-8 w-8 text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-400"
                    >
                      <span className="mr-2 text-blue-400">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Suspense fallback={<LoadingPlaceholder />}>
        <CTASection />
      </Suspense>
    </div>
  );
};

export default Home;
