import React from 'react';
import { Quote } from 'lucide-react';
import { TEAM } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-wood-50">
      
      {/* Hero-like Title Section */}
      <div className="pt-32 pb-16 bg-wood-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Zgodba o tradiciji in novem začetku</h1>
            <p className="text-wood-200 text-lg max-w-2xl mx-auto">
               MK Mizarstvo Kosi – kjer se desetletja izkušenj prelijejo v sodobno vizijo mizarstva.
            </p>
         </div>
      </div>

      {/* Main Story Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-wood-600 font-bold uppercase tracking-widest text-xs mb-2 block">Dediščina</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mb-6">
                Od očetove delavnice do lastne poti
              </h2>
              <div className="prose prose-lg text-wood-700/80 space-y-4">
                <p>
                  Kristjan Kosi ni začel iz ničle. Svojo pot je začel v očetovi mizarski delavnici, kjer je od malih nog spoznaval vonj sveže žaganega lesa in natančnost, ki jo zahteva mizarstvo. Skozi leta dela pod očetovim mentorstvom je usvojil klasične tehnike in spoštovanje do materiala.
                </p>
                <p>
                  Leta 2024 se je odločil za velik korak – odprtje lastnega podjetja <strong>MK Mizarstvo Kosi d.o.o.</strong> Njegov cilj je bil jasen: ohraniti neprecenljivo družinsko znanje o mizarstvu, a mu dodati svežino, sodoben dizajn in najnovejšo tehnologijo izrisa ter obdelave.
                </p>
                <p>
                  Danes MK Mizarstvo Kosi predstavlja most med staro šolo kakovosti in novo šolo funkcionalne estetike.
                </p>
              </div>
            </div>
            <div className="relative">
               <img 
                 src="https://images.unsplash.com/photo-1551970634-747846a548cb?q=80&w=1000&auto=format&fit=crop" 
                 alt="Mizarska delavnica Kosi" 
                 className="w-full h-[500px] object-cover rounded-sm shadow-xl"
               />
               <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-wood-300 -z-10 hidden md:block"></div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-12">
             <div className="text-center mb-16">
               <span className="text-wood-600 font-bold uppercase tracking-widest text-xs">Osebni pristop</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mt-2">Kdo stoji za vašim projektom</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {TEAM.map((member) => (
                   <div key={member.id} className="group text-center">
                      <div className="relative mb-6 overflow-hidden rounded-sm mx-auto aspect-[3/4]">
                         <img 
                           src={member.image} 
                           alt={member.name} 
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                         />
                         <div className="absolute inset-0 bg-wood-900/10 group-hover:bg-transparent transition-colors"></div>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-wood-900">{member.name}</h3>
                      <p className="text-wood-500 font-medium text-sm uppercase tracking-wide mt-1">{member.role}</p>
                   </div>
                ))}
             </div>
          </div>

          {/* Quote */}
          <div className="bg-wood-200 p-12 text-center rounded-sm relative overflow-hidden mt-20">
             <Quote className="text-wood-300 w-24 h-24 absolute top-4 left-4 opacity-20 transform -scale-x-100" />
             <blockquote className="relative z-10 max-w-2xl mx-auto">
               <p className="font-serif text-2xl italic text-wood-900 mb-6">"Vsak kos pohištva, ki zapusti našo delavnico, nosi moj priimek. To je moja zaveza h kakovosti, ki je ne bom nikoli prekršil."</p>
               <footer className="text-wood-600 font-bold uppercase text-sm">Kristjan Kosi</footer>
             </blockquote>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;