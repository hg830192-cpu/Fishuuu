import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProposalProps {
  onYes: () => void;
}

export const Proposal: React.FC<ProposalProps> = ({ onYes }) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  const moveNoButton = () => {
    // Calculate random position within a reasonable range
    // Using simple random logic to make it "run away"
    const x = (Math.random() - 0.5) * 300; 
    const y = (Math.random() - 0.5) * 300;
    setNoButtonPos({ x, y });
    setHoverCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 z-10 relative overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/95 p-8 md:p-12 rounded-[3rem] shadow-2xl text-center max-w-2xl border-8 border-double border-pink-200 z-20"
      >
        <div className="mb-6">
          <img 
            src="/proposal.png" 
            alt="Cute Proposal" 
            className="w-48 h-48 mx-auto rounded-2xl object-cover shadow-lg"
          />
        </div>
        
        <h2 className="font-pacifico text-4xl md:text-5xl text-pink-600 mb-6 leading-tight">
          Will you make me the happiest person and be my Valentine forever? 💍
        </h2>
        
        <p className="font-quicksand text-gray-500 text-lg mb-8">
          Today is Propose Day, and I want to tell you that you are my chocolate, my ice cream, and my whole dreamy world. 
        </p>

        <div className="relative h-40 flex items-center justify-center gap-8 w-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            className="bg-green-500 text-white text-3xl font-bold px-12 py-4 rounded-full shadow-[0_10px_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-colors z-30"
          >
            YES! 💖
          </motion.button>

          <motion.button
            animate={{ x: noButtonPos.x, y: noButtonPos.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onHoverStart={moveNoButton}
            onClick={moveNoButton}
            className="bg-gray-200 text-gray-500 text-lg font-bold px-6 py-2 rounded-full shadow-md hover:bg-gray-300 transition-colors absolute"
            style={{ 
               // Start slightly offset so it doesn't overlap YES initially
               right: '10%' 
            }}
          >
            {hoverCount > 3 ? "Just Click Yes! 😤" : "No 🙈"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
