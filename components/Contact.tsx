
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('kosi.kristjan@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kontakt" className="flex flex-col lg:flex-row min-h-screen bg-wood-950">
      {/* LEFT COLUMN: Content */}
      <div className="w-full lg:w-1/2 relative bg-wood-950 text-wood-100 flex flex-col justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-wood-900">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-wood-pattern pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-wood-950 via-transparent to-black/20 pointer-events-none"></div>

        <div className="relative z-10 p-8 pt-12 lg:p-20 xl:p-24 flex flex-col h-full justify-center">
            
            <div className="mb-10 lg:mb-16">
                <span className="text-wood-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm block mb-4">
                    Mizarstvo Kosi
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                    Začnimo <br/>
                    <span className="text-wood-500">projekt.</span>
                </h2>
                <p className="text-wood-300/60 text-lg md:text-xl max-w-md font-light">
                    Vaše želje, naše znanje. Stopite v stik z nami za unikatno pohištvo, ki bo trajalo generacije.
                </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
                {/* Phone Item */}
                <a href="tel:+38651626066" className="group flex items-center gap-4 md:gap-6 p-4 -mx-4 rounded-xl hover:bg-wood-900/50 transition-all duration-300 border border-transparent hover:border-wood-800">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-wood-900 border border-wood-800 flex items-center justify-center text-wood-400 group-hover:text-white group-hover:bg-wood-600 transition-colors shrink-0 shadow-lg">
                        <Phone size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-wood-500 uppercase tracking-wider font-bold mb-1 group-hover:text-wood-400 transition-colors">Pokličite nas</p>
                        <p className="text-2xl md:text-3xl font-serif text-white group-hover:text-wood-300 transition-colors font-medium">051 626 066</p>
                    </div>
                    <ArrowRight className="ml-auto text-wood-700 group-hover:text-white opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hidden sm:block" />
                </a>

                {/* Email Item */}
                <div className="group flex items-center gap-4 md:gap-6 p-4 -mx-4 rounded-xl hover:bg-wood-900/50 transition-all duration-300 border border-transparent hover:border-wood-800 relative cursor-pointer" onClick={(e) => { if(!copied) { window.location.href = 'mailto:kosi.kristjan@gmail.com'; } }}>
                     <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-wood-900 border border-wood-800 flex items-center justify-center text-wood-400 group-hover:text-white group-hover:bg-wood-600 transition-colors shrink-0 shadow-lg">
                        <Mail size={24} />
                    </div>
                    <div className="flex-grow min-w-0">
                        <p className="text-xs text-wood-500 uppercase tracking-wider font-bold mb-1 group-hover:text-wood-400 transition-colors">Pišite nam</p>
                        <p className="text-xl md:text-2xl font-serif text-white group-hover:text-wood-300 transition-colors break-all font-medium">
                            kosi.kristjan@gmail.com
                        </p>
                    </div>
                    <button 
                        onClick={copyEmail}
                        className="p-3 text-wood-600 hover:text-white transition-colors z-20 hover:bg-wood-800 rounded-full"
                        title="Kopiraj naslov"
                    >
                         {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                    </button>
                </div>

                {/* Address Item */}
                <a href="https://www.google.com/maps/dir//Kolodvorska+cesta+4,+2270+Ormož" target="_blank" rel="noreferrer" className="group flex items-center gap-4 md:gap-6 p-4 -mx-4 rounded-xl hover:bg-wood-900/50 transition-all duration-300 border border-transparent hover:border-wood-800">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-wood-900 border border-wood-800 flex items-center justify-center text-wood-400 group-hover:text-white group-hover:bg-wood-600 transition-colors shrink-0 shadow-lg">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-wood-500 uppercase tracking-wider font-bold mb-1 group-hover:text-wood-400 transition-colors">Obiščite delavnico</p>
                        <p className="text-xl md:text-2xl font-serif text-white group-hover:text-wood-300 transition-colors font-medium">
                            Kolodvorska cesta 4 <br/>
                            <span className="text-base md:text-lg text-wood-500 group-hover:text-wood-400">2270 Ormož</span>
                        </p>
                    </div>
                     <ArrowRight className="ml-auto text-wood-700 group-hover:text-white opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hidden sm:block" />
                </a>
            </div>

            <div className="mt-12 pt-8 border-t border-wood-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-wood-600 text-sm">
                 <div className="flex items-center gap-2">
                    <ShieldCheck size={16} />
                    <span className="font-semibold text-wood-500">MK Mizarstvo Kosi d.o.o.</span>
                 </div>
                 <p className="text-wood-700">Davčna št: <span className="text-wood-500">SI 65933281</span></p>
            </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Map */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[400px] relative bg-wood-900 group border-t border-wood-800 lg:border-t-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.512615431627!2d16.15124027690327!3d46.40989397110433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f577f8d68962d%3A0xc6823c91f6338f2!2sKolodvorska%20cesta%204%2C%202270%20Ormo%C5%BE!5e0!3m2!1ssl!2ssi!4v1700000000000!5m2!1ssl!2ssi" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokacija Mizarstvo Kosi Ormož"
            className="w-full h-full grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 ease-in-out filter"
        ></iframe>
        
        {/* Overlay Label (Desktop) */}
        <div className="hidden lg:block absolute top-10 right-10 bg-wood-950/90 backdrop-blur-md text-white px-8 py-4 rounded-sm shadow-2xl border border-wood-800/50 pointer-events-none transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
            <p className="font-bold uppercase tracking-widest text-xs text-wood-500 mb-2">Lokacija</p>
            <p className="font-serif text-xl tracking-wide">Ormož, Slovenija</p>
        </div>

        {/* Mobile Overlay Label (Always visible) */}
         <div className="lg:hidden absolute bottom-6 left-6 bg-wood-950/90 backdrop-blur-md text-white px-5 py-2 rounded-sm shadow-xl border border-wood-800/50 pointer-events-none">
            <p className="font-serif text-sm flex items-center gap-2"><MapPin size={14} className="text-wood-400"/> Ormož, Slovenija</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
