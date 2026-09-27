import React from 'react';
import { motion } from 'framer-motion';

const TrustedLogos = () => {
  return (
    <section className="py-12 border-y border-textPrimary/10 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-center text-xs font-bold tracking-widest uppercase text-textPrimary/60 mb-8">
          Trusted by global nonprofits & humanitarian organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale px-4">
          <span className="font-serif text-xl font-bold">ICNA Relief</span>
          <span className="font-serif text-xl font-bold">Action For Humanity</span>
          <span className="font-serif text-xl font-bold">World Vision</span>
          <span className="font-serif text-xl font-bold">Save the Children</span>
          <span className="font-serif text-xl font-bold">OXFAM</span>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedLogos;