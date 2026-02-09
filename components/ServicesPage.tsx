
import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';
import Process from './Process'; // Importing the process component
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Button from './Button';

interface ServicesPageProps {
  initialServiceId?: string | null;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ initialServiceId }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(initialServiceId || null);

  // Sync state if prop changes (e.g. navigation from home)
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedServiceId]);

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen bg-wood-50">
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-wood-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">
               {selectedService ? selectedService.title : 'Naše storitve'}
            </h1>
            <p className="text-wood-200 text-base md:text-lg max-w-2xl mx-auto">
               {selectedService 
                  ? 'Podrobnosti in prednosti izbire.' 
                  : 'Celovite rešitve za vaš dom. Od ideje do končne montaže.'}
            </p>
         </div>
      </div>

      {selectedService ? (
         // DETAIL VIEW
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <button 
               onClick={() => setSelectedServiceId(null)}
               className="flex items-center text-wood-600 hover:text-wood-900 font-bold uppercase text-sm tracking-wide mb-8 group transition-colors"
            >
               <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Nazaj na vse storitve
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
               <div className="order-2 lg:order-1">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-wood-900 mb-4 md:mb-6">Zakaj izbrati {selectedService.title.toLowerCase()}?</h2>
                  <p className="text-wood-700 text-base md:text-lg leading-relaxed mb-8">
                     {selectedService.fullDescription || selectedService.description}
                  </p>
                  
                  {selectedService.benefits && (
                     <div className="bg-white p-6 md:p-8 border border-wood-100 shadow-sm rounded-sm">
                        <h3 className="font-bold text-wood-900 mb-4 uppercase tracking-wider text-sm">Ključne prednosti</h3>
                        <ul className="space-y-4">
                           {selectedService.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                 <CheckCircle className="text-wood-500 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                 <span className="text-wood-700 text-sm md:text-base">{benefit}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}

                  <div className="mt-8">
                     <Button onClick={() => window.location.hash = '#kontakt'} fullWidth className="md:w-auto">
                        Pošljite povpraševanje
                     </Button>
                  </div>
               </div>
               
               <div className="h-[300px] md:h-full md:min-h-[400px] order-1 lg:order-2">
                  <img 
                     src={selectedService.image} 
                     alt={selectedService.title} 
                     className="w-full h-full object-cover rounded-sm shadow-xl"
                  />
               </div>
            </div>
         </div>
      ) : (
         // LIST VIEW
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
               {SERVICES.map((service) => (
                  <div 
                     key={service.id}
                     onClick={() => setSelectedServiceId(service.id)}
                     className="group bg-white border border-wood-100 hover:border-wood-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
                  >
                     <div className="h-56 md:h-64 overflow-hidden relative">
                        <img 
                           src={service.image} 
                           alt={service.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/20 transition-colors"></div>
                     </div>
                     <div className="p-6 md:p-8 flex-grow flex flex-col">
                        <div className="w-12 h-12 bg-wood-100 text-wood-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-wood-600 group-hover:text-white transition-colors">
                           <service.icon size={24} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-wood-900 mb-3">{service.title}</h3>
                        <p className="text-wood-600 text-sm mb-6 flex-grow">{service.description}</p>
                        <span className="text-wood-500 font-bold text-sm uppercase tracking-wider group-hover:text-wood-800 transition-colors inline-flex items-center">
                           Več o tem <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      )}

      {/* Process Section - Always visible at bottom of Services page as requested */}
      <div className="border-t border-wood-200">
         <Process />
      </div>

    </div>
  );
};

export default ServicesPage;
