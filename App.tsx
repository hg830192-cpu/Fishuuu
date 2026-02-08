import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppStage } from './types';
import { FloatingHearts } from './components/FloatingHearts';
import { Landing } from './components/Landing';
import { MemoryLane } from './components/MemoryLane';
import { CupidGen } from './components/CupidGen';
import { Proposal } from './components/Proposal';
import { Success } from './components/Success';
import { NextUnlock } from './components/NextUnlock';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.LANDING);

  // Define transition variants for smooth sliding
  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-dreamy-pink via-purple-100 to-dreamy-blue overflow-hidden selection:bg-pink-200">
      {/* Background Animation */}
      <FloatingHearts />

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {stage === AppStage.LANDING && (
          <motion.div
            key="landing"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <Landing onStart={() => setStage(AppStage.MEMORY_LANE)} />
          </motion.div>
        )}

        {stage === AppStage.MEMORY_LANE && (
          <motion.div
            key="memory"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <MemoryLane onNext={() => setStage(AppStage.CUPID_POEM)} />
          </motion.div>
        )}

        {stage === AppStage.CUPID_POEM && (
          <motion.div
            key="cupid"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <CupidGen onNext={() => setStage(AppStage.PROPOSAL)} />
          </motion.div>
        )}

        {stage === AppStage.PROPOSAL && (
          <motion.div
            key="proposal"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <Proposal onYes={() => setStage(AppStage.SUCCESS)} />
          </motion.div>
        )}

        {stage === AppStage.SUCCESS && (
          <motion.div
            key="success"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <Success onUnlock={() => setStage(AppStage.NEXT_UNLOCK)} />
          </motion.div>
        )}

        {stage === AppStage.NEXT_UNLOCK && (
          <motion.div
            key="unlock"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <NextUnlock />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Music/Sound Control or Footer could go here */}
      <div className="fixed bottom-4 left-0 right-0 text-center z-50 pointer-events-none">
        <p className="font-quicksand text-xs text-pink-400 font-bold opacity-50">
          Made with ❤️ for Fishuu
        </p>
      </div>
    </div>
  );
};

export default App;
