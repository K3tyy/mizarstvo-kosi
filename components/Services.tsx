
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="storitve" className="py-24 bg-wood-900 text-wood-100 relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-wood-400 font-bold uppercase tracking-widest text-xs">Ekspertiza</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 text-white">
              Pohištvo za vsak <span className="text-wood-300 italic">karakter.</span>
            </h2>
          </div>
          <div className="hidden md:block pb-2">
            <p className="text-wood-400 text-right">Od kuhinje do spalnice,<br/>vse na enem mestu.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative bg-wood-800 border border-wood-700 hover:border-wood-500 transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                 <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                 />
              </div>
              
              <div className="p-8 relative">
                <div className="absolute -top-8 right-8 w-16 h-16 bg-wood-300 text-wood-900 flex items-center justify-center shadow-lg group-hover:bg-white transition-colors duration-300">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-white mb-3 mt-4">{service.title}</h3>
                <p className="text-wood-300/80 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <a href="#kontakt" className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider group-hover:text-wood-300 transition-colors">
                  Povpraševanje <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
