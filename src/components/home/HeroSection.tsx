import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import HeroImage from '../../../public/images/vitrine.avif'; // Import static image

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-900/90" />
        <img 
          src={HeroImage} 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div
          className="text-center text-white animate-fadeIn"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fadeIn"
            style={{ animationDelay: '200ms' }}
          >
            Innovez avec
            <span className="text-blue-300"> Prentisoft</span>
          </h1>
          
          <p
            className="mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fadeIn"
            style={{ animationDelay: '400ms' }}
          >
            Transformez votre entreprise avec des solutions numériques sur mesure.
            Expertise locale, vision globale.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn"
            style={{ animationDelay: '600ms' }}
          >
            <Button
              variant="primary"
              size="lg"
              withIcon
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Découvrir nos services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Contactez-nous
            </Button>
          </div>
        </div>

        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white animate-fadeInUp"
          style={{ animationDelay: '800ms' }}
        >
          <div>
            <div className="text-4xl font-bold">100+</div>
            <div className="mt-2 text-blue-200">Projets Réalisés</div>
          </div>
          <div>
            <div className="text-4xl font-bold">50+</div>
            <div className="mt-2 text-blue-200">Clients Satisfaits</div>
          </div>
          <div>
            <div className="text-4xl font-bold">5+</div>
            <div className="mt-2 text-blue-200">Années d'Expérience</div>
          </div>
          <div>
            <div className="text-4xl font-bold">24/7</div>
            <div className="mt-2 text-blue-200">Support Client</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
        
      >
        
          <ArrowRight className="h-6 w-6 transform rotate-90 text-white" />
        
      </div>
    </div>
  );
};

export default HeroSection;
