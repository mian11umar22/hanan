import React from 'react';
import { motion } from 'framer-motion';
import { portfolioProjects } from '../../data/mock';
import Button from '../ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const PortfolioGrid = () => {
  return (
    <section id="work" className="px-8 md:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-2">
            Featured Work
          </p>
          <div className="flex justify-between items-end">
            <h2 className="text-4xl md:text-5xl font-bold">The Portfolio</h2>
            <a href="#contact" className="hidden md:block text-accent font-medium hover:underline">
              Request Full Portfolio &rarr;
            </a>
          </div>
        </motion.div>
        
        {/* Responsive Grid for 4 projects with staggered animation and hover effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {portfolioProjects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col group p-2 -m-2 rounded-xl transition-all duration-300"
            >
              <div className="bg-[#f0ece1] h-64 rounded-lg overflow-hidden mb-6 flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:shadow-textPrimary/10 transition-all duration-500">
                {/* Image scaling aur sharpness ke liye CSS update kar di gayi hai */}
                <img 
                  src={project.imagePlaceholder} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108 [image-rendering:-webkit-optimize-contrast]"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide broken image icon if image is missing
                  }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
              <p className="text-sm text-textPrimary/70 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="mt-auto">
                <Button href={project.documentLink} variant="primary" className="w-full text-sm">
                  View Copy Document &rarr;
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;