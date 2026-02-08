
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kosi.kristjan@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kontakt" className="py-24 bg-wood-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900">Stopite v stik</h2>
            <p className="text-wood-600 mt-4 text-lg">Veselimo se vašega klica ali obiska.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-wood-900 text-white rounded-sm overflow-hidden shadow-2xl mb-16 relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 pointer-events-none"></div>
             
             <div className="p-8 md:p-16">
                <div className="flex flex-col items-center text-center mb-12">
                   <h2 className="text-3xl font-serif font-bold mb-2">MK Mizarstvo Kosi d.o.o.</h2>
                   <div className="h-1 w-20 bg-wood-400 rounded-full my-4"></div>
                   <p className="text-wood-300 uppercase tracking-widest text-xs font-bold">Informacije o podjetju</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                   {/* Phone */}
                   <div className="flex flex-col items-center text-center md:items-start md:text-left group">
                      <div className="mb-4 w-12 h-12 rounded-full bg-wood-800 flex items-center justify-center group-hover:bg-wood-700 transition-colors border border-wood-700">
                         <Phone className="text-wood-300 w-6 h-6" />
                      </div>
                      <p className="text-xs text-wood-400 uppercase tracking-wider mb-1 font-bold">Telefon</p>
                      <a href="tel:+38651626066" className="text-xl md:text-2xl font-serif hover:text-wood-300 transition-colors">051 626 066</a>
                   </div>

                   {/* Email */}
                   <div className="flex flex-col items-center text-center md:items-start md:text-left group">
                      <div className="mb-4 w-12 h-12 rounded-full bg-wood-800 flex items-center justify-center group-hover:bg-wood-700 transition-colors border border-wood-700">
                         <Mail className="text-wood-300 w-6 h-6" />
                      </div>
                      <p className="text-xs text-wood-400 uppercase tracking-wider mb-1 font-bold">E-pošta</p>
                      <div className="flex items-center gap-2 justify-center md:justify-start">
                         <a href="mailto:kosi.kristjan@gmail.com" className="text-xl md:text-2xl font-serif hover:text-wood-300 transition-colors break-all">kosi.kristjan@gmail.com</a>
                         <button onClick={copyEmail} className="text-wood-400 hover:text-white transition-colors p-1" title="Kopiraj">
                            {copied ? <Check size={18} /> : <Copy size={18} />}
                         </button>
                      </div>
                   </div>

                   {/* Address */}
                   <div className="flex flex-col items-center text-center md:items-start md:text-left group">
                      <div className="mb-4 w-12 h-12 rounded-full bg-wood-800 flex items-center justify-center group-hover:bg-wood-700 transition-colors border border-wood-700">
                         <MapPin className="text-wood-300 w-6 h-6" />
                      </div>
                      <p className="text-xs text-wood-400 uppercase tracking-wider mb-1 font-bold">Naslov</p>
                      <p className="text-lg md:text-xl font-serif">Kolodvorska cesta 4<br/>2270 Ormož</p>
                   </div>

                   {/* ID */}
                   <div className="flex flex-col items-center text-center md:items-start md:text-left group">
                      <div className="mb-4 w-12 h-12 rounded-full bg-wood-800 flex items-center justify-center group-hover:bg-wood-700 transition-colors border border-wood-700">
                         <ShieldCheck className="text-wood-300 w-6 h-6" />
                      </div>
                      <p className="text-xs text-wood-400 uppercase tracking-wider mb-1 font-bold">Podatki podjetja</p>
                      <p className="text-lg md:text-xl font-serif">Davčna št.: SI 65933281</p>
                   </div>
                </div>

                <div className="mt-16 pt-8 border-t border-wood-800/50 flex flex-col items-center gap-2 text-wood-400/80 text-sm">
                   <div className="flex items-center gap-2">
                       <Clock size={16} />
                       <span className="uppercase tracking-wider font-bold">Delovni čas</span>
                   </div>
                   <p>Po dogovoru / Kontaktirajte nas za termin</p>
                </div>
             </div>
        </div>

        <div className="w-full h-[450px] bg-wood-200 shadow-xl border-4 border-white rounded-sm overflow-hidden">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.512615431627!2d16.15124027690327!3d46.40989397110433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f577f8d68962d%3A0xc6823c91f6338f2!2sKolodvorska%20cesta%204%2C%202270%20Ormo%C5%BE!5e0!3m2!1ssl!2ssi!4v1700000000000!5m2!1ssl!2ssi" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Mizarstvo Kosi Ormož"
                className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
