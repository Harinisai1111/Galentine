
import React from 'react';
import { motion } from 'framer-motion';

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-200 opacity-40 text-2xl"
          initial={{
            y: '110vh',
            x: `${Math.random() * 100}vw`,
            rotate: 0,
            scale: 0.5 + Math.random()
          }}
          animate={{
            y: '-10vh',
            rotate: 360,
            transition: {
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20
            }
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
