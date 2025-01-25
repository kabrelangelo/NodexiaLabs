import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
  onClick?: () => void;
  className?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset'; // Ajout de la propriété type
  disabled?: boolean; // Ajout de la propriété disabled
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withIcon = false,
  onClick,
  className = '',
  to,
  type = 'button', // Valeur par défaut pour la propriété type
  disabled = false // Valeur par défaut pour la propriété disabled
}) => {
  const baseStyles = 'rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    secondary: 'bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
        {withIcon && <ArrowRight className="ml-2 h-5 w-5" />}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={buttonClasses}
      type={type} // Utilisation de la propriété type
      disabled={disabled} // Utilisation de la propriété disabled
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 h-5 w-5" />}
    </motion.button>
  );
};

export default Button;