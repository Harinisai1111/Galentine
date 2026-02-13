
import React from 'react';
import { motion } from 'framer-motion';
import { Memory } from '../types';

interface PolaroidProps {
  memory: Memory;
}

const Polaroid: React.FC<PolaroidProps> = ({ memory }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
      style={{ rotate: memory.rotation }}
      className="bg-white p-4 pb-12 shadow-xl border border-gray-100 flex flex-col items-center group relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden w-full h-64 bg-gray-50">
        <img
          src={memory.imageUrl}
          alt={memory.caption}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="mt-4 font-handwritten text-xl text-slate-700 text-center px-2">
        {memory.caption}
      </div>
      
      {/* Decorative tape effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-pink-100/50 backdrop-blur-sm transform -rotate-1 opacity-60"></div>
    </motion.div>
  );
};

export default Polaroid;
