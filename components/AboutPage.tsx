
import React from 'react';
import { Quote, Users, HeartHandshake, MessageSquare, ShieldCheck } from 'lucide-react';
import { TEAM } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-wood-50">
      
      {/* Hero-like Title Section */}
      <div className="pt-32 pb-12 md:pb-16 bg-wood-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">Zgodba o tradiciji in novem začetku</h1>
            <p className="text-wood-200 text-base md:text-lg max-w-2xl mx-auto">
               MK mizarstvo Kristjan Kosi d.o.o. – kjer se desetletja izkušenj prelijejo v sodobno vizijo mizarstva.
            </p>
         </div>
      </div>

      {/* Main Story Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
            <div className="order-2 lg:order-1">
              <span className="text-wood-600 font-bold uppercase tracking-widest text-xs mb-2 block">Dediščina</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mb-4 md:mb-6">
                Od očetove delavnice do lastne poti
              </h2>
              <div className="prose prose-base md:prose-lg text-wood-700/80 space-y-4">
                <p>
                  Kristjan Kosi ni začel iz ničle. Svojo pot je začel v očetovi mizarski delavnici, kjer je od malih nog spoznaval vonj sveže žaganega lesa in natančnost, ki jo zahteva mizarstvo. Skozi leta dela pod očetovim mentorstvom je usvojil klasične tehnike in spoštovanje do materiala.
                </p>
                <p>
                  Leta 2024 se je odločil za velik korak – odprtje lastnega podjetja <strong>MK mizarstvo Kristjan Kosi d.o.o.</strong> Njegov cilj je bil jasen: ohraniti neprecenljivo družinsko znanje o mizarstvu, a mu dodati svežino, sodoben dizajn in najnovejšo tehnologijo izrisa ter obdelave.
                </p>
                <p>
                  Danes MKK predstavlja most med staro šolo kakovosti in novo šolo funkcionalne estetike.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
               {/* Elegant craftsman frame reserved for father & son portrait */}
               <div className="w-full min-h-[360px] md:min-h-[480px] bg-gradient-to-br from-wood-900 via-wood-850 to-wood-950 text-white rounded-sm shadow-2xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border border-wood-700">
                  <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-wood-500/10 blur-3xl pointer-events-none"></div>

                  <div className="relative z-10 flex items-center justify-between">
                     <span className="text-wood-400 font-bold uppercase tracking-[0.2em] text-xs">Družinska tradicija</span>
                     <span className="text-xs uppercase tracking-wider px-2.5 py-1 border border-wood-600/60 text-wood-300 font-semibold rounded-sm">MKK</span>
                  </div>

                  <div className="relative z-10 my-auto text-center py-6">
                     <div className="w-20 h-20 mx-auto rounded-full bg-wood-800/80 border border-wood-600/50 flex items-center justify-center text-wood-300 mb-6 shadow-inner">
                        <Users className="w-10 h-10 text-wood-300" strokeWidth={1.5} />
                     </div>
                     <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">Kristjan & Jože Kosi</h3>
                     <p className="text-wood-300 font-serif italic text-base md:text-lg mb-4">Oče in sin – vez znanja, izkušenj in natančnosti</p>
                     <p className="text-wood-400 text-xs md:text-sm max-w-sm mx-auto leading-relaxed">
                        Več desetletij predanosti lesu in mojstrski obdelavi, ki se iz roda v rod preliva v sodobne rešitve za vaš dom.
                     </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-wood-800/80 flex items-center justify-between text-xs text-wood-400">
                     <span>MK mizarstvo Kristjan Kosi d.o.o.</span>
                     <span className="italic text-wood-500">Ormož, Slovenija</span>
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-wood-300 -z-10 hidden md:block"></div>
            </div>
          </div>

          {/* Osebni pristop Section */}
          <div className="mb-16">
             <div className="text-center mb-10 md:mb-14">
               <span className="text-wood-600 font-bold uppercase tracking-widest text-xs">Naše vrednote</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-wood-900 mt-2 mb-4">Prednosti osebnega pristopa</h2>
               <p className="text-wood-700 max-w-2xl mx-auto text-base md:text-lg">
                 Pri nas niste le številka projekta. Z osebnim pristopom gradimo zaupanje in ustvarjamo rešitve, ki resnično ustrezajo vašemu načinu življenja.
               </p>
             </div>

             {/* Personal approach benefits cards */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
                <div className="bg-white p-8 border border-wood-200/80 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-wood-100 text-wood-700 rounded-sm flex items-center justify-center mb-5">
                      <HeartHandshake className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-serif font-bold text-wood-900 mb-2">Prijateljski odnos in posluh za stranko</h3>
                   <p className="text-wood-600 text-sm leading-relaxed">
                      Vsak projekt začnemo s sproščenim in prijateljskim pogovorom. Skrbno prisluhnemo vašim željam ter potrebam in si vzamemo čas za vsak droben detajl.
                   </p>
                </div>

                <div className="bg-white p-8 border border-wood-200/80 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-wood-100 text-wood-700 rounded-sm flex items-center justify-center mb-5">
                      <MessageSquare className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-serif font-bold text-wood-900 mb-2">Direktnost in iskrenost</h3>
                   <p className="text-wood-600 text-sm leading-relaxed">
                      Odkrito in pošteno vam svetujemo, kaj se v vašem prostoru obnese najbolje. Brez zavajanja in brez skritih stroškov – le resnična strokovna presoja.
                   </p>
                </div>

                <div className="bg-white p-8 border border-wood-200/80 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-wood-100 text-wood-700 rounded-sm flex items-center justify-center mb-5">
                      <ShieldCheck className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-serif font-bold text-wood-900 mb-2">Strokovna podpora tekom celotnega procesa</h3>
                   <p className="text-wood-600 text-sm leading-relaxed">
                      Z vami smo na vsakem koraku: od ideje, izmere in 3D načrtovanja do izdelave ter končne montaže. Kadarkoli se lahko obrnete na nas za nasvet.
                   </p>
                </div>
             </div>

             <div className="text-center mb-8">
               <span className="text-wood-600 font-bold uppercase tracking-widest text-xs">Ekipa</span>
               <h3 className="text-2xl md:text-3xl font-serif font-bold text-wood-900 mt-1">Kdo stoji za vašim projektom</h3>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
                {TEAM.map((member) => (
                   <div key={member.id} className="group text-center">
                      <div className="relative mb-6 overflow-hidden rounded-sm mx-auto aspect-[3/4] max-w-[300px] sm:max-w-none">
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
          <div className="bg-wood-200 p-8 md:p-12 text-center rounded-sm relative overflow-hidden mt-16 md:mt-20">
             <Quote className="text-wood-300 w-16 h-16 md:w-24 md:h-24 absolute top-4 left-4 opacity-20 transform -scale-x-100" />
             <blockquote className="relative z-10 max-w-2xl mx-auto">
               <p className="font-serif text-xl md:text-2xl italic text-wood-900 mb-6">"Vsak kos pohištva, ki zapusti našo delavnico, nosi moj priimek. To je moja zaveza h kakovosti, ki je ne bom nikoli prekršil."</p>
               <footer className="text-wood-600 font-bold uppercase text-sm">Kristjan Kosi</footer>
             </blockquote>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;
