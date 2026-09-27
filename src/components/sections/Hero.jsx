import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
// Yahan humne image import ki hai. Make sure name aur extension match kare
import clientImage from "../../assets/abdul-hanan.jpeg";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-24 gap-12 max-w-7xl mx-auto">
      <motion.div 
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-accent text-sm font-bold tracking-widest uppercase">
          Senior Freelance Copywriter
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Turning Complex Humanitarian Missions Into Clear, Human Messaging.
        </h1>
        <p className="text-lg text-textPrimary/80 pb-4">
          Abdul Hanan - Senior Copywriter & Strategist.
        </p>
        <div>
          <Button href="#contact">Book a Strategy Call &rarr;</Button>
        </div>
      </motion.div>
      
      <motion.div 
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 bg-[#E8E4D9] rounded-t-full overflow-hidden border-b-8 border-accent flex items-center justify-center">
           {/* Yahan placeholder ki jagah real image lagayi hai */}
           <img 
             src={clientImage} 
             alt="Abdul Hanan" 
             className="w-full h-full object-cover object-top" 
           />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;