import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import myLove from '../components/my-love.png';   // 👈 ADD THIS

interface SuccessProps {
  onUnlock: () => void;
}

export const Success: React.FC<SuccessProps> = ({ onUnlock }) => {
  const { width, height } = useWindowSize();
  const [answered, setAnswered] = useState(false);

  const handleAnswer = () => {
    setAnswered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 z-10 relative overflow-hidden">
      <Confetti width={width} height={height} numberOfPieces={300} recycle={false} />
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white/90 p-10 rounded-3xl shadow-[0_0_50px_rgba(236,72,153,0.5)] mb-8 max-w-2xl backdrop-blur-sm border-2 border-pink-100"
      >
        <h1 className="font-pacifico text-5xl md:text-7xl text-pink-600 mb-4">
          YAAAY! 🎉
        </h1>
        <p className="text-2xl text-purple-600 font-quicksand font-bold mb-6">
          I knew you loved me! 💖
        </p>

        {/* Your Photo */}
        <motion.img 
  src={my-love}
  alt="The man who loves you forever ❤️"
  className="w-48 h-48 mx-auto rounded-3xl object-cover shadow-xl mb-6 border-4 border-pink-200"
  initial={{ y: 20 }}
  animate={{ y: 0 }}
/>

        {!answered ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6"
          >
            <p className="text-xl text-gray-700 font-quicksand mb-4 font-bold">
              One tiny question before your surprise... 💖<br/>
              Who will love Fishuu endlessly, protect her smile, 
              and spend his life trying to be the best man for her? 🌍✨
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={handleAnswer} 
                className="bg-pink-100 hover:bg-pink-200 text-pink-600 px-6 py-3 rounded-full font-bold transition-all"
              >
                Her Future Husband 😌💍
              </button>

              <button 
                onClick={handleAnswer} 
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all text-xl"
              >
                The Man Who Loves Her Forever 💖
              </button>

              <button 
                onClick={handleAnswer} 
                className="bg-pink-100 hover:bg-pink-200 text-pink-600 px-6 py-3 rounded-full font-bold transition-all"
              >
                Her Personal Superhero 🦸‍♂️✨
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <p className="text-2xl text-green-600 font-bold mb-6 font-pacifico">
              Correct! I promise to love you, protect your smile, and be the best man for you — always and forever. ♾️💖
            </p>
            <motion.button
              onClick={onUnlock}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg text-xl animate-bounce"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🎁 Unlock Tomorrow's Surprise
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
