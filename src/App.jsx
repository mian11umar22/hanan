import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import TrustedLogos from './components/sections/TrustedLogos';
import Philosophy from './components/sections/Philosophy';
import PortfolioGrid from './components/sections/PortfolioGrid';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <TrustedLogos />
        <Philosophy />
        <PortfolioGrid />
        <Contact />
      </main>
      <footer className="py-10 px-8 md:px-16 border-t border-textPrimary/10 flex flex-col md:flex-row justify-between items-center text-sm gap-6">
        <div className="font-serif font-bold text-lg text-center md:text-left">
          Abdul Hanan
          <span className="block text-[10px] font-sans font-normal tracking-widest text-textPrimary/60">
            COPYWRITER & STRATEGIST
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs md:text-sm font-medium">
          <a
            href="mailto:abdul.hn2003@gmail.com"
            className="text-textPrimary/80 hover:text-accent transition-colors flex items-center gap-2"
          >
            <span className="text-accent">&#9993;</span> abdul.hn2003@gmail.com
          </a>
          <a
            href="https://wa.me/923334597533"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textPrimary/80 hover:text-accent transition-colors flex items-center gap-2"
          >
            <span className="text-accent">&#9742;</span> +92 333 4597533
          </a>
        </div>

        <div className="text-textPrimary/60 font-medium text-xs md:text-sm text-center md:text-right">
          Clearer Messaging. Greater Impact.
        </div>
      </footer>
    </div>
  );
}

export default App;