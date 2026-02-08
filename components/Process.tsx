import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-wood-200 text-wood-900 relative overflow-hidden">
      {/* Subtle wood grain texture overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="text-wood-600 font-bold uppercase tracking-widest text-xs">Kako delamo</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mt-3">
            Od ideje do montaže
          </h2>
          <p className="text-wood-700 mt-4 max-w-2xl text-lg leading-relaxed">
            Transparenten proces dela zagotavlja, da so vaše želje uslišane, izvedba pa brezhibna.
            Z vami smo na vsakem koraku.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) - Changed color */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-wood-300/50 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="group">
                <div className="bg-white border border-wood-100 shadow-md hover:shadow-xl p-8 rounded-sm h-full transition-all duration-300 hover:-translate-y-2 relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-serif font-bold text-wood-200 group-hover:text-wood-300 transition-colors">{step.number}</span>
                    {/* Dot for mobile connector */}
                    <div className="w-3 h-3 rounded-full bg-wood-400 lg:hidden"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-wood-900 font-serif">{step.title}</h3>
                  <p className="text-sm text-wood-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;