import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  shine?: boolean;
}

export function Card({ children, className = '', shine = false }: CardProps) {
  const baseClasses = 'relative overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl';
  const shineClasses = shine ? `
    before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]
    before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
  ` : '';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`${baseClasses} ${shineClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
}