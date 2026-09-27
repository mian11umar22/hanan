import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, href, variant = 'primary', className = '', type = 'submit' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium inline-flex items-center justify-center cursor-pointer select-none transition-all duration-300";
  const variants = {
    primary: "bg-accent text-white hover:bg-[#a25a3a] shadow-sm hover:shadow-lg hover:shadow-accent/30",
    secondary: "border-2 border-textPrimary text-textPrimary hover:bg-textPrimary hover:text-white shadow-sm hover:shadow-md"
  };

  const isInternal = href && href.startsWith('#');

  if (href) {
    return (
      <motion.a
        href={href}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;