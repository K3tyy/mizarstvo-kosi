import React, { useState, useEffect } from 'react';
import { SERVICES, GALLERY_IMAGES } from '../constants';
import Process from './Process';
import { ArrowLeft, CheckCircle, Leaf, Plus, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import Button from './Button';
import { ProjectImage } from '../types';

interface ServicesPageProps {
  initialServiceId?: string | null;
  onNavigate?: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ initialServiceId, onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(initialServiceId || null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync state if prop changes (e.g. navigation from home)
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // When service changes, set default subcategory if available
  useEffect(() => {
    if (selectedServiceId) {
      const s = SERVICES.find(item => item.id === selectedServiceId);
      if (s?.subcategories && s.subcategories.length > 0) {
        setSelectedSubcategoryId(s.subcategories[0].id);
      } else {
        setSelectedSubcategoryId(null);
      }
    } else {
      setSelectedSubcategoryId(null);
    }
    setLightboxIndex(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedServiceId]);

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);

  // Dedicated gallery photos for the selected service
  const serviceImages: ProjectImage[] = selectedService
    ? GALLERY_IMAGES.filter(img => img.category === selectedService.id)
    : [];

  const activeSubcategory = selectedService?.subcategories?.find(sub => sub.id === selectedSubcategoryId);

  // Lightbox navigation handlers
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && serviceImages.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % serviceImages.length);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && serviceImages.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + serviceImages.length) % serviceImages.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && serviceImages.length > 0) {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % serviceImages.length : 0));
      }
      if (e.key === 'ArrowLeft' && serviceImages.length > 0) {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + serviceImages.length) % serviceImages.length : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, serviceImages.length]);

  return (
    <div className="min-h-screen bg-wood-50">
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-wood-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">
               {selectedService ? selectedService.title : 'Naše storitve'}
            </h1>
            <p className="text-wood-200 text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed font-light">
               {selectedService 
                  ? selectedService.description 
                  : 'Celovite rešitve za vaš dom. Od vaše ali naše ideje snovanja, oblikovanja in iskanja rešitev do končne montaže. Izdelujemo vse vrste stavbnega in notranjega pohištva. Sami oblikujemo in snovamo kose pohištva ter nudimo najboljše rešitve za vaš prostor.'}
            </p>
         </div>
      </div>

      {selectedService ? (
         // DETAIL VIEW
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <button 
               onClick={() => setSelectedServiceId(null)}
               className="inline-flex items-center text-wood-600 hover:text-wood-900 font-bold uppercase text-xs md:text-sm tracking-wider mb-8 group transition-colors"
            >
               <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Nazaj na vse storitve
            </button>

            {/* Top Presentation Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-16">
               {/* Left Column: Descriptions & Details */}
               <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="mb-6">
                    <span className="text-wood-600 font-bold uppercase tracking-widest text-xs block mb-1">Strokovna izvedba</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-wood-900">
                      {selectedService.title}
                    </h2>
                  </div>

                  <p className="text-wood-700 text-base md:text-lg leading-relaxed mb-6 font-normal">
                     {selectedService.fullDescription || selectedService.description}
                  </p>

                  {/* Special notice for Eko subvencije (Okna) */}
                  {selectedService.specialNotice && (
                    <div className="mb-6 p-5 sm:p-6 bg-emerald-50/80 border border-emerald-200/80 rounded-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-sm bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Leaf className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-serif font-bold text-emerald-950 text-base md:text-lg">
                              {selectedService.specialNotice.title}
                            </h3>
                            {selectedService.specialNotice.badge && (
                              <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider bg-emerald-100/80 px-2 py-0.5 rounded-sm">
                                {selectedService.specialNotice.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-emerald-900/90 text-sm md:text-base leading-relaxed">
                            {selectedService.specialNotice.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Subcategories selector (e.g. for Omare: Vgradne omare / Klasične / Skriti prehodi; for Vrata: Vhodna / Notranja) */}
                  {selectedService.subcategories && selectedService.subcategories.length > 0 && (
                    <div className="mb-8">
                      <span className="text-xs uppercase tracking-wider font-bold text-wood-500 block mb-3">
                        Izberite vrsto izvedbe:
                      </span>
                      <div className="flex flex-wrap gap-2 p-1.5 bg-wood-100/80 rounded-sm border border-wood-200 mb-4">
                        {selectedService.subcategories.map((sub) => {
                          const isActive = sub.id === selectedSubcategoryId;
                          return (
                            <button
                              key={sub.id}
                              onClick={() => setSelectedSubcategoryId(sub.id)}
                              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-sm transition-all ${
                                isActive
                                  ? 'bg-wood-800 text-white shadow-sm'
                                  : 'text-wood-700 hover:text-wood-950 hover:bg-white/60'
                              }`}
                            >
                              {sub.title}
                            </button>
                          );
                        })}
                      </div>

                      {/* Active Subcategory Details Card */}
                      {activeSubcategory && (
                        <div className="bg-wood-50 border border-wood-200/90 p-5 rounded-sm">
                          <h4 className="font-serif font-bold text-wood-900 text-lg mb-2">
                            {activeSubcategory.title}
                          </h4>
                          <p className="text-wood-700 text-sm md:text-base leading-relaxed mb-4">
                            {activeSubcategory.description}
                          </p>
                          {activeSubcategory.benefits && (
                            <ul className="space-y-2 pt-2 border-t border-wood-200/70">
                              {activeSubcategory.benefits.map((subBenefit, bIdx) => (
                                <li key={bIdx} className="flex items-start text-xs md:text-sm text-wood-800">
                                  <CheckCircle className="w-4 h-4 text-wood-600 mr-2 shrink-0 mt-0.5" />
                                  <span>{subBenefit}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* General Benefits Card */}
                  {selectedService.benefits && (
                     <div className="bg-white p-6 md:p-8 border border-wood-200 shadow-sm rounded-sm mb-8">
                        <h3 className="font-bold text-wood-900 mb-4 uppercase tracking-wider text-xs md:text-sm">
                          Ključne prednosti
                        </h3>
                        <ul className="space-y-3.5">
                           {selectedService.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                 <CheckCircle className="text-wood-600 w-5 h-5 mr-3 shrink-0 mt-0.5" />
                                 <span className="text-wood-800 text-sm md:text-base leading-relaxed">{benefit}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}

                  <div>
                     <Button 
                       onClick={() => onNavigate ? onNavigate('kontakt') : window.location.hash = '#kontakt'} 
                       fullWidth 
                       className="md:w-auto"
                     >
                        Pošljite povpraševanje
                     </Button>
                  </div>
               </div>
               
               {/* Right Column: Featured Image */}
               <div className="lg:col-span-5 order-1 lg:order-2">
                  <div className="relative group overflow-hidden rounded-sm shadow-xl border border-wood-200 bg-wood-100">
                    <img 
                       src={selectedService.image} 
                       alt={selectedService.title} 
                       className="w-full h-[320px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wood-950/80 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <p className="text-xs uppercase tracking-widest text-wood-300 font-bold mb-1">MK mizarstvo Kristjan Kosi</p>
                        <p className="font-serif text-lg font-bold">{selectedService.title}</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* DEDICATED SERVICE GALLERY (izpuščeno pri opremljanju celotnih objektov) */}
            {selectedService.id !== 'oprema-stanovanj' && (
              <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-wood-200">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="text-wood-600 font-bold uppercase tracking-widest text-xs block mb-1">
                      Namenska galerija
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-wood-900">
                      Projekti: {selectedService.title}
                    </h3>
                    <p className="text-wood-600 text-sm md:text-base mt-1">
                      Izbor fotografij naših izdelkov in montaž na terenu ({serviceImages.length} {serviceImages.length === 1 ? 'slika' : serviceImages.length === 2 ? 'sliki' : serviceImages.length === 3 || serviceImages.length === 4 ? 'slike' : 'slik'}).
                    </p>
                  </div>
                </div>

                {serviceImages.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {serviceImages.map((image, index) => (
                      <div
                        key={image.id}
                        onClick={() => setLightboxIndex(index)}
                        className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in bg-wood-100 border border-wood-200/80"
                      >
                        <img 
                          src={image.url} 
                          alt={image.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-wood-950/80 via-wood-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <p className="text-white text-sm md:text-base font-serif font-bold line-clamp-2">
                            {image.title}
                          </p>
                          <div className="mt-1 text-wood-300 text-xs font-bold uppercase tracking-wider flex items-center">
                            <Plus size={14} className="mr-1" /> Povečaj sliko
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white border border-wood-200/80 rounded-sm text-wood-500">
                    <ImageIcon size={40} className="mx-auto mb-3 opacity-40 text-wood-400" />
                    <p className="text-base font-medium">Za to storitev pripravljamo dodatne fotografije.</p>
                  </div>
                )}
              </div>
            )}

            {/* LIGHTBOX MODAL */}
            {lightboxIndex !== null && serviceImages[lightboxIndex] && (
              <div 
                className="fixed inset-0 z-[100] bg-wood-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                onClick={() => setLightboxIndex(null)}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors p-3 z-30 bg-black/30 hover:bg-black/50 rounded-full"
                  aria-label="Zapri"
                >
                  <X size={28} />
                </button>

                {/* Left Arrow */}
                {serviceImages.length > 1 && (
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 z-20 bg-black/30 hover:bg-black/50 rounded-full"
                    aria-label="Prejšnja slika"
                  >
                    <ChevronLeft size={36} />
                  </button>
                )}

                {/* Right Arrow */}
                {serviceImages.length > 1 && (
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 z-20 bg-black/30 hover:bg-black/50 rounded-full"
                    aria-label="Naslednja slika"
                  >
                    <ChevronRight size={36} />
                  </button>
                )}

                {/* Main Image Container */}
                <div 
                  className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={serviceImages[lightboxIndex].url} 
                    alt={serviceImages[lightboxIndex].title} 
                    className="max-h-[75vh] max-w-full object-contain rounded-sm shadow-2xl"
                    onClick={handleNextImage}
                  />
                  <div className="mt-4 text-center px-4">
                    <h3 className="text-white text-lg sm:text-xl font-serif font-bold">
                      {serviceImages[lightboxIndex].title}
                    </h3>
                    <p className="text-wood-300 text-xs sm:text-sm mt-1">
                      {selectedService.title} • Slika {lightboxIndex + 1} od {serviceImages.length}
                    </p>
                  </div>
                </div>
              </div>
            )}

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
                        <div className="w-12 h-12 bg-wood-100 text-wood-600 rounded-sm flex items-center justify-center mb-4 group-hover:bg-wood-600 group-hover:text-white transition-colors">
                           <service.icon size={24} />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-wood-900 mb-3">{service.title}</h3>
                        <p className="text-wood-600 text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>
                        <span className="text-wood-500 font-bold text-sm uppercase tracking-wider group-hover:text-wood-800 transition-colors inline-flex items-center">
                           Več o tem <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      )}

      {/* Process Section - Visible only on the main services list page */}
      {!selectedService && (
        <div className="border-t border-wood-200">
           <Process />
        </div>
      )}

    </div>
  );
};

export default ServicesPage;
