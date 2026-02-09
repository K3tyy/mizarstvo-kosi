import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES, SERVICES } from '../constants';
import { Plus, ArrowLeft, Image as ImageIcon, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Button from './Button';

interface GalleryProps {
  isPreview?: boolean;
  onViewAll?: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ isPreview = false, onViewAll }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  // Scroll to top when switching categories inside full view
  useEffect(() => {
    if (!isPreview && !lightboxImageIndex) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedCategory, isPreview, lightboxImageIndex]);

  // Helper to normalize category matching
  const getImagesByCategory = (serviceId: string) => {
    return GALLERY_IMAGES.filter(img => img.category === serviceId);
  };

  const handleNextImage = (e: React.MouseEvent, images: typeof GALLERY_IMAGES) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    }
  };

  const handlePrevImage = (e: React.MouseEvent, images: typeof GALLERY_IMAGES) => {
    e.stopPropagation();
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
    }
  };

  // --- PREVIEW MODE (HOME PAGE) ---
  if (isPreview) {
    const displayedImages = GALLERY_IMAGES.slice(0, 4);
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
    const images = getImagesByCategory(selectedCategory);
    const categoryTitle = SERVICES.find(s => s.id === selectedCategory)?.title || 'Galerija';

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
          <button 
             onClick={() => setSelectedCategory(null)}
             className="flex items-center text-wood-600 hover:text-wood-900 font-bold uppercase text-sm tracking-wide mb-8 group transition-colors"
          >
             <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Nazaj na kategorije
          </button>

          {images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {images.map((image, index) => (
                <div 
                  key={image.id} 
                  onClick={() => setLightboxImageIndex(index)}
                  className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-500 cursor-zoom-in bg-wood-100"
                >
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-900/90 via-wood-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-serif font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.title}</h3>
                    <div className="mt-2 text-wood-300 text-sm font-bold uppercase tracking-wider flex items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                       <Plus size={16} className="mr-1" /> Povečaj
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-wood-500">
              <ImageIcon size={48} className="mx-auto mb-4 opacity-50" />
              <p>Za to kategorijo trenutno ni na voljo slik.</p>
            </div>
          )}
        </div>

        {/* LIGHTBOX */}
        {lightboxImageIndex !== null && (
          <div className="fixed inset-0 z-[100] bg-wood-950/95 backdrop-blur-md flex items-center justify-center p-4">
             {/* Close button - Larger touch target for mobile */}
             <button 
               onClick={() => setLightboxImageIndex(null)}
               className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors p-3 z-20 bg-black/20 md:bg-transparent rounded-full"
             >
                <X size={32} />
             </button>

             {/* Navigation Buttons - Hidden on very small screens to clear view */}
             <button 
               onClick={(e) => handlePrevImage(e, images)}
               className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-10 hidden sm:block"
             >
                <ChevronLeft size={48} />
             </button>

             <button 
               onClick={(e) => handleNextImage(e, images)}
               className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-10 hidden sm:block"
             >
                <ChevronRight size={48} />
             </button>

             <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <img 
                  src={images[lightboxImageIndex].url} 
                  alt={images[lightboxImageIndex].title} 
                  className="max-h-[70vh] md:max-h-[85vh] max-w-full object-contain shadow-2xl rounded-sm"
                  onClick={(e) => handleNextImage(e, images)} // Tap image to go next
                />
                <div className="mt-4 text-center px-4">
                   <h3 className="text-white text-xl md:text-2xl font-serif font-bold">{images[lightboxImageIndex].title}</h3>
                   <p className="text-wood-300 mt-1 uppercase tracking-widest text-xs md:text-sm">{images[lightboxImageIndex].category}</p>
                   <p className="text-white/40 text-xs mt-2 sm:hidden">(Tapni sliko za naprej)</p>
                </div>
             </div>
             
             {/* Overlay click to close */}
             <div className="absolute inset-0 -z-10" onClick={() => setLightboxImageIndex(null)}></div>
          </div>
        )}

      </div>
    );
  }

  // 2. Category Selection View (IMPROVED DESIGN)
  return (
    <div className="min-h-screen bg-wood-50 pb-24">
      {/* Header */}
      <div className="pt-32 pb-16 bg-wood-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Naši projekti</h1>
            <p className="text-wood-200 text-base md:text-lg max-w-2xl mx-auto">
              Oglejte si izbor naših najboljših izdelkov, razdeljen po kategorijah.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           {SERVICES.map((service) => (
              <div 
                 key={service.id}
                 onClick={() => setSelectedCategory(service.id)}
                 className="group relative h-[300px] md:h-[400px] cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-wood-100"
              >
                 {/* Background Image */}
                 <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-wood-900/90 via-wood-900/40 to-transparent group-hover:via-wood-900/60 transition-all duration-500"></div>
                 
                 {/* Content */}
                 <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    {/* Icon Bubble */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform translate-y-0 group-hover:scale-110 transition-all duration-500 border border-white/30">
                       <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500 shadow-sm">
                        {service.title}
                    </h3>
                    
                    <p className="text-wood-200 text-xs md:text-sm mb-4 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-y-2">
                        {service.description}
                    </p>

                    <div className="flex items-center text-wood-300 text-xs md:text-sm font-bold uppercase tracking-wider transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                       Odpri galerijo <ExternalLink size={16} className="ml-2" />
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