
import React from 'react';
import { NAV_LINKS } from '../constants';
import { Facebook, Instagram, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wood-200 text-wood-900 pt-16 md:pt-20 pb-10 border-t border-wood-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6 text-wood-900">MK Mizarstvo Kosi</h3>
            <p className="text-wood-700 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">
              Vrhunska izdelava pohištva po meri v Ormožu. Združujemo neprecenljivo družinsko znanje s sodobnim dizajnom.
            </p>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 text-wood-500">Meni</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={`#${link.href}`} className="text-wood-800 hover:text-wood-500 transition-colors text-base font-serif italic hover:not-italic">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 text-wood-500">Kontakt & Podatki</h4>
            <ul className="space-y-3 text-base text-wood-800">
              <li className="font-semibold">MK Mizarstvo Kosi d.o.o.</li>
              <li>Kolodvorska cesta 4</li>
              <li>2270 Ormož</li>
              <li>Davčna št.: SI 65933281</li>
              <li className="pt-4 text-wood-600 text-xs">Ustanovitelj: Kristjan Kosi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wood-300/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <p className="text-wood-600 text-xs md:text-sm font-medium">
              © {new Date().getFullYear()} MK Mizarstvo Kosi d.o.o. Vse pravice pridržane.
            </p>
            <span className="hidden md:block text-wood-400">|</span>
            <div className="text-wood-500 text-xs md:text-sm flex items-center justify-center md:justify-start gap-0.5">
              <span className="whitespace-nowrap">Designed by</span>
              <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity block">
                {/* Increased height to h-9 (36px) for better visibility without huge margins */}
                <img src="slike/kevinlogo.webp" alt="Kevin" className="h-19 w-16 object-contain" />
              </a>
            </div>
          </div>
          
          {/* Social Icons & Signature */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
             <div className="flex items-center gap-4">
                <a href="#" className="text-wood-700 hover:text-wood-500 transition-colors bg-wood-100 p-2 rounded-full">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-wood-700 hover:text-wood-500 transition-colors bg-wood-100 p-2 rounded-full">
                  <Instagram size={20} />
                </a>
             </div>
             <p className="text-wood-500 text-xs uppercase tracking-wider pl-0 sm:pl-4 border-l-0 sm:border-l border-wood-300/50 flex items-center gap-1">
               <Shield size={12} /> Prleška kakovost.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
