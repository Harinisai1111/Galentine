
import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

declare const confetti: any;

const ProposalSection: React.FC = () => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isAccepted, setIsAccepted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    // Keep the "No" button within reasonable bounds of the container
    const range = 150;
    const newX = (Math.random() - 0.5) * range * 2;
    const newY = (Math.random() - 0.5) * range * 2;
    setNoPosition({ x: newX, y: newY });
  };

  const handleYes = useCallback(() => {
    setIsAccepted(true);
    if (typeof confetti !== 'undefined') {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f8d7e3', '#f472b6', '#e6e6fa']
      });
      
      // Extra burst
      setTimeout(() => {
        confetti({
          particleCount: 100,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#f8d7e3', '#f472b6']
        });
        confetti({
          particleCount: 100,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#e6e6fa', '#f472b6']
        });
      }, 250);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative py-20 overflow-hidden">
      <AnimatePresence mode="wait">
        {!isAccepted ? (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            className="max-w-xl w-full bg-white/70 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] shadow-2xl border border-pink-100 text-center relative z-10"
            ref={containerRef}
          >
            <div className="absolute top-6 right-6 text-pink-200 animate-pulse">
                <Sparkles size={32} />
            </div>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-block p-5 bg-pink-50 rounded-full text-pink-400 mb-8 shadow-inner"
            >
              <Heart fill="currentColor" size={48} />
            </motion.div>

            <h2 className="font-handwritten text-5xl md:text-6xl text-slate-800 mb-6">
              So...
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              After looking back at our journey,
              <br />
              there's just one thing left to ask...
              <br />
              <span className="font-bold text-pink-500 mt-4 block text-3xl">Will you be my Galentine?</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 min-h-[100px]">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: '#db2777' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="px-12 py-5 bg-pink-500 text-white rounded-full font-bold text-xl shadow-xl shadow-pink-200 transition-all flex items-center gap-3 group relative z-20"
              >
                YES! <Heart size={24} fill="white" className="group-hover:scale-125 transition-transform" />
              </motion.button>

              <motion.button
                animate={{ x: noPosition.x, y: noPosition.y }}
                onMouseEnter={handleNoHover}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="px-8 py-4 bg-white/50 text-slate-400 rounded-full font-medium text-lg border border-slate-200 backdrop-blur-sm cursor-default"
              >
                No 🙈
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-pink-50/90 backdrop-blur-md p-6"
          >
            <div className="text-center max-w-2xl bg-white p-12 rounded-[4rem] shadow-2xl border-4 border-white">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                className="text-9xl mb-8"
              >
                💌
              </motion.div>
              <h2 className="font-handwritten text-6xl md:text-8xl text-pink-600 mb-8">
                Yayyy! 💖
              </h2>
              <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-medium">
                You're stuck with me forever now!
                <br />
                <span className="text-pink-400 font-handwritten text-4xl mt-4 block">Besties for life.</span>
              </p>
              
              <div className="mt-12 flex justify-center gap-6">
                 {[1,2,3,4].map(i => (
                   <motion.div 
                    key={i}
                    animate={{ 
                      y: [0, -15, 0],
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ delay: i * 0.15, repeat: Infinity, duration: 2 }}
                    className="text-pink-400 text-5xl"
                   >
                     ❤️
                   </motion.div>
                 ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="mt-12 text-pink-300 hover:text-pink-500 transition-colors underline underline-offset-8"
              >
                Back to the beginning
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProposalSection;
