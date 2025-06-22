'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GridItem {
  id: number;
  active: boolean;
  delay: number;
}

export default function AnimatedGrid() {
  const [gridItems, setGridItems] = useState<GridItem[]>([]);

  useEffect(() => {
    // Create a 10x6 grid
    const items: GridItem[] = [];
    for (let i = 0; i < 60; i++) {
      items.push({
        id: i,
        active: Math.random() > 0.7,
        delay: Math.random() * 2
      });
    }
    setGridItems(items);

    // Randomly activate/deactivate grid items
    const interval = setInterval(() => {
      setGridItems(prev => 
        prev.map(item => ({
          ...item,
          active: Math.random() > 0.8
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="grid grid-cols-10 gap-4 h-full w-full p-8">
        {gridItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: item.active ? 1 : 0.3,
              scale: item.active ? 1 : 0.5,
              backgroundColor: item.active ? '#3B82F6' : '#374151'
            }}
            transition={{ 
              duration: 1,
              delay: item.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 2
            }}
            className="aspect-square rounded-sm"
          />
        ))}
      </div>
    </div>
  );
} 