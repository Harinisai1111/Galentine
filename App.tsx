
import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Sparkle, Stars, Flower2, Camera, Heart, Music } from 'lucide-react';
import { MEMORIES, REASONS, TIMELINE } from './constants';
import FloatingHearts from './components/FloatingHearts';
import Polaroid from './components/Polaroid';
import ProposalSection from './components/ProposalSection';
import BackgroundMusic from './components/BackgroundMusic';


const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  return (
    <div className="relative min-h-screen text-slate-800 selection:bg-pink-200 bg-[#fff8f0]">
      <FloatingHearts />
      <BackgroundMusic />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-300 via-pink-400 to-lavender-300 origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative z-10 overflow-hidden">
        <motion.div
          style={{ opacity: backgroundOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-pink-50/50 to-transparent pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8 relative"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="text-pink-300 opacity-60"
            >
              <Stars size={64} />
            </motion.div>
          </div>
          <h1 className="text-7xl md:text-9xl font-handwritten text-pink-600 drop-shadow-md tracking-tight">
            Hey you 🤍
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-3xl text-slate-400 font-light tracking-widest max-w-2xl mx-auto font-handwritten"
          >
            I made something special, just for us...
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-pink-300 text-sm font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Explore memories</span>
          <ChevronDown className="text-pink-300 group-hover:translate-y-1 transition-transform" size={40} />
        </motion.div>
      </section>

      {/* Intro Message Card */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/50 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] border border-white shadow-2xl relative"
        >
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg text-pink-400 rotate-12">
            <Heart size={32} fill="currentColor" />
          </div>

          <Flower2 className="mx-auto mb-8 text-pink-300" size={48} />
          <h2 className="text-4xl md:text-5xl font-handwritten text-slate-700 mb-8">
            To my favorite human,
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light italic">
            "Heyy girl we've hv evloved through various stages in our friendships from school mates to van mates to classmates to becoming besties and now ur basically my family member (PS. ur mom loves me more hehehe) , after a lot of failed frnds gng we found each other and I don't plan on letting you go anytime soon LOVE YOU LOADS.........."
          </p>
        </motion.div>
      </section>

      {/* Memory Gallery Grid */}
      <section className="py-24 px-4 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center gap-4 mb-20 text-center"
        >
          <Camera className="text-pink-300 mb-2" size={32} />
          <h3 className="text-5xl font-handwritten text-pink-600">The Scrapbook of Us</h3>
          <p className="text-slate-400 text-lg">Hover to reveal the feeling behind the frame</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {MEMORIES.map((memory) => (
            <Polaroid key={memory.id} memory={memory} />
          ))}
        </div>
      </section>

      {/* Why You're My Person (Glass Cards) */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-pink-50/40 skew-y-3 origin-right -z-10" />
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-5xl font-handwritten text-pink-600 mb-20 text-center">Reasons You're My Soul-Sister</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {REASONS.map((reason) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reason.id * 0.15 }}
                whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(244, 114, 182, 0.15)" }}
                className="bg-white/80 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-sm border border-pink-100 flex flex-col items-center text-center group transition-all"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 bg-pink-50 p-6 rounded-full">
                  {reason.emoji}
                </div>
                <h4 className="text-2xl font-handwritten font-bold text-slate-800 mb-4">{reason.title}</h4>
                <p className="text-slate-500 leading-relaxed font-light">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Timeline Journey */}
      <section className="py-32 max-w-5xl mx-auto px-4 relative z-10">
        <h3 className="text-5xl font-handwritten text-pink-600 mb-24 text-center">Our Timeline</h3>
        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-100 via-pink-300 to-pink-100 -translate-x-1/2 hidden md:block rounded-full" />

          <div className="space-y-32">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.span
                    whileInView={{ scale: [1, 1.2, 1] }}
                    className="text-5xl font-handwritten text-pink-400 mb-4 block"
                  >
                    {item.year}
                  </motion.span>
                  <h4 className="text-3xl font-bold text-slate-800 mb-4 font-handwritten">{item.title}</h4>
                  <p className="text-lg text-slate-500 font-light leading-relaxed">{item.description}</p>
                </div>

                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-pink-500 relative z-20 hidden md:block shadow-xl shadow-pink-200 border-4 border-white" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="absolute inset-0 bg-pink-200/30 rounded-full scale-150 animate-ping hidden md:block"
                  />
                </div>

                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group"
                  >
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music / Vibe Section (Visual Only) */}
      <section className="py-24 px-4 text-center relative z-10">
        <div className="max-w-md mx-auto bg-white/40 p-8 rounded-[2rem] border border-white/60 shadow-lg backdrop-blur-sm">
          <Music className="mx-auto mb-4 text-pink-300" />
          <p className="text-slate-400 text-sm tracking-widest uppercase mb-4">Our Current Vibe</p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-1 h-4 bg-pink-300 animate-[bounce_1s_infinite]" />
            <div className="w-1 h-8 bg-pink-400 animate-[bounce_1.2s_infinite]" />
            <div className="w-1 h-6 bg-pink-300 animate-[bounce_0.8s_infinite]" />
            <div className="w-1 h-10 bg-pink-500 animate-[bounce_1.1s_infinite]" />
            <div className="w-1 h-5 bg-pink-400 animate-[bounce_0.9s_infinite]" />
          </div>
          <p className="mt-4 font-handwritten text-2xl text-slate-700">"Dancing in the Kitchen" - LANY</p>
        </div>
      </section>

      {/* Final Proposal */}
      <ProposalSection />

      {/* Footer */}
      <footer className="py-20 text-center relative z-10">
        <div className="w-12 h-1 bg-pink-100 mx-auto mb-8 rounded-full" />
        <p className="text-slate-400 font-light text-sm tracking-widest uppercase mb-2">Made with excessive amounts of love</p>
        <p className="font-handwritten text-2xl text-pink-300">for my best friend ever ♾️</p>
      </footer>
    </div>
  );
};

export default App;
