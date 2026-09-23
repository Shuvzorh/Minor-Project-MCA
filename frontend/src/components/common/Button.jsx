import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-4 py-2.5 text-sm font-semibold gap-2 shadow-sm',
    lg: 'px-6 py-3.5 text-base font-bold gap-2.5 shadow-md',
  };

  const variantStyles = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-500 shadow-soft hover:shadow-green-glow',
    secondary: 'bg-brand-100 text-brand-800 hover:bg-brand-200 focus:ring-brand-400',
    outline: 'border-2 border-brand-500 text-brand-600 hover:bg-brand-50 focus:ring-brand-500',
    dark: 'bg-surface-dark text-white hover:bg-stone-800 focus:ring-stone-700',
    ghost: 'text-stone-700 hover:bg-stone-100 focus:ring-stone-300',
    danger: 'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500 shadow-sm',
  };

  return (
    <motion.button
      type={type}
      whileHover={disabled ? {} : { y: -2, transition: { duration: 0.15 } }}
      whileTap={disabled ? {} : { y: 0, scale: 0.98, transition: { duration: 0.1 } }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
};

export default Button;
