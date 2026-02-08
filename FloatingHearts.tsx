import React from 'react';
import { motion } from 'framer-motion';

const items = ['💖', '🍫', '🍦', '🌸', '✨', '🧸', '🍭'];

export const FloatingHearts: React.FC = () => {
  // Generate a stable set of floating items
  const floatingItems = React.useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      emoji: items[i % items.length],
      left: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
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
  );
};
