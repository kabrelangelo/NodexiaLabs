import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Menu, X } from 'lucide-react';
import Button from '../common/Button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600 text-bold' : 'text-gray-900';
  };

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    // { path: '/projets', label: 'Projets' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'from-blue-400 to-blue-600 shadow-xl' : 'shadow-2xl from-blue-400 to-blue-600 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            {/* <Monitor className="h-8 w-8 text-blue-600" /> */}
            <img src="/images/nodexia.png" alt="logo" className="h-16 w-auto" />
            {/* <span className="text-2xl font-bold text-gray-900">Nodexia Labs</span> */}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-100 hover:text-blue-300 transition-colors ${
                  location.pathname === link.path ? 'text-blue-300 font-bold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
            <Button className=' bg-gradient-to-r from-blue-700 via-purple-700 to-pink-400' size="sm">
              Contactez-nous
            </Button>
            </Link>
           
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-100"
          >
            {isOpen ? <X className="h-10 w-10" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 text-gray-100 hover:text-blue-600 transition-colors ${
                    location.pathname === link.path ? 'text-blue-600 font-medium' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link to={"/contact"}  onClick={() => setIsOpen(false)}>
                <Button variant="primary" size="sm" 
                className=" bg-gradient-to-r from-blue-700 via-purple-700 to-pink-400 w-full">
                  Contactez-nous
                </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;