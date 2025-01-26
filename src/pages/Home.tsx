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
        <FeaturedServices />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <LatestProjects />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <CTASection />
      </Suspense>
    </div>
  );
};

export default Home;
