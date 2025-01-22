import { Link } from 'react-router-dom';
import { Monitor, Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <Monitor className="h-8 w-8 text-blue-500" /> */}
              <Link to={"/"} className='' >
              <img src='/images/nodexia.png' className='h-8' />
              </Link>
              {<span className="text-2xl font-bold text-white">Nodexia Labs</span>}
            </div>
            <p className="text-gray-400">
              Solutions informatiques innovantes pour votre transformation numérique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-blue-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projets" className="hover:text-blue-500 transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-blue-500 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web" className="hover:text-blue-500 transition-colors">
                  Développement Web
                </Link>
              </li>
              <li>
                <Link to="/services/mobile" className="hover:text-blue-500 transition-colors">
                  Applications Mobiles
                </Link>
              </li>
              <li>
                <Link to="/services/cloud" className="hover:text-blue-500 transition-colors">
                  Solutions Cloud
                </Link>
              </li>
              <li>
                <Link to="/services/securite" className="hover:text-blue-500 transition-colors">
                  Cybersécurité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                <span>Bali, Douala, Cameroun</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+237 697 29 61 99</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>contact@nodexialabs.cm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Nodexia Labs. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;