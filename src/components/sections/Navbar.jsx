import React from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../../data/mock';
import Button from '../ui/Button';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center py-6 px-8 md:px-16 bg-primary/95 backdrop-blur-sm sticky top-0 z-50 border-b border-textPrimary/5"
    >
      <a href="#home" className="font-serif text-2xl font-bold text-textPrimary group transition-opacity hover:opacity-90">
        Abdul Hanan
        <span className="block text-xs font-sans font-normal tracking-widest text-accent mt-1">
          COPYWRITER & STRATEGIST
        </span>
      </a>
      
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-accent transition-colors py-1">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <Button href="#contact" variant="primary" className="hidden md:inline-flex text-sm">
        Book a Strategy Call &rarr;
      </Button>
    </motion.nav>
  );
};

export default Navbar;