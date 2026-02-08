
import React from 'react';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="o-nas" className="py-24 bg-wood-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-wood-600 font-bold uppercase tracking-widest text-xs mb-2 block">Naša zgodba</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-8 leading-tight">
              Ne izdelujemo le pohištva. <br/>
              <span className="text-wood-500 italic">Ustvarjamo dediščino.</span>
            </h2>
            
            <div className="prose prose-lg text-wood-700/80 mb-8">
              <p>
                MK Mizarstvo Kosi d.o.o. je nastalo kot nadaljevanje bogate družinske tradicije. Kristjan Kosi je svoja znanja klesal v očetovi delavnici, kjer se je naučil, da pravi mizar ne pozna bližnjic.
              </p>
              <p>
                Leta 2024 se je podal na samostojno pot v Ormožu, kjer z najsodobnejšo tehnologijo in spoštovanjem do lesa uresničuje vizije najzahtevnejših strank. Vsak izdelek je unikaten podpis kakovosti.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 shadow-sm border-l-4 border-wood-300">
               <Quote className="text-wood-300 w-10 h-10 shrink-0 transform -scale-x-100" />
               <div>
                 <p className="font-serif text-xl italic text-wood-800">"Pohištvo mora imeti dušo in trajati generacije."</p>
                 <p className="text-sm text-wood-500 font-bold mt-2 uppercase tracking-wide">Kristjan Kosi, Ustanovitelj</p>
               </div>
            </div>
          </div>

          {/* Image Composition */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative z-10">
              <img 
                src="slike/Rjavaomara2.JPG"
                alt="Kristjan Kosi pri delu" 
                className="w-full h-[500px] object-cover shadow-2xl"
              />
            </div>
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-wood-300 z-0 hidden md:block"></div>
            <div className="absolute -bottom-10 -left-10 w-1/2 h-1/2 bg-wood-200 z-0 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
