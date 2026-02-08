import React from 'react';
import { motion } from 'framer-motion';

// ==============================================================================
// 📸 HOW TO ADD YOUR PHOTOS:
// 1. Upload your photos to a site like imgur.com or imgbb.com
// 2. Copy the "Direct Link" (ending in .jpg or .png)
// 3. Paste the link inside the quotes below
// ==============================================================================

const PHOTOS = [
  {
    id: 1,
    // PASTE YOUR 1ST PHOTO LINK HERE (The couple selfie):
    src: "https://i.imgur.com/1DfeJPh.jpeg", 
    caption: "My Forever 💖"
  },
  {
    id: 2,
    // PASTE YOUR 2ND PHOTO LINK HERE (The funny/tongue out one):
    src: "https://i.imgur.com/7xi5t3E.jpeg", 
    caption: "Our Crazy Love 🤪"
  },
  {
    id: 3,
    // PASTE YOUR 3RD PHOTO LINK HERE (The solo girl/pout):
    src: "https://i.imgur.com/lM2NtuQ.jpeg", 
    caption: "My Beautiful Angel 🌸"
  }
];

interface MemoryLaneProps {
  onNext: () => void;
}

export const MemoryLane: React.FC<MemoryLaneProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 z-10 relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl border border-white text-center max-w-5xl w-full"
      >
        <h2 className="font-pacifico text-4xl md:text-5xl text-pink-500 mb-8 text-center drop-shadow-sm">
          My World 🌍
        </h2>

        {/* Photos Container - Circular Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: index % 2 === 0 ? 3 : -3 }}
              transition={{ delay: index * 0.3, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
              className="relative group flex flex-col items-center"
            >
              {/* Circle Container */}
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-[8px] border-white shadow-xl overflow-hidden ring-4 ring-pink-200">
                <img 
                  src={photo.src} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Caption */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.3 }}
                className="mt-4 bg-white/90 px-6 py-2 rounded-full shadow-md whitespace-nowrap border border-pink-100"
              >
                <span className="text-pink-600 font-bold font-quicksand text-lg">{photo.caption}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <div className="space-y-4 text-lg text-gray-700 font-medium font-quicksand inline-block bg-white/50 p-6 rounded-2xl border-2 border-white/50">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="flex items-center gap-4"
          >
            <span className="text-3xl">🍦</span>
            <span>You are sweeter than the finest chocolate ice cream.</span>
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-3xl">🍫</span>
            <span>Your smile melts my heart faster than chocolate in the sun.</span>
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3 }}
            className="flex items-center gap-4"
          >
            <span className="text-3xl">🧸</span>
            <span>You are my cute little baby, forever and always.</span>
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="mt-8 text-center"
        >
          <button 
            onClick={onNext}
            className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all animate-pulse"
          >
            Tell me more! 👉
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};