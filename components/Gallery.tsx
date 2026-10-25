import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES, SERVICES } from '../constants';
import { Plus, ArrowLeft, Image as ImageIcon, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ProjectImage } from '../types';

interface GalleryProps {
  isPreview?: boolean;
  onViewAll?: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ isPreview = false, onViewAll }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  // Reset subcategory and scroll to top when category changes
  useEffect(() => {
    setSelectedSubcategory(null);
    setLightboxImageIndex(null);
    if (!isPreview) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [selectedCategory, isPreview]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImageIndex === null) return;
      if (e.key === 'Escape') setLightboxImageIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImageIndex]);

  // Helper to get all images for category
  const getCategoryImages = (catId: string): ProjectImage[] => {
    return GALLERY_IMAGES.filter(img => img.category === catId);
  };

  const currentCategory = SERVICES.find(s => s.id === selectedCategory);
  const baseImages = selectedCategory ? getCategoryImages(selectedCategory) : [];
  
  const displayedImages = selectedSubcategory
    ? baseImages.filter(img => img.subcategory === selectedSubcategory)
    : baseImages;

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null && displayedImages.length > 0) {
      setLightboxImageIndex((lightboxImageIndex + 1) % displayedImages.length);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null && displayedImages.length > 0) {
      setLightboxImageIndex((lightboxImageIndex - 1 + displayedImages.length) % displayedImages.length);
    }
  };

  // --- PREVIEW MODE (HOME PAGE) ---
  if (isPreview) {
    return (
      <section id="galerija" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p>Preview mode content...</p> 
        </div>
      </section>
    );
  }

  // --- FULL PAGE MODE ---

  // 1. Detail View (Images of a specific category)
  if (selectedCategory) {
    const categoryTitle = currentCategory?.title || 'Galerija';
    const subcategories = currentCategory?.subcategories || [];

    return (
      <div className="min-h-screen bg-wood-50 pb-24">
        {/* Header */}
        <div className="pt-32 pb-12 bg-wood-900 text-white text-center">
           <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{categoryTitle}</h1>
              <p className="text-wood-300 uppercase tracking-widest text-xs font-bold">Galerija projektov</p>
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <button 
               onClick={() => setSelectedCategory(null)}
               className="inline-flex items-center text-wood-600 hover:text-wood-900 font-bold uppercase text-xs md:text-sm tracking-wide group transition-colors"
            >
               <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Nazaj na vse kategorije
            </button>

            {/* Subcategory Filter Tabs if available */}
            {subcategories.length > 0 && (
              <div className="flex flex-wrap gap-1.5 p-1 bg-wood-100 rounded-sm border border-wood-200">
                <button
                  onClick={() => setSelectedSubcategory(null)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-all ${
                    selectedSubcategory === null
                      ? 'bg-wood-800 text-white shadow-sm'
                      : 'text-wood-700 hover:text-wood-950 hover:bg-white/60'
                  }`}
                >
                  Vse ({baseImages.length})
                </button>
                {subcategories.map(sub => {
                  const count = baseImages.filter(img => img.subcategory === sub.id).length;
                  const isActive = selectedSubcategory === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubcategory(sub.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-all ${
                        isActive
                          ? 'bg-wood-800 text-white shadow-sm'
                          : 'text-wood-700 hover:text-wood-950 hover:bg-white/60'
                      }`}
                    >
                      {sub.title} ({count})
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {displayedImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {displayedImages.map((image, index) => (
                <div 
                  key={image.id} 
                  onClick={() => setLightboxImageIndex(index)}
                  className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-500 cursor-zoom-in bg-wood-100 border border-wood-200/80"
                >
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-950/90 via-wood-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <h3 className="text-white text-base md:text-lg font-serif font-bold translate-y-3 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h3>
                    <div className="mt-2 text-wood-300 text-xs font-bold uppercase tracking-wider flex items-center translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                       <Plus size={14} className="mr-1" /> Povečaj
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-wood-500 bg-white border border-wood-200/80 rounded-sm">
              <ImageIcon size={48} className="mx-auto mb-4 opacity-40 text-wood-400" />
              <p className="text-base font-medium">Za to izbiro trenutno ni na voljo slik.</p>
            </div>
          )}
        </div>

        {/* LIGHTBOX */}
        {lightboxImageIndex !== null && displayedImages[lightboxImageIndex] && (
          <div 
            className="fixed inset-0 z-[100] bg-wood-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImageIndex(null)}
          >
             {/* Close button */}
             <button 
               onClick={() => setLightboxImageIndex(null)}
               className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors p-3 z-30 bg-black/30 hover:bg-black/50 rounded-full"
               aria-label="Zapri"
             >
                <X size={30} />
             </button>

             {/* Navigation Buttons */}
             {displayedImages.length > 1 && (
               <button 
                 onClick={handlePrevImage}
                 className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 z-20 bg-black/30 hover:bg-black/50 rounded-full"
                 aria-label="Prejšnja slika"
               >
                  <ChevronLeft size={36} />
               </button>
             )}

             {displayedImages.length > 1 && (
               <button 
                 onClick={handleNextImage}
                 className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 z-20 bg-black/30 hover:bg-black/50 rounded-full"
                 aria-label="Naslednja slika"
               >
                  <ChevronRight size={36} />
               </button>
             )}

             <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <img 
                  src={displayedImages[lightboxImageIndex].url} 
                  alt={displayedImages[lightboxImageIndex].title} 
                  className="max-h-[72vh] md:max-h-[82vh] max-w-full object-contain shadow-2xl rounded-sm"
                  onClick={handleNextImage}
                />
                <div className="mt-4 text-center px-4">
                   <h3 className="text-white text-xl md:text-2xl font-serif font-bold">{displayedImages[lightboxImageIndex].title}</h3>
                   <p className="text-wood-300 mt-1 uppercase tracking-widest text-xs md:text-sm">
                     {categoryTitle} • Slika {lightboxImageIndex + 1} od {displayedImages.length}
                   </p>
                   <p className="text-white/40 text-xs mt-2 sm:hidden">(Tapnite sliko za naprej)</p>
                </div>
             </div>
          </div>
        )}

      </div>
    );
  }

  // 2. Category Selection View
  return (
    <div className="min-h-screen bg-wood-50 pb-24">
      {/* Header */}
      <div className="pt-32 pb-16 bg-wood-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Naši projekti</h1>
            <p className="text-wood-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Oglejte si izbor naših najboljših izdelkov in opreme, razdeljen po posameznih področjih mizarskih storitev.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           {SERVICES.filter((service) => service.id !== 'oprema-stanovanj').map((service) => (
              <div 
                 key={service.id}
                 onClick={() => setSelectedCategory(service.id)}
                 className="group relative h-[320px] md:h-[400px] cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-500 border border-wood-200 bg-wood-900"
              >
                 {/* Background Image */}
                 <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
                 />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-wood-950 via-wood-950/40 to-transparent group-hover:via-wood-950/50 transition-all duration-500"></div>
                 
                 {/* Content */}
                 <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    {/* Icon Bubble */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 md:w-12 md:h-12 rounded-sm bg-wood-900/80 backdrop-blur-md flex items-center justify-center text-wood-300 transform translate-y-0 group-hover:scale-105 transition-all duration-300 border border-wood-700/60 shadow-lg">
                       <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                        {service.title}
                    </h3>
                    
                    <p className="text-wood-200 text-xs md:text-sm mb-4 line-clamp-2 opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                        {service.description}
                    </p>

                    <div className="flex items-center text-wood-300 text-xs md:text-sm font-bold uppercase tracking-wider transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                       Odpri galerijo <ExternalLink size={15} className="ml-2" />
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;