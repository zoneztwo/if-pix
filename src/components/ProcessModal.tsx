'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, ShoppingCart, Code2, ArrowLeft } from 'lucide-react';
import ProcessFlow from './ProcessFlow';
import PixelBackground from './PixelBackground';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sectors = [
  { 
    id: 'hizmet', 
    label: 'Hizmet Sektörü', 
    icon: Building2, 
    desc: 'Kurumsal tanıtım ve profesyonel hizmet odaklı çözümler.' 
  },
  { 
    id: 'urun', 
    label: 'Ürün Satışı', 
    icon: ShoppingCart, 
    desc: 'E-ticaret ve dijital pazar yeri odaklı çözümler.' 
  },
  { 
    id: 'yazilim', 
    label: 'Özel Yazılım', 
    icon: Code2, 
    desc: 'İş akışınıza özel teknik sistemler ve API çözümleri.' 
  },
];

const ProcessModal: React.FC<ProcessModalProps> = ({ isOpen, onClose }) => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const handleClose = () => {
    onClose();
    setTimeout(() => setSelectedSector(null), 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/95 backdrop-blur-3xl" onClick={handleClose} />
          
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <PixelBackground />
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-6xl h-full max-h-[85vh] bg-[#141412] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 md:px-10 md:py-6 border-b border-white/5 flex items-center justify-between shrink-0 relative z-20 bg-[#141412]/50 backdrop-blur-md">
              <div className="flex items-center gap-4">
                {selectedSector && (
                  <button 
                    onClick={() => setSelectedSector(null)}
                    className="p-2 hover:bg-white/5 rounded-xl text-primary transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                )}
                <div className="space-y-0.5">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                    {selectedSector ? 'Size Özel ' : ''}
                    <span className="text-primary">Başarı</span> Yolculuğu
                  </h3>
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-mono">
                    {selectedSector ? `// ${selectedSector} yapılandırması` : '// bir hedef seçin'}
                  </p>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all group"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Scrollable Area - Content optimized to fit without scrolling if possible */}
            <div className="flex-1 overflow-y-auto no-scrollbar relative z-10" data-lenis-prevent>
              <div className="min-h-full flex items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-5xl mx-auto">
                  <AnimatePresence mode="wait">
                    {!selectedSector ? (
                      <motion.div
                        key="selection"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
                      >
                        {sectors.map((sector) => (
                          <button
                            key={sector.id}
                            onClick={() => setSelectedSector(sector.id)}
                            className="p-6 md:p-8 bg-white/[0.03] border border-white/5 rounded-[2.5rem] text-left hover:border-primary/40 hover:bg-white/[0.06] transition-all group relative overflow-hidden h-full flex flex-col justify-between min-h-[220px]"
                          >
                            <div className="relative z-10">
                              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <sector.icon size={24} />
                              </div>
                              <h4 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors uppercase">{sector.label}</h4>
                              <p className="text-xs text-secondary/50 leading-relaxed">{sector.desc}</p>
                            </div>
                            
                            <div className="mt-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary opacity-60 group-hover:opacity-100 transition-all">
                              İncele <ArrowLeft className="rotate-180" size={12} />
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="flow"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="w-full py-2"
                      >
                        <ProcessFlow sectorId={selectedSector} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 md:p-6 bg-white/[0.02] border-t border-white/5 text-center shrink-0 bg-[#141412]/80 backdrop-blur-md relative z-20">
              <p className="text-[9px] text-primary/40 uppercase tracking-[0.5em] font-bold">
                IFPIX • Profesyonel Dijital Çözüm Ortağınız
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProcessModal;
