import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export const NextUnlock: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 z-10 relative text-center overflow-hidden">
        {/* Floating Background Elements specifically for this slide */}
       <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute text-4xl opacity-30"
                  initial={{ top: '-10%', left: `${Math.random() * 100}%` }}
                  animate={{ top: '110%' }}
                  transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: 'linear' }}
              >
                  {i % 2 === 0 ? '🍫' : '🍦'}
              </motion.div>
          ))}
       </div>

      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/40 backdrop-blur-xl p-10 rounded-3xl border border-white/60 max-w-md w-full shadow-2xl z-20"
      >
        <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-gradient-to-tr from-pink-200 to-purple-200 p-6 rounded-full w-28 h-28 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white"
        >
          <Lock className="w-12 h-12 text-purple-600" />
        </motion.div>
        
        <h2 className="font-pacifico text-4xl text-purple-800 mb-4 drop-shadow-sm">
          Coming Soon... 🤫
        </h2>
        
        <div className="bg-white/60 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-xl text-choco-dark mb-2">Tomorrow is Chocolate Day! 🍫</h3>
            <p className="font-quicksand text-lg text-gray-700">
            Get your sweet tooth ready, Fishuu! I have a whole world of chocolates and ice creams waiting for you.
            </p>
        </div>

        <div className="flex justify-center gap-6 text-5xl">
           <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>🍦</motion.span>
           <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>💖</motion.span>
           <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>🍫</motion.span>
        </div>
      </motion.div>
    </div>
  );
};