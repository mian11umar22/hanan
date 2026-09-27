import React from 'react';
import { motion } from 'framer-motion';
import { philosophySteps } from '../../data/mock';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Philosophy = () => {
  return (
    <section id="process" className="px-8 md:px-16 py-24 bg-[#F2EFE9]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <motion.div 
          className="md:w-1/3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">
            My Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Strategy-Driven Storytelling for Greater Impact.
          </h2>
          <p className="text-textPrimary/80">
            I help mission-driven organizations turn their impact into clear, compelling messages that inspire action, build trust, and drive support.
          </p>
        </motion.div>
        
        <motion.div 
          className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {philosophySteps.map((step) => (
            <motion.div 
              key={step.id} 
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col group cursor-default"
            >
              <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center text-accent text-xl font-medium mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                0{step.id}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">{step.title}</h3>
              <p className="text-sm text-textPrimary/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;