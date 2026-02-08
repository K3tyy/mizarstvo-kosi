
import React from 'react';
import Button from './Button';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="domov" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="slike/sivakuhinjaglavna.jpg" 
          alt="Mizarska delavnica in pohištvo" 
          className="w-full h-full object-cover animate-pulse-slow scale-105"
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wood-950/90 via-wood-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-950/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Line */}
      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-white/10 hidden md:block z-10"></div>
      <div className="absolute right-8 md:right-12 top-0 bottom-0 w-px bg-white/10 hidden md:block z-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl text-white">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-wood-300"></span>
            <span className="text-wood-300 font-bold tracking-[0.2em] uppercase text-sm">Est. 2024</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-serif leading-[1.1] mb-8 drop-shadow-lg">
            Mojstrovine <br />
            <span className="italic font-light text-wood-200">iz narave.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-wood-100 mb-10 font-light leading-relaxed max-w-xl border-l-2 border-wood-500 pl-6">
            Kjer se tradicija sreča s sodobnim dizajnom. 
            Ustvarjamo unikatno pohištvo, ki vašemu domu podari karakter in toplino.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button variant="white" onClick={onContactClick}>
              Začnimo projekt
            </Button>
            <Button variant="outline-white" onClick={() => document.getElementById('storitve')?.scrollIntoView({ behavior: 'smooth' })}>
              Naše storitve
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white/50">
        <ArrowDown size={32} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;
