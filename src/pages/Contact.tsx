import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock,
  Send, CheckCircle, AlertCircle
} from 'lucide-react';
import Button from '../components/common/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};

const services = [
  'Développement Web',
  'Applications Mobiles',
  'Cloud Computing',
  'Cybersécurité',
  'Base de données',
  'Intelligence Artificielle'
];

const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphone',
    details: ['+237 657 890 992', '+237 657 581 214'],
    color: 'blue'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@nodexialabs.com', 'support@nodexialabs.com'],
    color: 'purple'
  },
  {
    icon: MapPin,
    title: 'Adresse',
    details: ['Douala, Cameroun', 'Bali'],
    color: 'pink'
  },
  {
    icon: Clock,
    title: 'Horaires',
    details: ['Lun - Ven: 8h - 18h', 'Sam: 9h - 15h'],
    color: 'emerald'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-7xl my-6 mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contactez-nous
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Une question ? Un projet ? N'hésitez pas à nous contacter.
              Notre équipe est là pour vous répondre.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-${info.color}-500/20 flex items-center justify-center mb-4`}>
                  <info.icon className={`w-6 h-6 text-${info.color}-400`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="jean@example.com"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-gray-900">Sélectionnez un service</option>
                    {services.map(service => (
                      <option key={service} value={service} className="bg-gray-900">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative overflow-hidden group ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="flex items-center">
                    {isSubmitting ? (
                      <>
                        <div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2 animate-spin"
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>

                {/* Status Messages */}
                {submitStatus && (
                  <div
                    className={`flex items-center ${
                      submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message envoyé avec succès !
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Une erreur est survenue.
                      </>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63699.93517674912!2d10.3837146!3d5.4776297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105fcf30e0d90585%3A0x24e897d8e19d11!2sBafoussam!5e0!3m2!1sfr!2scm!4v1640160000000!5m2!1sfr!2scm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
