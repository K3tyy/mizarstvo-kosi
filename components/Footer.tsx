
import React from 'react';
import { NAV_LINKS } from '../constants';
import { Facebook, Instagram, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wood-200 text-wood-900 pt-20 pb-10 border-t border-wood-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6 text-wood-900">MK Mizarstvo Kosi</h3>
            <p className="text-wood-700 text-sm leading-relaxed max-w-xs font-medium">
              Vrhunska izdelava pohištva po meri v Ormožu. Združujemo neprecenljivo družinsko znanje s sodobnim dizajnom.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-wood-500">Meni</h4>
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
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-wood-500">Kontakt & Podatki</h4>
            <ul className="space-y-3 text-base text-wood-800">
              <li className="font-semibold">MK Mizarstvo Kosi d.o.o.</li>
              <li>Kolodvorska cesta 4</li>
              <li>2270 Ormož</li>
              <li>Davčna št.: SI65933281</li>
              <li className="pt-4 text-wood-600 text-xs">Ustanovitelj: Kristjan Kosi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wood-300/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-wood-600 text-sm font-medium">
            © {new Date().getFullYear()} MK Mizarstvo Kosi d.o.o. Vse pravice pridržane.
          </p>
          
          {/* Social Icons & Signature */}
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-4">
                <a href="#" className="text-wood-700 hover:text-wood-500 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-wood-700 hover:text-wood-500 transition-colors">
                  <Instagram size={20} />
                </a>
             </div>
             <p className="text-wood-500 text-xs uppercase tracking-wider pl-4 border-l border-wood-300/50 flex items-center gap-1">
               <Shield size={12} /> Prleška kakovost.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
