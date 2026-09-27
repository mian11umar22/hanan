import React from 'react';
import { motion } from 'framer-motion';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="px-8 md:px-16 py-24 bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <motion.div 
          className="md:w-1/2 pr-0 md:pr-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to elevate your messaging?
          </h2>
          <p className="text-textPrimary/80 mb-10">
            Let's talk about your mission, your audience, and how we can turn your impact into powerful words.
          </p>
          
          <div className="flex flex-col gap-4 text-sm font-medium text-textPrimary/80">
            <a 
              href="mailto:abdul.hn2003@gmail.com" 
              className="flex items-center gap-3 hover:text-accent transition-colors w-fit"
            >
              <span className="text-accent font-bold">&#9993;</span> abdul.hn2003@gmail.com
            </a>
            <a 
              href="https://wa.me/923334597533" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 hover:text-accent transition-colors w-fit"
            >
              <span className="text-accent font-bold">&#9742;</span> +92 333 4597533
            </a>
            <p className="flex items-center gap-3">
              <span className="text-accent font-bold">&#127760;</span> Available Worldwide
            </p>
            <p className="flex items-center gap-3">
              <span className="text-accent font-bold">&#128338;</span> Response within 24 hours
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Input label="Your Name *" placeholder="John Doe" />
              <Input label="Email Address *" placeholder="you@organization.org" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Input label="Organization" placeholder="Your organization name" />
              <div className="flex flex-col mb-6">
                <label className="text-xs font-bold tracking-widest uppercase text-textPrimary/70 mb-2">
                  How can I help?
                </label>
                <select className="w-full border-b border-textPrimary/30 bg-transparent py-2 outline-none focus:border-accent text-sm">
                  <option>Select an option</option>
                  <option>Ad Copy</option>
                  <option>Landing Page</option>
                  <option>Email Campaigns</option>
                  <option>Full Strategy</option>
                </select>
              </div>
            </div>
            <Button variant="primary" className="w-full md:w-1/2 mt-4">
              Send Message &rarr;
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;