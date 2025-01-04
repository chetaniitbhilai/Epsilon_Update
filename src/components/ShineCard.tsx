import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ShineCardProps {
  children: ReactNode;
  className?: string;
}

export default function ShineCard({ children, className = '' }: ShineCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl ${className}
        before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]
        before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`}
    >
      {children}
    </motion.div>
  );
}