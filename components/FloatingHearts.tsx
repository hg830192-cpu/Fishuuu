import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = ['💖', '🍫', '🍦', '🌸', '✨', '🧸', '🍭'];

interface TapHeart {
  id: number;
  x: number;
  y: number;
}

export const FloatingHearts: React.FC = () => {
  // Background floating items (existing animation)
  const floatingItems = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      emoji: items[i % items.length],
      left: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  // Tap hearts state
  const [tapHearts, setTapHearts] = useState<TapHeart[]>([]);

  const createHeart = (x: number, y: number) => {
    const newHeart: TapHeart = {
      id: Date.now() + Math.random(),
      x,
      y,
    };

    setTapHearts(prev => [...prev, newHeart]);

    setTimeout(() => {
      setTapHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 1200);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createHeart(e.clientX, e.clientY);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        createHeart(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <>
      {/* Background Floating Items */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingItems.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-2xl opacity-40"
            initial={{ y: '110vh', x: item.left }}
            animate={{ y: '-10vh' }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
            style={{ left: item.left }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Tap Hearts Animation */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <AnimatePresence>
          {tapHearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ opacity: 1, scale: 1, x: heart.x, y: heart.y }}
              animate={{ opacity: 0, y: heart.y - 120, scale: 1.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute text-pink-500 text-2xl select-none"
            >
              ❤️
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
