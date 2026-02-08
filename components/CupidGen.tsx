import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Loader2, Sparkles } from 'lucide-react';
import { generateLovePoem } from '../services/geminiService';

interface CupidGenProps {
  onNext: () => void;
}

export const CupidGen: React.FC<CupidGenProps> = ({ onNext }) => {
  const [poem, setPoem] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateLovePoem("Fishuu", ["Chocolates", "Ice Cream", "Cute Babies", "Surprises"]);
    setPoem(result);
    setLoading(false);
    setGenerated(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 z-10 relative max-w-2xl mx-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/90 rounded-[2rem] p-8 shadow-2xl text-center border-4 border-pink-100 backdrop-blur-md"
      >
        <div className="relative mb-6">
           <motion.div 
             animate={{ y: [0, -10, 0] }} 
             transition={{ repeat: Infinity, duration: 2 }}
             className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-pink-200 shadow-lg bg-pink-50 flex items-center justify-center"
           >
              {/* Cute Baby/Angel GIF */}
              <img 
                src="/cupid.gif" 
                alt="Cute Baby Angel"
                className="w-full h-full object-cover"
              />
           </motion.div>
           <motion.div 
             className="absolute -top-2 -right-2 text-4xl"
             animate={{ rotate: [0, 20, 0] }}
             transition={{ repeat: Infinity, duration: 1.5 }}
           >
             👼
           </motion.div>
        </div>

        <h2 className="font-pacifico text-4xl text-purple-600 mb-2">
          Ask Cupid Baby!
        </h2>
        <p className="text-gray-600 mb-8 font-quicksand text-lg">
          Our little cupid has a special message for Fishuu...
        </p>

        {!generated && (
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-4 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Sparkles />}
            {loading ? "Asking Cupid..." : "Reveal Magic Message"}
          </button>
        )}

        {generated && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-pink-50 p-6 rounded-2xl border border-pink-200 mb-6 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-2 opacity-10 text-4xl">💌</div>
            <p className="font-pacifico text-2xl text-gray-800 leading-relaxed drop-shadow-sm">
              "{poem}"
            </p>
          </motion.div>
        )}

        {generated && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={onNext}
            className="mt-4 bg-white text-pink-500 border-2 border-pink-400 px-8 py-3 rounded-full font-bold shadow-md hover:bg-pink-50 transition-all text-lg"
          >
            I have a question... 🥺 👉
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};
