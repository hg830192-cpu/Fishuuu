import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 z-10 relative">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}
        className="mb-8"
      >
        <h1 className="font-pacifico text-6xl md:text-8xl text-pink-500 mb-4 drop-shadow-md">
          Hey Fishuu! 🌸
        </h1>
        <p className="text-xl md:text-2xl text-purple-600 font-quicksand font-semibold">
          A magical surprise awaits you...
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onStart}
        className="bg-white px-8 py-4 rounded-full shadow-xl shadow-pink-200 text-pink-500 font-bold text-xl flex items-center gap-3 border-2 border-pink-100 hover:bg-pink-50 transition-colors"
      >
        <Heart className="fill-pink-500 animate-pulse" />
        Open Your Surprise
        <Heart className="fill-pink-500 animate-pulse" />
      </motion.button>
      
      <motion.div 
        className="mt-12 text-6xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        👼💘
      </motion.div>
    </div>
  );
};
