import { useRef } from 'react';
import { Code, Laptop, Server, Shield, Database, BookAIcon, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const ParallaxHero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const features = [
    { icon: Code, label: 'Applications Web', color: 'from-blue-500 to-blue-600' },
    { icon: Laptop, label: 'Applications Mobiles', color: 'from-purple-500 to-purple-600' },
    { icon: Server, label: 'Solutions Cloud', color: 'from-indigo-500 to-indigo-600' },
    { icon: Shield, label: 'Cybersécurité', color: 'from-green-500 to-green-600' },
    { icon: Database, label: 'Base de Données', color: 'from-pink-500 to-pink-600' },
    { icon: BookAIcon, label: 'Formations', color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-12">
          {/* Main Title */}
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-4xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions Numériques Innovantes
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Créons ensemble le futur numérique de votre entreprise avec des solutions 
              sur mesure et innovantes.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 max-w-5xl mx-auto animate-fadeInUp">
            {features.map((feature, index) => (
              <div
                key={feature.label}
                className="group"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                  <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                    {feature.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <Button
              variant="primary"
              size="lg"
              to="/contact"
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]"
            >
              <div className="relative bg-gray-900 rounded-[10px] p-4 transition-all duration-300 group-hover:bg-opacity-90">
                <span className="relative z-10 flex items-center justify-center text-white font-semibold">
                  Démarrer un projet
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/services"
              className="relative overflow-hidden rounded-xl border-2 border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <span className="relative z-10 flex items-center justify-center text-white">
                Découvrir nos services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;
